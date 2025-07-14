import fs from 'fs';
import path from 'path';
import xlsx from 'xlsx';

const DEFAULT_VALUES = {
  "Variant Grams": 0,
  "Variant Inventory Tracker": "shopify",
  "Variant Inventory Policy": "deny",
  "Variant Fulfillment Service": "manual",
  "Variant Requires Shipping": true,
  "Variant Taxable": true,
  "Gift Card": false,
  "Google Shopping / Gender": "female",
  Status: "active"
};

export function saveToCSVAndExcel(productRow, variants = [], extraImages = []) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const fileName = `products_export_${timestamp}`;
  const outputDir = './output';
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Prepare worksheet data
  const worksheetData = [];
  
  // Add main product row (first variant)
  if (variants.length > 0) {
    const firstVariant = variants[0];
    worksheetData.push({
      ...productRow,
      "Variant SKU": firstVariant["Variant SKU"],
      "Option1 Value": firstVariant["Option1 Value"],
      "Option2 Value": firstVariant["Option2 Value"],
      "Variant Price": firstVariant["Variant Price"],
      "Variant Compare At Price": firstVariant["Variant Compare At Price"],
      "Image Src": firstVariant["Image Src"],
      "Image Position": 1,
      "Variant Image": firstVariant["Variant Image"],
      "Cost per item": firstVariant["Cost per item"],
      ...DEFAULT_VALUES
    });
  } else {
    worksheetData.push({
      ...productRow,
      ...DEFAULT_VALUES
    });
  }

  // Add other variants
  variants.slice(1).forEach((variant, index) => {
    worksheetData.push({
      Handle: variant.Handle,
      "Variant SKU": variant["Variant SKU"],
      "Option1 Value": variant["Option1 Value"],
      "Option2 Value": variant["Option2 Value"],
      "Variant Price": variant["Variant Price"],
      "Variant Compare At Price": variant["Variant Compare At Price"],
      "Image Src": variant["Image Src"],
      "Image Position": index + 2,
      "Variant Image": variant["Variant Image"],
      "Cost per item": variant["Cost per item"],
      Status: "active",
      // Empty other fields
      Title: '',
      "Body (HTML)": '',
      Vendor: '',
      Type: '',
      Tags: '',
      Published: '',
      "Option1 Name": '',
      "Option2 Name": '',
      ...Object.keys(DEFAULT_VALUES).reduce((acc, key) => {
        if (key !== 'Status') acc[key] = '';
        return acc;
      }, {})
    });
  });

  // Add extra images
  extraImages.forEach((image, index) => {
    worksheetData.push({
      Handle: image.Handle,
      "Image Src": image["Image Src"],
      "Image Position": variants.length + index + 1,
      // Empty other fields
      Title: '',
      "Body (HTML)": '',
      "Variant SKU": '',
      "Option1 Name": '',
      "Option1 Value": '',
      "Option2 Name": '',
      "Option2 Value": '',
      "Variant Price": '',
      "Variant Compare At Price": '',
      "Variant Image": '',
      "Cost per item": '',
      Status: '',
      ...Object.keys(DEFAULT_VALUES).reduce((acc, key) => {
        acc[key] = '';
        return acc;
      }, {})
    });
  });

  // Create and save files
  const ws = xlsx.utils.json_to_sheet(worksheetData);
  const wb = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(wb, ws, 'Products');

  const csvPath = path.join(outputDir, `${fileName}.csv`);
  const excelPath = path.join(outputDir, `${fileName}.xlsx`);

  xlsx.writeFile(wb, csvPath, { bookType: 'csv' });
  xlsx.writeFile(wb, excelPath);

  console.log(`✅ Saved files: ${csvPath}, ${excelPath}`);
}
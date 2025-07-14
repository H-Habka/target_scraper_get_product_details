import fs from 'fs'; 
import path from 'path';
import xlsx from 'xlsx';

export function saveToCSVAndExcel(productRow, extraImages = [], variants = [], option1Name = '', option2Name = '') {
  const now = new Date();
  const timestamp = now.toISOString().slice(0, 16).replace("T", "_").replace(":", "-");
  const fileName = `Target_products_${timestamp}`;
  const outputDir = './output';
  
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  // 1. Prepare main product data
  const worksheetData = [];
  
  // Add main product row (first variant)
  const firstVariant = variants.length ? variants[0] : productRow;
  worksheetData.push({
    ...productRow,
    "Option1 Name": option1Name,
    "Option1 Value": firstVariant["Option1 Value"] || '',
    "Option2 Name": option2Name,
    "Option2 Value": firstVariant["Option2 Value"] || '',
    "Variant SKU": firstVariant["Variant SKU"] || productRow["Variant SKU"],
    "Variant Price": firstVariant["Variant Price"] || productRow["Variant Price"],
    "Variant Compare At Price": firstVariant["Variant Compare At Price"] || productRow["Variant Compare At Price"],
    "Variant Image": firstVariant["Variant Image"] || '',
    "Image Src": firstVariant["Image Src"] || productRow["Image Src"]
  });

  // 2. Add additional variants (without repeating option names)
  if (variants.length > 1) {
    worksheetData.push(...variants.slice(1).map(variant => ({
      Handle: variant.Handle,
      Title: '',
      "Body (HTML)": '',
      "Variant SKU": variant["Variant SKU"],
      "Option1 Name": '', // Empty for subsequent variants
      "Option1 Value": variant["Option1 Value"],
      "Option2 Name": '', // Empty for subsequent variants
      "Option2 Value": variant["Option2 Value"],
      "Variant Price": variant["Variant Price"],
      "Variant Compare At Price": variant["Variant Compare At Price"],
      "Variant Image": variant["Variant Image"],
      "Image Src": variant["Image Src"],
      "Cost per item": variant["Variant Price"], // Assuming same as variant price
      "Original Price": variant["Variant Compare At Price"],
      Vendor: productRow.Vendor,
      Type: productRow.Type,
      Tags: productRow.Tags,
      ...DEFAULT_VALUES,
      "product.metafields.custom.original_product_url": productRow["product.metafields.custom.original_product_url"]
    })));
  }

  // 3. Add extra images as separate rows
  extraImages.forEach(image => {
    worksheetData.push({
      Handle: productRow.Handle,
      "Image Src": image["Image Src"],
      // Empty other fields for image rows
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
      "Original Price": '',
      Vendor: '',
      Type: '',
      Tags: '',
      ...Object.keys(DEFAULT_VALUES).reduce((acc, key) => ({ ...acc, [key]: '' }), {}),
      "product.metafields.custom.original_product_url": ''
    });
  });

  // 4. Create and save files
  const ws = xlsx.utils.json_to_sheet(worksheetData);
  const wb = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(wb, ws, 'Products');

  const csvPath = path.join(outputDir, `${fileName}.csv`);
  const excelPath = path.join(outputDir, `${fileName}.xlsx`);

  xlsx.writeFile(wb, csvPath, { bookType: 'csv' });
  xlsx.writeFile(wb, excelPath);

  console.log(`✅ Saved files: ${csvPath}, ${excelPath}`);
}

// Helper to get default values without reference
function getDefaultValues() {
  return {
    "Variant Fulfillment Service": "manual",
    "Variant Inventory Policy": "deny",
    "Variant Inventory Tracker": "shopify",
    "Google Shopping / Gender": "female",
    // Add other default values as needed
  };
}

const DEFAULT_VALUES = getDefaultValues();
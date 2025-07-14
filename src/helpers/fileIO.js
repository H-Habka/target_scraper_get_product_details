import fs from 'fs'; 
import path from 'path';
import xlsx from 'xlsx';

export function saveToCSVAndExcel(productRow, extraImages, variants = []) {
  const now = new Date();
  const timestamp = now.toISOString().slice(0, 16).replace("T", "_").replace(":", "-");
  const fileName = `Target_products_${timestamp}`;
  const outputDir = './output';
  
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

  // Create worksheet data
  const worksheetData = [];
  
  // Add main product row (first variant)
  const firstVariant = variants.length ? variants[0] : productRow;
  worksheetData.push({
    ...productRow,
    "Option1 Name": firstVariant["Option1 Name"] || '',
    "Option1 Value": firstVariant["Option1 Value"] || '',
    "Option2 Name": firstVariant["Option2 Name"] || '',
    "Option2 Value": firstVariant["Option2 Value"] || '',
    "Variant SKU": firstVariant["Variant SKU"] || productRow["Variant SKU"],
    "Variant Price": firstVariant["Variant Price"] || productRow["Variant Price"],
    "Variant Image": firstVariant["Variant Image"] || '',
    "Image Src": firstVariant["Image Src"] || productRow["Image Src"]
  });

  // Add other variants
  if (variants.length > 1) {
    worksheetData.push(...variants.slice(1));
  }

  // Add image rows
  extraImages.forEach(image => {
    worksheetData.push({
      Handle: productRow.Handle,
      "Image Src": image["Image Src"],
      // Empty other fields for image rows
      Title: '',
      "Body (HTML)": '',
      "Variant SKU": '',
      // ... other empty fields ...
    });
  });

  const ws = xlsx.utils.json_to_sheet(worksheetData);
  const wb = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(wb, ws, 'Products');

  const csvPath = path.join(outputDir, `${fileName}.csv`);
  const excelPath = path.join(outputDir, `${fileName}.xlsx`);

  xlsx.writeFile(wb, csvPath, { bookType: 'csv' });
  xlsx.writeFile(wb, excelPath);
}
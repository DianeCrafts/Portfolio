const fs = require('fs');
const path = require('path');

function readJsonFile(fileName) {
  try {
    const filePath = path.join(__dirname, '..', 'data', fileName);
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    return JSON.parse(fileContent);
  } catch (error) {
    throw new Error(`Failed to read JSON file: ${fileName}`);
  }
}

module.exports = {
  readJsonFile
};
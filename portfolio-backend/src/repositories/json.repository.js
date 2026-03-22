const fs = require('fs/promises');
const path = require('path');

const cache = new Map();

async function readJsonFile(fileName) {
  try {
    if (cache.has(fileName)) {
      return cache.get(fileName);
    }

    const filePath = path.join(__dirname, '..', 'data', fileName);
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const parsedData = JSON.parse(fileContent);

    cache.set(fileName, parsedData);

    return parsedData;
  } catch (error) {
    throw new Error(`Failed to read JSON file: ${fileName}`);
  }
}

function clearCache() {
  cache.clear();
}

function getCacheStats() {
  return {
    size: cache.size,
    keys: Array.from(cache.keys())
  };
}

module.exports = {
  readJsonFile,
  clearCache,
  getCacheStats
};
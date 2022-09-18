const fs = require('fs').promises;

const readFiles = async (pathToFile, encoding) => {
  return fs.readFile(pathToFile, encoding);
};

const performFileReadOperation = async (pathToFile) => {
  try {
    const data = await readFiles(pathToFile, 'utf-8');
    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { performFileReadOperation };

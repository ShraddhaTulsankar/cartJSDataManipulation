const fs = require('fs').promises;

const readFiles = async (pathToFile, encoding) => {
  return fs.readFile(pathToFile, encoding);
};

const performFileReadOperation = async (pathToFile) => {
  try {
    return await readFiles(pathToFile, 'utf-8');
  } catch (error) {
    console.log(error);
  }
};

module.exports = { performFileReadOperation };

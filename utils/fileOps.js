const fsPromises = require('fs').promises;
const path = require('path');

exports.fileReadOps = async () => {
  try {
    let data = await fsPromises.readFile(
      path.join(__dirname, '../dataset', 'pantry.json'),
      'utf-8'
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};

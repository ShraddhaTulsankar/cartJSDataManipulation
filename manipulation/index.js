const { it } = require('node:test');
const fileOps = require('../utils/fileOps');

async function read() {
  const data = await fileOps.fileReadOps();
  return JSON.parse(data);
}

const fetchData = read().then((myData) => {
  const [{ itemPrice = '$12', ...spread }, ...rest] = myData;
  console.log(itemPrice);
});

const path = require('path');
const { performFileReadOperation } = require('../utils/fileIO');

let pantryArray = [];
let buyAgainArray = [];
let produceArray = [];
let snacksArray = [];

const readReturnFiles = async () => {
  pantryArray = await performFileReadOperation('../dataset/Pantry.json');
  readArray(pantryArray);

  buyAgainArray = await performFileReadOperation('../dataset/BuyAgain.json');
  await readArray(buyAgainArray);

  produceArray = await performFileReadOperation('../dataset/Produce.json');
  await readArray(produceArray);

  snacksArray = await performFileReadOperation('../dataset/Snacks.json');
  await readArray(snacksArray);

  return pantryArray;
};

const readArray = (arr) => {
  console.log(arr);
};
readReturnFiles();

const destructureTest = () => {
  console.log('aaa', pantryArray);
};
destructureTest();

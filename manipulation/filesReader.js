const { performFileReadOperation } = require('../utils/fileIO');

let pantryArray = [];
let buyAgainArray = [];
let produceArray = [];
let snacksArray = [];

const readReturnFiles = async () => {
  pantryArray = await performFileReadOperation('../dataset/Pantry.json');
  console.log(pantryArray);

  buyAgainArray = await performFileReadOperation('../dataset/BuyAgain.json');

  produceArray = await performFileReadOperation('../dataset/Produce.json');

  snacksArray = await performFileReadOperation('../dataset/Snacks.json');
};
{
  console.log('reading...');

  readReturnFiles();

  console.log('read...');
}

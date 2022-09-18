let BuyAgainArr = require('../dataset/BuyAgain.json');
let PantryArr = require('../dataset/Pantry.json');
let ProduceArr = require('../dataset/Produce.json');
let SnacksArr = require('../dataset/Snacks.json');
const { updateObjectProperties } = require('../utils/objectManipulations');

const refactorObject = (arr) => {
  const newObject = arr.map((item, index) => {
    let { itemPrice, itemCategory, ...rest } = item;
    const [
      itemInitialPrice,
      itemLowerLimitPrice,
      itemHigherLimitPrice,
      category,
      isAvailable,
      deliveryTime,
    ] = updateObjectProperties(itemPrice);
    let itemCosts = {
      itemInitialPrice: itemInitialPrice,
      itemLowerLimitPrice: itemLowerLimitPrice,
      itemHigherLimitPrice: itemHigherLimitPrice,
    };
    let itemCategories = [category, itemCategory];
    let itemMetadata = { isAvailable: isAvailable, deliveryTime: deliveryTime };
    return {
      id: index,
      ...rest,
      itemCosts,
      itemCategory,
      itemCategories,
      itemMetadata,
    };
  });
  return newObject;
};

const printAllCategories = (callBackFunction) => {
  BuyAgainArr = callBackFunction(BuyAgainArr);
  PantryArr = callBackFunction(PantryArr);
  ProduceArr = callBackFunction(ProduceArr);
  SnacksArr = callBackFunction(SnacksArr);
  console.log(BuyAgainArr, PantryArr, ProduceArr, SnacksArr);
};

printAllCategories(refactorObject);

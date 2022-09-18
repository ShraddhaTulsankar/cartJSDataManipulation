const BuyAgainArr = require('../dataset/BuyAgain.json');
const PantryArr = require('../dataset/Pantry.json');
const ProduceArr = require('../dataset/Produce.json');
const SnacksArr = require('../dataset/Snacks.json');

const newObject = SnacksArr.map((item, index) => {
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

function updateObjectProperties(itemInitialPrice) {
  let random = Math.floor(Math.random() * 10);
  itemInitialPrice = itemInitialPrice.replace(/\$/g, '');
  itemInitialPrice = parseFloat(itemInitialPrice);
  let itemLowerLimitPrice = itemInitialPrice * 0.8;
  let itemHigherLimitPrice = itemInitialPrice * 1.5;
  let itemCategories = 'snacks';
  let isAvailable = random % 2 == 0 ? true : false;
  let deliveryTime = random;
  return [
    itemInitialPrice,
    itemLowerLimitPrice,
    itemHigherLimitPrice,
    itemCategories,
    isAvailable,
    deliveryTime,
  ];
}

console.log(newObject);

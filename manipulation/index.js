const BuyAgainArr = require('../dataset/BuyAgain.json');
const PantryArr = require('../dataset/Pantry.json');
const ProduceArr = require('../dataset/Produce.json');
const SnacksArr = require('../dataset/Snacks.json');

const updateObjectProperties = (itemInitialPrice) => {
  let random = Math.floor(Math.random() * 10);
  itemInitialPrice = parseFloat(itemInitialPrice.replace(/\$/g, ''));
  let itemLowerLimitPrice = itemInitialPrice * 0.8;
  let itemHigherLimitPrice = itemInitialPrice * 1.5;
  let itemCategories =
    random >= 0 && random < 3
      ? 'snacks'
      : random >= 3 && random < 6
      ? 'pantry'
      : random >= 6 && random < 9
      ? 'produce'
      : 'buyAgain';
  let isAvailable = random % 2 == 0 ? true : false;
  let deliveryTime = random == 0 ? 'Same Day Delivery' : random;
  return [
    itemInitialPrice,
    itemLowerLimitPrice,
    itemHigherLimitPrice,
    itemCategories,
    isAvailable,
    deliveryTime,
  ];
};

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

console.log(newObject);

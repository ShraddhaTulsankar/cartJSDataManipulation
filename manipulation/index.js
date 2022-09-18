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

const printAllCategories = (callbackfunction, isConsole) => {
  BuyAgainArr = callbackfunction(BuyAgainArr);
  PantryArr = callbackfunction(PantryArr);
  ProduceArr = callbackfunction(ProduceArr);
  SnacksArr = callbackfunction(SnacksArr);
  isConsole && console.log(BuyAgainArr, PantryArr, ProduceArr, SnacksArr);
};

const isItemAvailableOnCategories = (arr) => {
  const isItemAvailable = arr.filter((item) => {
    const {
      itemMetadata: { isAvailable },
    } = item;
    return isAvailable && item;
  });
  return isItemAvailable;
};

const formatRatings = (arr) => {
  const updateRatingsFormat = arr.map((item) => {
    let { itemRating } = item;
    itemRating = parseFloat(itemRating.replace(/,/g, ''));
    return { ...item, itemRating };
  });
  return updateRatingsFormat;
};

printAllCategories(refactorObject, false);
printAllCategories(formatRatings, false);

const fetchUniqueProducts = () => {
  const uniqueCategories = BuyAgainArr.filter((item) => {
    const {
      itemCategories: [category1, category2],
    } = item;
    return category1 !== category2 && item;
  });
  return uniqueCategories;
};

printAllCategories(fetchUniqueProducts, true);

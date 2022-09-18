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
module.exports = { updateObjectProperties };

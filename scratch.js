/* 

BuyAgain:
const item : {
 prop1,
 prop1,
 prop1,
 itemPrice : {
  itemInitialPrice : $...,
  itemLowerLimitPrice : $...,
  itemHigherLimitPrice : $...,
 }
 category : ['' , '' , ''],
 metdata : {
  isAvailable : boolean,
  deliveryTime : Math.random(1-9) days,
 }
}




git checkout develop
git commit -m "Master Branch Created"
git push -u origin develop








*/

/* const item = {
  itemName: 'Amazon Kitchen, Garlic Hummus, 8 oz',
  itemImage:
    'https://images-na.ssl-images-amazon.com/images/I/81enKloyHSL.AC_SL240_.jpg',
  itemRating: '8,454',
  itemPrice: {
    itemInitialPrice: '$2.19',
    itemLowerLimitPrice: '$1.00', //logic
    itemHigherLimitPrice: '$5.00', //logic
  },
  category: ['pantry', 'snacks'],
  metdata: {
    isAvailable: true, //boolean random
    deliveryTime: 'randomNum + days',
  },
}; */

/* --------------------------------------------------------------------------- */

/* const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const fileReadOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, '../dataset', 'pantry.js'),
      'utf-8'
    );
    console.log(data.toString());
    await fsPromises.writeFile(
      path.join(__dirname, '../dataset', 'newPantry.js'),
      data
    );
    return data.toString();
  } catch (err) {
    console.error(err);
  }
}; */

/* const fsPromises = require('fs').promises;
const fs = require('fs');
const path = require('path'); */

/* const readData = async (pathToFile, encoding) => {
  const data = fs.readFile(pathToFile, encoding, (err) => {
    if (err) throw err;
  });
  console.log(data);
  return data;
}; */

/* const readData = async (pathToFile, encoding) => {
  try {
    const data = await fsPromises.readFile(pathToFile, encoding);
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};

const readAFile = async (pathToFile) => {
  try {
    console.log(pathToFile);
    const fileRead = await readData(pathToFile, 'utf-8');
    console.log('Reading 2....', fileRead);
    return fileRead;
  } catch (err) {
    console.log(err);
  }
};

readAFile(path.join(__dirname, '../dataset', 'pantry.js')); */

/* 
git add -A
git checkout develop
git commit -m "Master Branch Created"
git push -u origin develop */

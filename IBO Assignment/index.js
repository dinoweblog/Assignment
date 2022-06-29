/*
You have been given a list of products which is having property productName, quantity and description.


PROBLEM STATEMENTS:

1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}



2. you need to write a function say, getUniquePrducts which should return an array of objects 
by grouping the products based on the productName and summing up the quantity for the same products
 present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]

*/

const listOfProducts = [
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan",
  },
];

let UniqueProductCount = {};
let UniqueProducts = [];

const getUniqueProductCount = () => {
  for (let i = 0; i < listOfProducts.length; i++) {
    if (UniqueProductCount[listOfProducts[i].productName] === undefined) {
      UniqueProductCount[listOfProducts[i].productName] = 1;
    } else {
      UniqueProductCount[listOfProducts[i].productName]++;
    }
  }
};

const getUniquePrducts = () => {
  for (let i = 0; i < listOfProducts.length; i++) {
    let check = true;
    if (UniqueProducts.length != 0) {
      for (let j = 0; j < UniqueProducts.length; j++) {
        if (UniqueProducts[j].productName == listOfProducts[i].productName) {
          UniqueProducts[j].quantity += listOfProducts[i].quantity;
          check = false;
        }
      }
    }

    if (check) UniqueProducts.push(listOfProducts[i]);
  }
};

getUniqueProductCount();
console.log(UniqueProductCount);

getUniquePrducts();
console.log(UniqueProducts);

const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });
const dynamodb = new AWS.DynamoDB.DocumentClient();

//variables
//filter by specific product
var specificProduct = {
  TableName: "products",
  FilterExpression: "contains(#product, :product)",
  ExpressionAttributeNames: { "#product": "product" },
  ExpressionAttributeValues: {
    ":product": "Pepsi Black 2.25lts",
  },
};

//specific date Range
var specificDateRange = {
  TableName: "products",
  FilterExpression: "#date BETWEEN :date1 and :date2",
  ExpressionAttributeNames: {
    "#date": "date",
  },
  ExpressionAttributeValues: {
    ":date1": "2022-05-26",
    ":date2": "2022-05-28",
  },
};

//specific date
var specificDate = {
  TableName: "products",
  FilterExpression: "contains(#date, :date)",
  ExpressionAttributeNames: { "#date": "date" },
  ExpressionAttributeValues: {
    ":date": "2022-05-26",
  },
};
//-------------------------------------------------------------------------

//functions

const obj = (market, product, price, date) => {
  let prod = { market: market, product: product, price: price };
  return prod;
};

const specificProductF = (data) => {
  let arr = [];
  data.map((item) => {
    arr.push(obj(item.date, item.product, item.price));
  });
  //const prod = arr.find(() => "f4c92856-cf32-44cc-aa6b-7cd31951290c");
  console.log(arr);
};

const productAndMarket = (data) => {
  let arr = [];
  data.map((item) => {
    arr.push(obj(item.store, item.product, item.price));
  });
  lowestPrice(arr);
};

const lowestPrice = (data) => {
  let arr = [];
  let prod = "";
  market = "";
  let min = 10000;
  for (let i = 0; i < data.length; i++) {
    //console.log(data[i].price);
    if (data[i].price < min) {
      min = data[i].price;
      prod = data[i].product;
      market = data[i].market;
    }
  }
  console.log(market, prod, min);
};

//
dynamodb
  .scan(specificProduct, specificDate)
  .promise()
  .then((data) => productAndMarket(data.Items))
  .catch((error) => console.log(error));

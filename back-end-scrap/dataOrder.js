const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });
const dynamodb = new AWS.DynamoDB.DocumentClient();
const date = require('date-and-time')
  
const now = new Date();
  
// Formatting the date and time
// by using date.format() method
const date_now = date.format(now,'YYYY-MM-DD');
console.log(date_now)
//variables
//filter by specific product

var specificByProductAndDate = {
  TableName: "products",
  FilterExpression: "contains(#product, :product) AND contains(#date, :date)",
  ExpressionAttributeNames: { "#product": "product", "#date" : "date" },
  ExpressionAttributeValues: {
    ":product": "Pepsi Black 2.25lts",
    ":date": "2022-06-11"
        //":date": date_now
  },
};

//specific date Range
var specificByDateRange = {
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
    ":date": "2022-05-28",
  },
};

//specific prod
var specificProduct = {
  TableName: "products",
  FilterExpression: "contains(#product, :product)",
  ExpressionAttributeNames: { "#product": "product" },
  ExpressionAttributeValues: {
    ":product": "Pepsi Black 2.25lts",
  },
};
//-------------------------------------------------------------------------

//functions

const obj = (market, product, price, date) => {
  let prod = { market: market, product: product, price: price, date: date };
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
    arr.push(obj(item.store, item.product, item.price, item.date));
  });
  lowestPrice(arr);
};

const lowestPrice = (data) => {
  let arr = [];
  let prod = "";
  market = "";
  let min = 10000;
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
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
  .scan(specificByProductAndDate)
  .promise()
  .then((data) => productAndMarket(data.Items))
  .catch((error) => console.log(error));

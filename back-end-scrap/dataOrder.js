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
const specificProductF = (data) => {
  let arr = [];
  data.map((item) => {
    arr.push(`{${item.date}:{${item.id} : ${item.product}}}`);
  });
  //const prod = arr.find(() => "f4c92856-cf32-44cc-aa6b-7cd31951290c");
  console.log(arr);
};

const productAndMarket = (data) => {
  let arr = [];
  data.map((item) => {
    arr.push(`{${item.store}:{${item.product} : ${item.price}}}`);
  });
  //const prod = arr.find(() => "f4c92856-cf32-44cc-aa6b-7cd31951290c");
  console.log(arr);
};

//
dynamodb
  .scan(specificDate)
  .promise()
  .then((data) => productAndMarket(data.Items))
  .catch((error) => console.log(error));

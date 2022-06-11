const AWS = require("aws-sdk");
const dynamoDB = new AWS.DynamoDB.DocumentClient({
  region: "us-east-1",
});

const specificDate = "2022-05-26";

const specificProduct = (data) => {
  let arr = [];
  data.map((item) => {
    arr.push(`${item.id} : ${item.product}`);
  });
  const prod = arr.find(() => "f4c92856-cf32-44cc-aa6b-7cd31951290c");
  console.log(prod);
};

//realizar los filtros sobre dynamo
const specificDateProducts = (data, specificDate) => {
  let arrSpecificDate = [];
  data.map((item) => {
    const { date } = item;
    if (date === specificDate) {
      let element = item;
      arrSpecificDate.push(element);
    }
  });
  console.log(arrSpecificDate);
};

() => {};
dynamoDB
  .scan({
    TableName: "products", //products que hagan match con det campo valor
  })
  .promise()
  .then((data) => {
    specificDateProducts(data.Items, specificDate);
  })
  .catch(console.error);

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const today = new Date();
const dd = String(today.getDate()).padStart(2, "0");
const mm = String(today.getMonth() + 1).padStart(2, "0");
const yyyy = today.getFullYear();
const date = yyyy + "-" + mm + "-" + dd;

const obj = (market, product, price, date) => {
    let prod = { market: market, product: product, price: price, date: date };
    return prod;
}

const productAndMarket = (data) => {
    let arr = [];
    data.map((item) => {
    arr.push(obj(item.store, item.product, item.price, item.date));
    });
    console.log(arr);
    return arr;
};

async function getProducts(product){
    try {
        let specificByProductAndDate = {
            TableName: "products",
            FilterExpression: "contains(#product, :product) AND contains(#date, :date)",
            ExpressionAttributeNames: { "#product": "product", "#date" : "date" },
            ExpressionAttributeValues: {
            ":product": product,
            ":date": date
            },
        };
        const data = await docClient.scan(specificByProductAndDate).promise()
        products_data = productAndMarket(data.Items)
        return products_data  
    }
    catch (err) {
        return err;
    }
}

exports.handler = async (event) => {
    if (event.body !== null && event.body !== undefined) 
    {
        let products_data = JSON.parse(event.body); 
        console.log(products_data)
        try 
        {
            const data = await getProducts(products_data.products[0])
            const response = {
                statusCode: 200,
                body: JSON.stringify(data),
            };
            return response
        } 
        catch (err) 
        {
            return { error: err }
        }
    }
    
    return event.body
};
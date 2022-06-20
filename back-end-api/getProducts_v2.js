//const { DataSync } = require('aws-sdk');
const AWS = require('aws-sdk');
AWS.config.update({ region: "us-east-1" });
const docClient = new AWS.DynamoDB.DocumentClient();

const custom_date = (today) => {
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    const date = yyyy + "-" + mm + "-" + dd;
    return date;
}
const obj = (market, product, price, date) => {
    let prod = { market: market, product: product, price: price, date: date };
    return prod;
}

const productAndMarket = (data) => {
    let arr = [];
    data.map((item) => {
        arr.push(obj(item.store, item.product, item.price, item.date));
    })
    return arr;
};

async function getProducts(product, date){
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
        console.log(1)
        let today = new Date();
        console.log(today)
        let products_data = JSON.parse(event.body)
        console.log(products_data)
        do {
            console.log(today)
            let date = custom_date(today)
            console.log(date)
            const data = await getProducts(products_data.products[0], date)
            today -= 1
        } while (data === null && datsa === undefined)
        
        
        const response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers" : "Content-Type",
                "Access-Control-Allow-Methods": "POST"
            },
            body: JSON.stringify(data),
        };
        return response
    }
    
    return event.body
};

const start = async (evento) => {
    let today = new Date();
    today.setDate(today.getDate() + 1);
    let products_data = JSON.parse(evento)
    console.log(products_data)
    let data = []
    do {
        let date = custom_date(today)
        console.log(date)
        data = await getProducts(products_data.products[0], date)
        today.setDate(today.getDate() - 1);
    } while (data.length === 0)
    
    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Methods": "POST"
        },
        body: JSON.stringify(data),
    };
    console.log(response)
    return response
};

evento = JSON.stringify( {'products' : ['Leche Parcialmente Descremada Liviana LA SERENISIMA Larga Vida 1l']})
start(evento)
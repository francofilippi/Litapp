const AWS = require('aws-sdk');
AWS.config.update({ region: "us-east-1" });

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
};

exports.handler = async (event) => {
    if (event.body !== null && event.body !== undefined) {
        
        let products_data = JSON.parse(event.body); 
        let products = products_data.products
        let products_info = []

        for (let i = 0; i < products.length; i++)
        {
            try {
                let info_prod = await getProducts(products[i])
                products_info.push(info_prod)
            } catch (err) {
                return { error: err }
            }
        }

        let obj_product = {}
        let count_markets = products_info[0].length

        for (let s = 0; s < count_markets; s++){
            obj_product[products_info[0][s].market] = {}
        }
        
        for (let i = 0; i < products_info.length; i++)
        {
            product_info_all_markets = products_info[i]
            for (let n = 0; n < count_markets; n++)
            {
                obj_product[product_info_all_markets[n].market][product_info_all_markets[n].product] = product_info_all_markets[n].price
            }
        }
        
        const response = {
            statusCode: 200,
            body: JSON.stringify(obj_product),
        };

        return response 
    }

    return event.body
};





// IMPORTANTE: Esto debe ir dentro del handler
const getChart = async (products) => {
    let products_info = []
    console.log(products)

    for (let i = 0; i < products.length; i++)
    {
        try {
            let info_prod = await getProducts(products[i])
            products_info.push(info_prod)
        } catch (err) {
            return { error: err }
        }
    }

    let response_data = []
    let obj_product = {}
    let count_markets = products_info[0].length

    for (let s = 0; s < count_markets; s++){
        obj_product[products_info[0][s].market] = {}
    }
    
    for (let i = 0; i < products_info.length; i++)
    {
        product_info_all_markets = products_info[i]
        for (let n = 0; n < count_markets; n++)
        {
            console.log(n)
            console.log(product_info_all_markets[n])
            obj_product[product_info_all_markets[n].market][product_info_all_markets[n].product] = product_info_all_markets[n].price
        }
    }
    
    const response = {
        statusCode: 200,
        body: JSON.stringify(obj_product),
    };

    return response 
}

// getChart(["Azúcar Superior Ledesma 1 Kg", "Pepsi Black 2.25lts", "Té Negro Green Hills 50 Un."]);

const AWS = require('aws-sdk');
AWS.config.update({ region: "us-east-1" });

const docClient = new AWS.DynamoDB.DocumentClient();

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
        let products_data = productAndMarket(data.Items)
        return products_data  
    }
    catch (err) {
        return err;
    }
};

const handler = async (event) => {
    console.log(event)
    let info_prod = ''
    let response_data = []
    let obj_product = {}

    // console.log(event)
    // let request_data = JSON.parse(event.body);
    
    let product = "Arroz parboil Gallo Oro caja 1 kg" //request_data.products
    let date = "2022-06"//request_data.date
    
    try {
        info_prod = await getProducts(product, date)
    } catch (err) {
        return { error: err }
    }

    for (let s = 0; s < info_prod.length; s++) {
        let market = info_prod[s].market
        let price = info_prod[s].price
        let day = info_prod[s].date            
        if (obj_product.hasOwnProperty(day) === false) {
            obj_product[day] = {}
        }
        obj_product[day][market] = price
    }

    for (let [day, obj] of Object.entries(obj_product)) {
        obj['date'] = new Date(day)
        response_data.push(obj)
    }

    response_data.sort((a, b) => a.date - b.date)
    response_data.forEach( element => {
        const today = element.date
        const dd = String(today.getDate()).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0");
        //element.date = mm + "-" + dd;
        element.date = dd;
    })

    console.log(response_data)

        // const response = {
        //     statusCode: 200,
        //     headers: {
        //         "Access-Control-Allow-Origin": "*",
        //         "Access-Control-Allow-Headers" : "Content-Type",
        //         "Access-Control-Allow-Methods": "POST,GET, OPTIONS"
        //     },
        //     body: JSON.stringify(response_data),
        // };
        // return response
};

handler("start")
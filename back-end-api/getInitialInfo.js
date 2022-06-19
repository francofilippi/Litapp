const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB.DocumentClient();
AWS.config.update({ region: "us-east-1" });

const obj = (product, img) => {
    let prod = { productName: product, image: img};
    return prod;
};

const objAllProds = (prods) => {
  let allProds = { 'products' : prods}
  return allProds;  
}

const product = (data) => {
    let arr = []; 
    data.map((item) => {
        arr.push(obj(item.name, item.image));
    });
    let products = {product: arr}
    return products;
};

async function getInitialProds(){
    try {
        let initialProds = {
            TableName: "products_scrap"
        };
        const data =await dynamodb.scan(initialProds).promise()
        let products_data = product(data.Items)
        objAllProds(products_data); 
        return products_data;   
    }
    catch (err) {
        return err;
    }
}

const data = {
            	"stores" : [
            		{
            			"stores" : "carrefour",
            			"image" : "https://lazariapp.s3.amazonaws.com/stores_logos/carrefour.png"
            		},
            		{
            			"stores" : "coto", 
            			"image" : "https://lazariapp.s3.amazonaws.com/stores_logos/Coto.png"
            		},
            		{
            			"stores" : "dia",
            			"image" : "https://lazariapp.s3.amazonaws.com/stores_logos/Dia.png"
            		},
            		{
            			"stores" : "jumbo",
            			"image" : "https://lazariapp.s3.amazonaws.com/stores_logos/jumbo.png"
            		},
            		{
            			"stores" : "mass",
            			"image" : "https://lazariapp.s3.amazonaws.com/stores_logos/Mas.png"
            		}]
            }

exports.handler = async (event) => {
        let products_info = [];
        
        try {
            let info_prod = await getInitialProds()
            products_info.push(info_prod)
            products_info.push(data);
        } catch (err) {
                return { error: err }
            }
        
        const response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers" : "Content-Type",
                "Access-Control-Allow-Methods": "POST,GET, OPTIONS"
            },
            body: JSON.stringify(products_info),
        };
        return response;
};

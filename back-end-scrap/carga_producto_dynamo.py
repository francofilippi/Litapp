import boto3
from botocore.config import Config
from datetime import datetime
import uuid

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('products_scrap')

products = [
    {
        "id" : str(uuid.uuid4()),
        "name" : "Queso Cremon Cremoso LA SERENISIMA X Kg",
        "stores" : {
            "coto"          : "https://www.cotodigital3.com.ar/sitios/cdigi/producto/-queso-cremon-cremoso-la-serenisima-x-kg/_/A-00013507-00013507-200",
            "carrefour"     : "https://www.carrefour.com.ar/queso-cremon-cremoso-x-kg-12215/p",
            "dia"           : "https://diaonline.supermercadosdia.com.ar/queso-cremon-la-serenisima-x-1-kg-259119/p",
            "jumbo"         : "https://www.jumbo.com.ar/queso-cremon-cremoso/p",
            "mass"          : "https://www.masonline.com.ar/queso-cremoso-cremon-la-serenisima-600-gr/p"
        }
    }
]

with table.batch_writer() as batch:
    for product in products:
        batch.put_item(Item = product)

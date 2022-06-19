from http.client import responses
from math import prod
from attr import attr
import boto3
from boto3.dynamodb.conditions import Key, Attr
from botocore.config import Config
from datetime import date, datetime
import uuid

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('products')

get_date = "2022-06-19"
product = "Arroz parboil Gallo Oro caja 1 kg"
# product_search = {
#                 "TableName": "products",
#                 "FilterExpression": "contains(#product, :product) AND contains(#date, :date)",
#                 "ExpressionAttributeNames": { "#product": "product", "#date" : "date" },
#                 "ExpressionAttributeValues": {
#                     ":product": product,
#                     ":date": date
#                 }
#             }

# response = table.query(
#     #TableName=TABLE_NAME,
#     conditions=Key('product').equals('Té Negro Green Hills 50 Un.')
# )

#response = table.scan(FilterExpression=Key('product').eq(product))
response = table.scan(FilterExpression=Key('date').eq(get_date))
products = response['Items']
products = list(set(products))
for product in products:
    print(product['date'] +' - '+ product['product'])


#result = table.scan(product_search)

#products_to_insert = []

# with table.batch_writer() as batch:
#     for product in products:
#         batch.put_item(Item = product)

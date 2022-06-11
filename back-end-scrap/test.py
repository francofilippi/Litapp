from turtle import update
import boto3
import json
from datetime import datetime

now = datetime.now()
stores = []
dictKeys = {}
dictStores = {}


dynamodb = boto3.resource('dynamodb', region_name = 'us-east-1') 
table = dynamodb.Table('products_scrap')
response = table.scan() 

arr = []

for i in response['Items']:
    #print(i['name'], ":", i['stores'])
    arr.append({i['name'] : i['stores']})

for i in response['Items']: 
    #dictKeys[i]=(i['name'])
    dictStores = i['stores']
    
print(arr)


products_formatted = json.dumps(stores, indent=2)

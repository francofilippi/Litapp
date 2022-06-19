import aiohttp
import asyncio
from bs4 import BeautifulSoup
import time
from datetime import datetime, timedelta
import boto3
from botocore.config import Config
import uuid
from decimal import Decimal
import json


def product_to_dynamo(product):
    product = json.loads(json.dumps(product), parse_float=Decimal)
    print("Save product in dynamodb: " + str(product))
    table_products = dynamodb.Table('products')
    result = table_products.put_item(Item = product)
    print(result)

def cleanPrice(price):
    if price == '' or price == None:
        return 0
    price_str = price.text.strip()
    price_str = str(price_str[price_str.find("$") + 1:])
    price_str.replace(" ", "")
    price_str = price_str[:price_str.find("\n")]
    price_str = price_str.replace('.','')
    price_str = price_str.replace(',','.')
    price_str = price_str.strip()
    price = float(price_str)
    return price

async def scrap(session, url, store, product):
    async with session.get(url) as response:
        page = await response.text()
        soup = BeautifulSoup(page, "html.parser")
        if store == 'coto':
            price = soup.find(class_="atg_store_newPrice")
        if store == 'carrefour':
            price = soup.find(class_="lyracons-carrefourarg-product-price-1-x-currencyContainer")
        if store == 'dia':
            price = soup.find(class_="skuBestPrice")
        if store == 'jumbo':
            price = soup.find(class_="skuBestPrice")
        if store == 'mass':
            price = soup.find(class_="vtex-store-components-3-x-currencyContainer")
        price = cleanPrice(price)
        reg_product = {
            "id" : str(uuid.uuid4()),
            "date": now.strftime("%Y-%m-%d"),
            "product": product,
            "store": store,
            "price": price
        }
        print(reg_product)
        arrProducts.append(reg_product)
        return reg_product

async def getAllPages(products):
    async with aiohttp.ClientSession(connector=aiohttp.TCPConnector(verify_ssl=False)) as session:
        tasks = []
        for product in products:
            for store, url in product['stores'].items():
                task = asyncio.create_task(scrap(session, url, store, product['name']))
                tasks.append(task)
        await asyncio.gather(*tasks)



start_time = time.time()
now = datetime.now()
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('products_scrap')
response = table.scan()
products = response['Items']
arrProducts = []
asyncio.run(getAllPages(products))
print("--- %s seconds ---" % (time.time() - start_time))

print(len(arrProducts))
for product in arrProducts:
    product_to_dynamo(product)
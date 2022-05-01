import requests
from bs4 import BeautifulSoup
import json
from datetime import datetime

now = datetime.now()

def scrap(store, url):
    print(store)
    print(url)
    title = ''
    price = ''
    page = requests.get(url)
    soup = BeautifulSoup(page.content, "html.parser")
    if store == 'coto':
        title = soup.find(class_="product_page")
        price = soup.find(class_="atg_store_newPrice")
    if store == 'carrefour':
        title = soup.find(class_="vtex-store-components-3-x-productBrand vtex-store-components-3-x-productBrand--quickview")
        price = soup.find(class_="lyracons-carrefourarg-product-price-1-x-currencyContainer")
    if store == 'dia':
        title = soup.find(class_="productName")
        price = soup.find(class_="skuBestPrice")
    if store == 'jumbo':
        title = soup.find(class_="productName")
        price = soup.find(class_="skuBestPrice")
    if store == 'mass':
        title = soup.find(class_="vtex-store-components-3-x-productBrand")
        price = soup.find(class_="vtex-store-components-3-x-currencyContainer")
    
    return title.text.strip(), cleanPrice(price)

def cleanPrice(price):
    if price == '' or price == None:
        return 0
    price_str = price.text.strip()
    price_str = str(price_str[price_str.find("$") + 1:])
    price_str.replace(" ", "")
    price_str = price_str[:price_str.find("\n")]
    price_str = price_str.replace(',','.')
    price_str = price_str.strip()
    price = float(price_str)
    return price


products_to_scrap = [
    { 'Coca-Cola Sabor Original 2,25 Lts.' :    
        {
            'coto'          : 'https://www.cotodigital3.com.ar/sitios/cdigi/producto/-gaseosa-coca-cola-sabor-original--225-lt/_/A-00014450-00014450-200',
            'carrefour'     : 'https://www.carrefour.com.ar/gaseosa-coca-cola-sabor-original-225-l/p',
            'dia'           : 'https://diaonline.supermercadosdia.com.ar/gaseosa-coca-cola-sabor-original-225-lts-14837/p',
            'jumbo'         : 'https://www.jumbo.com.ar/gaseosa-coca-cola-sabor-original-2-25-l/p',
            'mass'          : 'https://www.masonline.com.ar/gaseosa-coca-cola-sabor-original-2-25-lt/p'
        }
    },
    { 'Pepsi Black 2.25lts' :    
        {
            'coto'          : 'https://www.cotodigital3.com.ar/sitios/cdigi/producto/-gaseosa-pepsi-sin-azucar---botella-225-l-/_/A-00475237-00475237-200',
            'carrefour'     : 'https://www.carrefour.com.ar/gaseosa-pepsi-black-225-l/p',
            'dia'           : 'https://diaonline.supermercadosdia.com.ar/gaseosa-cola-pepsi-black-225-lts-239383/p',
            'jumbo'         : 'https://www.jumbo.com.ar/gaseosa-pepsi-black-2-25lts/p',
            'mass'          : 'https://www.masonline.com.ar/gaseosa-cola-black-pepsi-2-25-lt/p'
        }
    },
    { 'Arroz parboil Gallo Oro caja 1 kg' :    
        {
            'coto'          : 'https://www.cotodigital3.com.ar/sitios/cdigi/producto/-arroz-largo-fino-gallo-oro-caja-1-kg/_/A-00264557-00264557-200',
            'carrefour'     : 'https://www.carrefour.com.ar/arroz-parboil-gallo-oro-caja-1-kg-37559/p',
            'dia'           : 'https://diaonline.supermercadosdia.com.ar/arroz-parboil-gallo-oro-1-kg-15005/p',
            'jumbo'         : 'https://www.jumbo.com.ar/arroz-oro-estuche-gallo-x1-kg/p',
            'mass'          : 'https://www.masonline.com.ar/arroz-amarillo-gallo-oro-1kg/p'
        }
    }
]

products_price = []

for product in products_to_scrap:
    for key, value in product.items():
        product = { 'product' : key }
        product['date'] = now.strftime("%Y-%m-%d")
        for store, url in value.items():
            print(key)
            pproduct, pprice = scrap(store, url)
            product[store] = pprice
            print(pprice)
            print('*****************************************')
        products_price.append(product)

products_formatted = json.dumps(products_price, indent=2)

print(products_formatted)


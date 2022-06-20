let getChar = {
    "dia":
    {
        "Yerba Mate Unión Suave 4 Flex 500 Gr": 1275,
        "Galletitas Rellenas Oreo Tripack 354g": 433.3,
        "Queso Cremon Cremoso LA SERENISIMA X Kg": 1135,
        "Leche Entera Clasica LA SERENISIMA Larga Vida 1l": 130.5
    },
    "mass":
    {
        "Yerba Mate Unión Suave 4 Flex 500 Gr": 1465,
        "Galletitas Rellenas Oreo Tripack 354g": 435,
        "Queso Cremon Cremoso LA SERENISIMA X Kg": 1219.9,
        "Leche Entera Clasica LA SERENISIMA Larga Vida 1l": 130.5
    },
    "coto":
    {
        "Yerba Mate Unión Suave 4 Flex 500 Gr": 1453.7,
        "Galletitas Rellenas Oreo Tripack 354g": 373.9,
        "Queso Cremon Cremoso LA SERENISIMA X Kg": 859,
        "Leche Entera Clasica LA SERENISIMA Larga Vida 1l": 130.5
    },
    "carrefour":
    {
        "Yerba Mate Unión Suave 4 Flex 500 Gr": 1285,
        "Galletitas Rellenas Oreo Tripack 354g": 435,
        "Queso Cremon Cremoso LA SERENISIMA X Kg": 1205,
        "Leche Entera Clasica LA SERENISIMA Larga Vida 1l": 140.9
    },
    "jumbo":
    {
        "Yerba Mate Unión Suave 4 Flex 500 Gr": 1573,
        "Galletitas Rellenas Oreo Tripack 354g": 454,
        "Queso Cremon Cremoso LA SERENISIMA X Kg": 1228,
        "Leche Entera Clasica LA SERENISIMA Larga Vida 1l": 0
    }
}


// Formatea a total de cada Store
let arr = Object.entries(getChar)
console.log(arr)

let totalChSuper = []
let sumaObjeto = (objeto) => Object.values(objeto).reduce((a, b) => a + b);
arr.forEach(e => {
    let miObjetoCreado = {
        store: e[0],
        suma: sumaObjeto(e[1])
    }
    totalChSuper.push(miObjetoCreado)
})
console.log(totalChSuper)


let changuito = [
    {
        "productName": "Yerba Mate Unión Suave 4 Flex 500 Gr",
        "image": "https://lazariapp.s3.amazonaws.com/images_products/Yerba-Mate-Union-500gr.webp"
    },
    {
        "productName": "Galletitas Rellenas Oreo Tripack 354g",
        "image": "https://lazariapp.s3.amazonaws.com/images_products/Galletitas-Oreo-354gr.png"
    },
    {
        "productName": "Queso Cremon Cremoso LA SERENISIMA X Kg",
        "image": "https://lazariapp.s3.amazonaws.com/images_products/queso-cremon-cremoso.webp"
    },
    {
        "productName": "Leche Entera Clasica LA SERENISIMA Larga Vida 1l",
        "image": "https://lazariapp.s3.amazonaws.com/images_products/leche-la-serenisma-entera-1lt.png"
    }
]

let arr2 = [
    [
        "dia",
        {
            "Yerba Mate Unión Suave 4 Flex 500 Gr": 1275,
            "Galletitas Rellenas Oreo Tripack 354g": 433.3,
            "Queso Cremon Cremoso LA SERENISIMA X Kg": 1135,
            "Leche Entera Clasica LA SERENISIMA Larga Vida 1l": 130.5
        }
    ],
    [
        "mass",
        {
            "Yerba Mate Unión Suave 4 Flex 500 Gr": 1465,
            "Galletitas Rellenas Oreo Tripack 354g": 435,
            "Queso Cremon Cremoso LA SERENISIMA X Kg": 1219.9,
            "Leche Entera Clasica LA SERENISIMA Larga Vida 1l": 130.5
        }
    ],
    [
        "coto",
        {
            "Yerba Mate Unión Suave 4 Flex 500 Gr": 1453.7,
            "Galletitas Rellenas Oreo Tripack 354g": 373.9,
            "Queso Cremon Cremoso LA SERENISIMA X Kg": 859,
            "Leche Entera Clasica LA SERENISIMA Larga Vida 1l": 130.5
        }
    ],
    [
        "carrefour",
        {
            "Yerba Mate Unión Suave 4 Flex 500 Gr": 1285,
            "Galletitas Rellenas Oreo Tripack 354g": 435,
            "Queso Cremon Cremoso LA SERENISIMA X Kg": 1205,
            "Leche Entera Clasica LA SERENISIMA Larga Vida 1l": 140.9
        }
    ],
    [
        "jumbo",
        {
            "Yerba Mate Unión Suave 4 Flex 500 Gr": 1573,
            "Galletitas Rellenas Oreo Tripack 354g": 454,
            "Queso Cremon Cremoso LA SERENISIMA X Kg": 1228,
            "Leche Entera Clasica LA SERENISIMA Larga Vida 1l": 0
        }
    ]
]

// Formatea a productos store y precios
let productoYPrecio = []
changuito.forEach(producto => {
    arr2.forEach(store => {
        let productosEnArray = Object.entries(store[1])
        productosEnArray.forEach(element => {
            if (producto.productName === element[0]) {
                let item = {
                    producto: producto.productName,
                    store: store[0],
                    precio: element[1].toFixed(2)
                }
                productoYPrecio.push(item)
            }
        });
    })
})
console.log(productoYPrecio);

// Devuelve las stores (sin repetir del anterior array y sus totales)
let stores = [...new Set(productoYPrecio.map(x => x.store))] // stores (sin repetir)
let storeTotals = []
stores.forEach(store => {
    let suma = []
    productoYPrecio.forEach(x => {
        if (x.store === store) {
            suma.push(x.precio)
        }
    })
    let total = suma.reduce((x, y) => x + y)
    storeTotals.push({ store, total })
})
console.log(storeTotals);

// Devuelve los precios más baratos del array preciosBajos, teniendo en cuenta que productos estan en el changuito
let preciosBajos = []
changuito.forEach(producto => {
    let mismosProductos = totalPrices.filter(elem => elem.producto === producto.productName)
    let precioBajo = mismosProductos.sort((a, b) => a.precio - b.precio)[0]
    preciosBajos.push(precioBajo)
})
console.log('Precios Menores:', preciosBajos)

let oneProd =
    [
        {
            "market": "mass",
            "product": "Leche Entera Clasica LA SERENISIMA Larga Vida 1l",
            "price": 130.5,
            "date": "2022-06-17"
        },
        {
            "market": "carrefour",
            "product": "Leche Entera Clasica LA SERENISIMA Larga Vida 1l",
            "price": 140.9,
            "date": "2022-06-17"
        },
        {
            "market": "coto",
            "product": "Leche Entera Clasica LA SERENISIMA Larga Vida 1l",
            "price": 130.5,
            "date": "2022-06-17"
        },
        {
            "market": "jumbo",
            "product": "Leche Entera Clasica LA SERENISIMA Larga Vida 1l",
            "price": 0,
            "date": "2022-06-17"
        },
        {
            "market": "dia",
            "product": "Leche Entera Clasica LA SERENISIMA Larga Vida 1l",
            "price": 130.5,
            "date": "2022-06-17"
        }
    ]

// Ordena de menor a mayor precio el array anterior
oneProd.sort((a, b) => a.price - b.price)
console.log(oneProd)















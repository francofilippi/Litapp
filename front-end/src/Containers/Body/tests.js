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

let arr = Object.entries(getChar)

let totalChSuper = []
let sumaObjeto = (objeto) => Object.values(objeto).reduce((a, b) => a + b);
arr.forEach(e => {
    // console.log(e[0])    
    // console.log(e[1])
    let miObjetoCreado = {}
    miObjetoCreado.store = e[0]
    miObjetoCreado.suma = sumaObjeto(e[1])
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

let arr = [
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

let productoYPrecio = []
changuito.forEach(producto => {
    arr.forEach(store => {
        let productosEnArray = Object.entries(store[1])
        productosEnArray.forEach(element => {
            if (producto.productName === element[0]) {
                let kakaroto = {}
                kakaroto.producto = producto.productName
                kakaroto.store = store[0]
                kakaroto.precio = element[1]
                productoYPrecio.push(kakaroto)
            }
        });
    })
})

console.log(productoYPrecio)

let preciosBajos = []
changuito.forEach(producto => {
    let mismosProductos = productoYPrecio.filter(elem => elem.producto === producto.productName)
    let precioBajo = mismosProductos.sort((a, b) => a.precio - b.precio)[0]
    preciosBajos.push(precioBajo)
})

console.log('Precios Menores:', preciosBajos)

console.log(Object.entries({
    "Yerba Mate Unión Suave 4 Flex 500 Gr": 1573,
    "Galletitas Rellenas Oreo Tripack 354g": 454,
    "Queso Cremon Cremoso LA SERENISIMA X Kg": 1228,
    "Leche Entera Clasica LA SERENISIMA Larga Vida 1l": 0
})[0][0])

console.log(Object.entries({
    "Yerba Mate Unión Suave 4 Flex 500 Gr": 1573,
    "Galletitas Rellenas Oreo Tripack 354g": 454,
    "Queso Cremon Cremoso LA SERENISIMA X Kg": 1228,
    "Leche Entera Clasica LA SERENISIMA Larga Vida 1l": 0
})[0][0])

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

oneProd.filter(x => x.price)
console.log(oneProd)
oneProd.sort((a, b) => a.price - b.price)

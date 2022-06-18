import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const API_LITA_BASE = 'https://o5jypc5bx0.execute-api.us-east-1.amazonaws.com/default/'

export default function useChanguito() {

    const {
        item: changuito,
        saveItem: saveChanguito,
        sincronizeItem: sincronizeChanguito,
        loading: loadingChanguito,
        //error: errorChanguito,
    } = useLocalStorage('CHANGUITO_V1', []);

    const deleteProducto = (name) => {
        const productoIndex = changuito.findIndex(producto => producto.name === name);
        const newChanguito = [...changuito];
        newChanguito.splice(productoIndex, 1);
        saveChanguito(newChanguito);
    };

    // Estados del ChanguitoPrices

    const [chPrices, setChPrices] = React.useState([]);
    const [errorChPrices, setErrorChPrices] = React.useState(false);
    const [loadingChPrices, setLoadingChPrices] = React.useState(false);
    const [storeTotals, setStoreTotals] = React.useState([]);
    const [selectedCh, setSelectedCh] = React.useState('');

    console.log(chPrices)
    console.log(storeTotals)

    // Effect para loading de ChanguitoPrices (LitApp)
    React.useEffect(() => {

        if (!loadingChPrices) {
            return () => {
                setChPrices([])
                setStoreTotals([])
            }; // cleanup chPrices
        }

        let preciosABuscar = [];
        // Armo un array con cada propiedad name del changuito
        changuito.forEach(producto => {
            preciosABuscar.push(producto.productName)
        });

        let preciosABuscarObj = { products: preciosABuscar }  // Convierto a un objeto con clave products el array anterior (OK para enviarlo como body del request)

        async function fetchPreciosChanguito() {
            setErrorChPrices(false)
            try {
                var requestOptions = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'text/plain'
                    },
                    body: JSON.stringify(preciosABuscarObj),
                    redirect: 'follow'
                };
                const fetchChPrices = await fetch(API_LITA_BASE + 'getChar', requestOptions)
                    .then(response => response.json())
                    .then(result => result)
                    .catch(error => console.log('error', error));

                // Formatear total productos del JSON
                let productoYPrecio = []
                let arr = Object.entries(fetchChPrices)
                changuito.forEach(producto => {
                    arr.forEach(store => {
                        let productosEnArray = Object.entries(store[1])
                        productosEnArray.forEach(element => {
                            if (producto.productName === element[0]) {
                                let item = {
                                    producto: producto.productName,
                                    store: store[0],
                                    precio: element[1]
                                }
                                productoYPrecio.push(item)
                            }
                        });
                    })
                })

                setChPrices([...productoYPrecio])

                // Formatear y extraer total de los changuitos del JSON
                let storeTotals = []
                if (!!productoYPrecio.length) {
                    let stores = [...new Set(productoYPrecio.map(x => x.store))] // Stores sin repetir
                    stores.forEach(store => {  // Separa los precios de productos por store 
                        let productos = []
                        productoYPrecio.forEach(x => {
                            if (x.store === store) {
                                productos.push(x.precio)
                            }
                        })
                        let total = parseFloat(productos.reduce((x, y) => x + y)).toFixed(2) // Suma los precios de los productos del store, y los guarda con 2 decimales
                        storeTotals.push({ store, total }) // Crea objecto con el store y su total
                    })
                    storeTotals.sort((a, b) => a.total - b.total) // Ordena de menor a mayor precio los stores con sus totales. El primero va a ser el ganador
                }

                setStoreTotals([...storeTotals])
                setSelectedCh(storeTotals[0].store)

            } catch (error) {
                setErrorChPrices(true)
            }
            setLoadingChPrices(false)
        }
        fetchPreciosChanguito()

    }, [loadingChPrices, changuito]);



    return (
        {
            changuito,
            loadingChanguito,
            chPrices,
            storeTotals,
            selectedCh,
            errorChPrices,
            loadingChPrices,
            setChPrices,
            setSelectedCh,
            saveChanguito,
            deleteProducto,
            sincronizeChanguito,
            setLoadingChPrices,
        }
    );
}

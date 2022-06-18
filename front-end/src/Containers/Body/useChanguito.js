import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const RICKYMORTY = 'https://rickandmortyapi.com/api/character/'
const API_LITA_BASE = 'https://o5jypc5bx0.execute-api.us-east-1.amazonaws.com/default/'

export default function useChanguito() {

    const {
        item: changuito,
        saveItem: saveChanguito,
        sincronizeItem: sincronizeChanguito,
        loading: loadingChanguito,
        error: errorChanguito,
    } = useLocalStorage('CHANGUITO_V1', []);

    const deleteProducto = (name) => {
        const productoIndex = changuito.findIndex(producto => producto.name === name);
        const newChanguito = [...changuito];
        newChanguito.splice(productoIndex, 1);
        saveChanguito(newChanguito);
    };

    // Estados del ChanguitoPrices

    const [chPrices, setChPrices] = React.useState([]);
    const [lowestPrices, setLowestPrices] = React.useState([]);
    const [totalPrices, setTotalPrices] = React.useState([]);
    const [errorChPrices, setErrorChPrices] = React.useState(false);
    const [loadingChPrices, setLoadingChPrices] = React.useState(false);

    // Effect para cleanUp si actualiza changuito (borra o agrega un producto)
    React.useEffect(() => {
        setChPrices([])
        setLowestPrices([])
        setTotalPrices([])
    }, [changuito])

    // Effect para loading de ChanguitoPrices (LitApp)
    React.useEffect(() => {

        if (!loadingChPrices) {
            return undefined;
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

                // Formatear y extraer total de changuitos del JSON
                let totalChPrices = []
                let arr = Object.entries(fetchChPrices)
                let sumaValoresObjeto = (objeto) => Object.values(objeto).reduce((a, b) => a + b);
                arr.forEach(e => {
                    // console.log(e[0])    
                    // console.log(e[1])
                    let miObjetoCreado = {}
                    miObjetoCreado.store = e[0]
                    miObjetoCreado.suma = sumaValoresObjeto(e[1])
                    totalChPrices.push(miObjetoCreado)
                })
                setChPrices([...totalChPrices])

                // Formatear y extraer total productos y precios más baratos del JSON
                let productoYPrecio = []
                changuito.forEach(producto => {
                    arr.forEach(store => {
                        let productosEnArray = Object.entries(store[1])
                        productosEnArray.forEach(element => {
                            if (producto.productName === element[0]) {
                                let item = {}
                                item.producto = producto.productName
                                item.store = store[0]
                                item.precio = element[1]
                                productoYPrecio.push(item)
                            }
                        });
                    })
                })
                setTotalPrices([...productoYPrecio])
                let preciosBajos = []
                changuito.forEach(producto => {
                    let mismosProductos = productoYPrecio.filter(elem => elem.producto === producto.productName)
                    let precioBajo = mismosProductos.sort((a, b) => a.precio - b.precio)[0]
                    preciosBajos.push(precioBajo)
                })
                setLowestPrices([...preciosBajos])

            } catch (error) {
                setErrorChPrices(true)
            }
            setLoadingChPrices(false)
        }
        fetchPreciosChanguito()

    }, [loadingChPrices]);



    return (
        {
            changuito,
            loadingChanguito,
            chPrices,
            lowestPrices,
            totalPrices,
            errorChPrices,
            loadingChPrices,
            setChPrices,
            saveChanguito,
            deleteProducto,
            sincronizeChanguito,
            setLoadingChPrices,
        }
    );
}

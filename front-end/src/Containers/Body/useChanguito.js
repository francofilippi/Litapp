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

    // const completeTodo = (text) => {
    //     const todoIndex = todos.findIndex(todo => todo.text === text);
    //     const newTodos = [...todos];
    //     newTodos[todoIndex].completed = true;
    //     saveTodos(newTodos);
    // };

    // Estados del ChanguitoPrices
    console.log(changuito)

    const [chPrices, setChPrices] = React.useState([]);
    const [errorChPrices, setErrorChPrices] = React.useState(false);
    const [loadingChPrices, setLoadingChPrices] = React.useState(false);

    React.useEffect(() => {
        setChPrices([])
    }, [changuito])

    // Effect para loading de ChanguitoPrices (RICK Y MORTY)
    React.useEffect(() => {

        if (!loadingChPrices) {
            return undefined;
        }

        // API -> precios de supers para ChanguitoPrices 
        let preciosABuscar = []
        changuito.forEach(element => {
            (async () => {
                setErrorChPrices(false)

                await new Promise((resolve) => setTimeout(resolve, 500)); // delay prueba para que se vea el skeleton

                try {
                    const pricesChanguitoFetch = await fetch(RICKYMORTY + element.id)
                        .then(response => response.json())
                        .then(data => data)

                    preciosABuscar.push(pricesChanguitoFetch)

                    setChPrices([...preciosABuscar]);

                } catch (error) {
                    setErrorChPrices(true)
                }
                setLoadingChPrices(false)
            })();
        });

    }, [loadingChPrices]);

    // Effect para loading de ChanguitoPrices (LitApp)
    // React.useEffect(() => {

    //     if (!loadingChPrices) {
    //         return undefined;
    //     }

    //     // API -> precios de supers para ChanguitoPrices
    //     let preciosABuscar = [
    //         "Pepsi Black 2.25lts",
    //         "Arroz parboil Gallo Oro caja 1 kg",
    //         "Té Negro Green Hills 50 Un.",
    //         "Leche Entera Clasica LA SERENISIMA Larga Vida 1l"]

    //     // Armo un array con cada propiedad name del changuito
    //     // changuito.forEach(producto => {
    //     //     preciosABuscar.push(producto.name)
    //     // });

    //     let preciosABuscarObj = { products: preciosABuscar }  // Convierto a un objeto con clave products el array anterior (OK para enviarlo como body del request)

    //     async function fetchPreciosChanguito() {
    //         setErrorChPrices(false)
    //         try {
    //             var requestOptions = {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'text/plain'
    //                 },
    //                 body: JSON.stringify(preciosABuscarObj),
    //                 redirect: 'follow'
    //             };
    //             fetch(API_LITA_BASE + 'getChar', requestOptions)
    //                 .then(response => response.json())
    //                 .then(result => console.log(result))
    //                 .catch(error => console.log('error', error));

    //         } catch (error) {
    //             setErrorChPrices(true)
    //         }
    //         setLoadingChPrices(false)
    //     }
    //     fetchPreciosChanguito()

    // }, [loadingChPrices]);

    return (
        {
            changuito,
            loadingChanguito,
            chPrices,
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

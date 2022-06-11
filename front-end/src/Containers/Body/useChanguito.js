import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const RICKYMORTY = 'https://rickandmortyapi.com/api/character/'
// const API_LITA_BASE = 'https://o5jypc5bx0.execute-api.us-east-1.amazonaws.com/default/responseDummyData'

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

    const [chPrices, setChPrices] = React.useState([]);
    const [errorChPrices, setErrorChPrices] = React.useState(false);
    const [loadingChPrices, setLoadingChPrices] = React.useState(false);

    React.useEffect(() => {
        setChPrices([])
    }, [changuito])

    // Effect para loading de ChanguitoPrices
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

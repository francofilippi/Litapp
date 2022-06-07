import React from 'react';
import { useLocalStorage } from './useLocalStorage';

function useChanguito() {

    // const {
    //     item: changuito,
    //     saveItem: saveChanguito,
    //     sincronizeItem: sincronizeChanguito,
    //     loading: loadingChanguito,
    //     error: errorChanguito,
    // } = useLocalStorage('CHANGUITO_V1', []);

    const [changuito, setChanguito] = React.useState([])

    const addProducto = (newValue) => {
        const newChanguito = changuito.splice(0, Infinity, ...newValue)
        setChanguito(newChanguito);
    };

    const deleteProducto = (name) => {
        const productoIndex = changuito.findIndex(producto => producto.name === name);
        const newChanguito = [...changuito];
        newChanguito.splice(productoIndex, 1);
        setChanguito(newChanguito);
    };

    // const completeTodo = (text) => {
    //     const todoIndex = todos.findIndex(todo => todo.text === text);
    //     const newTodos = [...todos];
    //     newTodos[todoIndex].completed = true;
    //     saveTodos(newTodos);
    // };

    return (
        {
            changuito,
            addProducto,
            deleteProducto,
        }
    );
}

export { useChanguito };

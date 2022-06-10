import React from 'react';
import { useLocalStorage } from './useLocalStorage';

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

    return (
        {
            changuito,
            saveChanguito,
            deleteProducto,
            sincronizeChanguito,
        }
    );
}

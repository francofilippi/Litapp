import React from 'react';

function useLocalStorage(itemName, initialValue) {
    const [state, dispatch] = React.useReducer(reducer, initialState({ initialValue }));
    const {
        error,
        loading,
        item
    } = state;

    // ACTION CREATORS
    const onError = (error) => dispatch({ type: actionTypes.error, payload: error });
    const onSuccess = (parsedItem) => dispatch({ type: actionTypes.success, payload: parsedItem });
    const onSave = (newItem) => dispatch({ type: actionTypes.save, payload: newItem });

    React.useEffect(() => {
        try {
            const localStorageItem = localStorage.getItem(itemName);
            let parsedItem;

            if (!localStorageItem) {
                localStorage.setItem(itemName, JSON.stringify(initialValue));
                parsedItem = initialValue;
            } else {
                parsedItem = JSON.parse(localStorageItem);
            }
            onSuccess(parsedItem)
        } catch (error) {
            onError(error)
        }
    }, []);

    const saveItem = (newItem) => {

        try {
            const stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifiedItem);
            onSave(newItem)
        } catch (error) {
            onError(error)
        }
    };

    return {
        item,
        loading,
        error,
        saveItem,
    };
}

export { useLocalStorage };

const initialState = ({ initialValue }) => ({
    error: false,
    loading: true,
    item: initialValue,
})

const actionTypes = {
    error: 'ERROR',
    success: 'SUCCESS',
    save: 'SAVE'
}

const reducerObject = (state, payload) => ({
    [actionTypes.error]: {
        ...state,
        error: true,
    },
    [actionTypes.success]: {
        ...state,
        error: false,
        loading: false,
        sincronizedItem: true,
        item: payload,
    },
    [actionTypes.save]: {
        ...state,
        item: payload,
    }
})

const reducer = (state, action) => {
    return reducerObject(state, action.payload)[action.type] || state
}
import React from "react";
import { useLocalStorage } from "./useLocalStorage";

export default function useLogin() {

    const {
        item: token,
        saveItem: saveToken,
        //sincronizeItem: sincronizeChanguito,
        //loading: loadingChanguito,
        //error: errorChanguito,
    } = useLocalStorage('ACCESS_TOKEN', null);

    const hashString = window.location.hash
    const urlParams = new URLSearchParams(hashString)
    const access_token = urlParams.get('access_token');

    React.useEffect(() => {
        if (!!access_token) {
            saveToken(access_token)
        }
    }, [access_token])

    console.log('hola')

    return (
        {
            token,
            saveToken
        }
    )
}


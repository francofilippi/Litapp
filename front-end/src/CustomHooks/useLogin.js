import { useLocalStorage } from "./useLocalStorage";

export default function () {

    const {
        item: token,
        saveItem: saveToken,
        //sincronizeItem: sincronizeChanguito,
        //loading: loadingChanguito,
        //error: errorChanguito,
    } = useLocalStorage('ACCESS_TOKEN', '');

    const hashString = window.location.hash
    const urlParams = new URLSearchParams(hashString)
    const access_token = undefined;
    urlParams.get('#id_token')

    if (!!access_token) {
        saveToken(access_token)
    }

    console.log(access_token)

    return (
        token,
        saveToken
    )
}


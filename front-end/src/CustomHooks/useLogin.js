import React from "react";
import { useLocalStorage } from "./useLocalStorage";

export default function useLogin() {

    const hashString = window.location.hash;
    const urlParams = new URLSearchParams(hashString);
    const access_token = urlParams.get('access_token') || urlParams.get('#access_token');
    const id_token = urlParams.get('id_token') || urlParams.get('#id_token');

    const {
        item: token,
        saveItem: saveToken
    } = useLocalStorage('ACCESS_TOKEN', null);

    const {
        item: avatar,
        saveItem: saveAvatar
    } = useLocalStorage('AVATAR', null);

    React.useEffect(() => {
        if (!!access_token) {
            saveToken(access_token)
        }
        if (!!id_token) {
            function parseJwt(token) {
                var base64Url = token.split('.')[1];
                var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                }).join(''));

                return JSON.parse(jsonPayload);
            };
            const parsedAvatar = parseJwt(id_token).picture
            saveAvatar(parsedAvatar);
        }
    }, [access_token])

    return (
        {
            token,
            avatar,
            saveToken
        }
    )
}


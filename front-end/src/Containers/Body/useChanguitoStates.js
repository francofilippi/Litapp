import React from "react";

const RICKYMORTY = 'https://rickandmortyapi.com/api/character/'
// const API_LITA_BASE = 'https://o5jypc5bx0.execute-api.us-east-1.amazonaws.com/default/responseDummyData'

export default function useChanguitoStates() {

    // Estados del ChanguitoPrices
    const [changuitoPrices, setChanguitoPrices] = React.useState([]);
    const [errorChanguitoPrices, setErrorChanguitoPrices] = React.useState(false);
    const [loadingChanguitoPrices, setLoadingChanguitoPrices] = React.useState(false);

    // Effect para loading de ChanguitoPrices
    React.useEffect(() => {

        if (!loadingChanguitoPrices) {
            return undefined;
        }

        // API -> precios de supers para ChanguitoPrices

        (async () => {
            setErrorChanguitoPrices(false)

            await new Promise((resolve) => setTimeout(resolve, 500)); // delay prueba para que se vea el skeleton
            try {
                const pricesChanguitoFetch = await fetch(RICKYMORTY)
                    .then(response => response.json())
                    .then(data => data.results)

                setChanguitoPrices([...pricesChanguitoFetch.slice(1, 5)]);
            } catch (error) {
                setErrorChanguitoPrices(true)
            }
            setLoadingChanguitoPrices(false)
        })();

    }, [loadingChanguitoPrices]);

    return (
        {
            changuitoPrices,
            errorChanguitoPrices,
            loadingChanguitoPrices,
            setLoadingChanguitoPrices,
        }
    );
}

export { useChanguitoStates };
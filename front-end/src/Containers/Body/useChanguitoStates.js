import React from "react";

const RICKYMORTY = 'https://rickandmortyapi.com/api/character/'
const API_LITA_BASE = 'https://o5jypc5bx0.execute-api.us-east-1.amazonaws.com/default/responseDummyData'

export default function useChanguitoStates() {

    // Estados del Changuito
    const [chango, setChango] = React.useState([])
    const [pricesChanguito, setPricesChanguito] = React.useState([]);
    const [errorPricesChanguito, setErrorPricesChanguito] = React.useState(false);
    const [loadingPricesChanguito, setLoadingPricesChanguito] = React.useState(false);


    // Effect para loading de Changuito
    React.useEffect(() => {

        if (!loadingPricesChanguito) {
            return undefined;
        }

        // API -> precios de supers para changuito

        (async () => {

            setPricesChanguito([])
            setErrorPricesChanguito(false)

            await new Promise((resolve) => setTimeout(resolve, 500)); // delay prueba para que se vea el skeleton
            try {
                const pricesChanguito = await fetch(RICKYMORTY)
                    .then(response => response.json())
                    .then(data => data.results)

                setPricesChanguito(pricesChanguito);
            } catch (error) {
                setErrorPricesChanguito(true)
            }
            setLoadingPricesChanguito(false)
        })();

    }, [loadingPricesChanguito]);

    return (
        {
            chango,
            setChango,
            pricesChanguito,
            errorPricesChanguito,
            loadingPricesChanguito,
        }
    );
}

export { useChanguitoStates };
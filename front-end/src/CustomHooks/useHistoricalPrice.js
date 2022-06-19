import React from "react";

const API_LITA_BASE = 'https://o5jypc5bx0.execute-api.us-east-1.amazonaws.com/default/'

// { "products" : "Pepsi Black 2.25lts", "date" : "2022-06" }

export default function useGetHistorialPrice() {
    const [historicalPrice, setHistoricalPrice] = React.useState([]);

    React.useEffect(() => {
        async function fetchHistorialPrice() {
            //await new Promise((resolve) => setTimeout(resolve, 500));
            try {
                const historialPrice = await fetch(API_LITA_BASE + "getHistoricalPrice")
                    .then(response => response.json())
                    .then(data => data)
                setHistoricalPrice([...historialPrice[0].product])
            } catch (error) {
                setHistoricalPrice([{ productName: 'Error' }])
            }
        };
        fetchHistorialPrice()

    }, []);

    return (
        {
            historicalPrice,
        }
    );
}
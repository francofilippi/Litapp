import React from "react";

const API_LITA_BASE = 'https://x3emzth7b7.execute-api.us-east-1.amazonaws.com/default'

export default function useOneProduct({ searchValue }) {

  // Estados de OneProductPrices (Precios del producto buscado)
  const [oneProductPrices, setOneProductPrices] = React.useState([]);
  const [errorOneProductPrices, setErrorOneProductPrices] = React.useState(false);
  const [loadingOneProductPrices, setLoadingOneProductPrices] = React.useState(false);
  const [historicalPrice, setHistoricalPrice] = React.useState([]);
  //const loadingOneProductPrices = searchValue || oneProductPrices.length === 0;

  // Effect para loading de OneProductPrices(LitApp)
  React.useEffect(() => {

    if (!searchValue) {
      return undefined;
    }

    // API -> precios de supers para searched product
    (async () => {
      setLoadingOneProductPrices(true)
      setOneProductPrices([])
      setErrorOneProductPrices(false)

      // let precioABuscar = Array.from([searchValue.name]) // Armo un array con la propiedad name del objeto de searchValue
      let preciosABuscarObj = { products: [searchValue.productName] } // Convierto a un objeto con clave products el array anterior (OK para enviarlo como body del request)

      try {
        var requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'text/plain'
          },
          body: JSON.stringify(preciosABuscarObj),
          redirect: 'follow'
        };

        const fetchPrices = await fetch(API_LITA_BASE + 'getspecificproduct', requestOptions)
          .then(response => response.json())
          .then(data => data)
          .catch(error => console.log('error: ', error));

        let filteredFetchPrices = fetchPrices.sort((a, b) => a.price - b.price).filter(a => a.price > 0) // Si viene precio 0 en un super, no lo toma en cuenta. Debería corregirse desde el back esto
        filteredFetchPrices.map(e => e.price = e.price.toFixed(2)) // Agrega 2 decimales a todos los precios
        setOneProductPrices([...filteredFetchPrices])
      } catch (error) {
        setErrorOneProductPrices(true)
      }
      setLoadingOneProductPrices(false)
    })();

    // API -> historico para searched product
    (async () => {

      setHistoricalPrice([])
      // let precioABuscar = Array.from([searchValue.name]) // Armo un array con la propiedad name del objeto de searchValue
      let historicoABuscarObj = { products: searchValue.productName, date: "2022-06" } // Convierto a un objeto con clave products el array anterior (OK para enviarlo como body del request)

      try {
        var requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'text/plain'
          },
          body: JSON.stringify(historicoABuscarObj),
          redirect: 'follow'
        };

        const fetchHistorical = await fetch(API_LITA_BASE + 'getHistoricalPrice', requestOptions)
          .then(response => response.json())
          .then(data => data)
          .catch(error => console.log('error: ', error));
        setHistoricalPrice([...fetchHistorical])
      } catch (error) {
        console.log(error)
      }
    })();

    return () => {
      setHistoricalPrice([])
    }

  }, [searchValue]);

  return (
    {
      oneProductPrices,
      errorOneProductPrices,
      loadingOneProductPrices,
      historicalPrice,
    }
  );
}
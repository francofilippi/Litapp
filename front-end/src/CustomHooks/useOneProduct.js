import React from "react";

const API_LITA_BASE = 'https://o5jypc5bx0.execute-api.us-east-1.amazonaws.com/default/'

export default function useOneProduct({ searchValue }) {

  // Estados de OneProductPrices (Precios del producto buscado)
  const [oneProductPrices, setOneProductPrices] = React.useState([]);
  const [errorOneProductPrices, setErrorOneProductPrices] = React.useState(false);
  const [loadingOneProductPrices, setLoadingOneProductPrices] = React.useState(false);
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


  }, [searchValue]);

  return (
    {
      oneProductPrices,
      errorOneProductPrices,
      loadingOneProductPrices,
    }
  );
}
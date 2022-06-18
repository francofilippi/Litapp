import React from "react";

const RICKYMORTY = 'https://rickandmortyapi.com/api/character/'
const API_LITA_BASE = 'https://o5jypc5bx0.execute-api.us-east-1.amazonaws.com/default/'

export default function useOneProduct({ searchValue }) {

  // Estados del OneProductPrices (Precios del producto buscado)
  const [oneProductPrices, setOneProductPrices] = React.useState([]);
  const [errorOneProductPrices, setErrorOneProductPrices] = React.useState(false);
  const [loadingOneProductPrices, setLoadingOneProductPrices] = React.useState(false);
  //const loadingOneProductPrices = searchValue || oneProductPrices.length === 0;

  /* Effect para loading de OneProductPrices(RICK Y MORTY)
  
  // React.useEffect(() => {

  //   if (!searchValue) {
  //     return undefined;
  //   }

  //   // API -> precios de supers para searched product
  //   (async () => {
  //     setLoadingOneProductPrices(true)
  //     setOneProductPrices([])
  //     setErrorOneProductPrices(false)

  //     await new Promise((resolve) => setTimeout(resolve, 500)); // delay prueba para que se vea el skeleton
  //     try {
  //       const pricesProd = await fetch(RICKYMORTY)
  //         .then(response => response.json())
  //         .then(data => data)

  //       setOneProductPrices([...pricesProd.slice(searchValue.id - 1, searchValue.id + 3)]);
  //     } catch (error) {
  //       setErrorOneProductPrices(true)
  //     }
  //     setLoadingOneProductPrices(false)
  //   })();

  // }, [searchValue]);

*/

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

      let precioABuscar = [searchValue.productName]
      // let precioABuscar = Array.from([searchValue.name]) // Armo un array con la propiedad name del objeto de searchValue
      let preciosABuscarObj = { products: precioABuscar } // Convierto a un objeto con clave products el array anterior (OK para enviarlo como body del request)

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
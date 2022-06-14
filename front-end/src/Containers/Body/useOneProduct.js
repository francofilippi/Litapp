import React from "react";

const RICKYMORTY = 'https://rickandmortyapi.com/api/character/'
const API_LITA_BASE = 'https://o5jypc5bx0.execute-api.us-east-1.amazonaws.com/default/'

// REQUEST PARA PRECIOS PRODUCTO ESPECÍFICO (FUNCIONA)
// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// var raw = {"products":["Pepsi Black 2.25lts"]};

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };

// fetch("https://o5jypc5bx0.execute-api.us-east-1.amazonaws.com/default/getSpecificProduct", requestOptions)
//   .then(response => response.json())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

export default function useOneProduct() {

  // Estados de Search (Autocomplete)  
  const [searchValue, setSearchValue] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [searchOptions, setSearchOptions] = React.useState([]);
  const [errorSearchOptions, setErrorSearchOptions] = React.useState(undefined);
  const loadingSearchOptions = open && searchOptions.length === 0;

  // Effect para loading de SearchAutocomplete (RICK Y MORTY)
  // React.useEffect(() => {
  //   let active = true; // variable usada para solo fetchear 1 vez la data y no cada vez que se ejecuta el useEffect

  //   if (!loadingSearchOptions) {
  //     return undefined;
  //   }

  //   /*API -> productos/imagenes para search Autocomplete*/
  //   // (async () => {
  //   //   if (active) {
  //   //     await new Promise((resolve) => setTimeout(resolve, 500));
  //   //     try {
  //   //       const firstProds = await fetch(API_LITA_BASE)
  //   //         .then(response => response.json())
  //   //         .then(data => data.results)

  //   //       setOneProductOptions([...firstProds])
  //   //       //setOneProductOptions([...JSON.parse(firstProds.body)])

  //   //     } catch (error) {
  //   //       setOneProductOptions([{ name: 'Error' }])
  //   //       setErrorOneProductOptions(error)
  //   //     }
  //   //   }
  //   // })();

  //   // Esto es lo mismo que lo de arriba.
  //   async function fetchProductos() {
  //     if (active) {
  //       //await new Promise((resolve) => setTimeout(resolve, 500));
  //       try {
  //         const firstProds = await fetch(RICKYMORTY)
  //           .then(response => response.json())
  //           .then(data => data.results)

  //         setSearchOptions([...firstProds])
  //         //setSearchOptions([...JSON.parse(firstProds.body)])

  //       } catch (error) {
  //         setSearchOptions([{ name: 'Error' }])
  //         setErrorSearchOptions(error)
  //       }
  //     }
  //   };
  //   fetchProductos()

  //   return () => {
  //     active = false;
  //   };


  // }, [loadingSearchOptions]);

  // Effect para loading de SearchAutocomplete (LitApp)
  React.useEffect(() => {

    if (!loadingSearchOptions) {
      return undefined;
    }

    async function fetchProductos() {
      //await new Promise((resolve) => setTimeout(resolve, 500));
      try {
        const firstProds = await fetch(RICKYMORTY)
          .then(response => response.json())
          .then(data => data.results)

        setSearchOptions([...firstProds])
        //setSearchOptions([...JSON.parse(firstProds.body)])

      } catch (error) {
        setSearchOptions([{ name: 'Error' }])
        setErrorSearchOptions(error)
      }
    };
    fetchProductos()

  }, [loadingSearchOptions]);

  // Estados del OneProductSearchedProd (Precios del producto buscado)
  const [oneProductPrices, setOneProductPrices] = React.useState([]);
  const [errorOneProductPrices, setErrorOneProductPrices] = React.useState(false);
  //const loadingOneProductPrices = searchValue || oneProductPrices.length === 0;
  const [loadingOneProductPrices, setLoadingOneProductPrices] = React.useState(false);

  // Effect para loading de OneProductPrices(RICK Y MORTY)
  React.useEffect(() => {

    if (!searchValue) {
      return undefined;
    }

    // API -> precios de supers para searched product
    (async () => {
      setLoadingOneProductPrices(true)
      setOneProductPrices([])
      setErrorOneProductPrices(false)

      await new Promise((resolve) => setTimeout(resolve, 500)); // delay prueba para que se vea el skeleton
      try {
        const pricesProd = await fetch(RICKYMORTY)
          .then(response => response.json())
          .then(data => data.results)

        setOneProductPrices([...pricesProd.slice(searchValue.id - 1, searchValue.id + 3)]);
      } catch (error) {
        setErrorOneProductPrices(true)
      }
      setLoadingOneProductPrices(false)
    })();


  }, [searchValue]);

  // Effect para loading de OneProductPrices(LitApp)
  // React.useEffect(() => {

  //   if (!searchValue) {
  //     return undefined;
  //   }

  //   // API -> precios de supers para searched product
  //   (async () => {
  //     setLoadingOneProductPrices(true)
  //     setOneProductPrices([])
  //     setErrorOneProductPrices(false)

  //     let precioABuscar = ['Pepsi Black 2.25lts']
  //     // let precioABuscar = Array.from([searchValue.name]) // Armo un array con la propiedad name del objeto de searchValue
  //     let preciosABuscarObj = { products: precioABuscar } // Convierto a un objeto con clave products el array anterior (OK para enviarlo como body del request)

  //     try {
  //       var requestOptions = {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'text/plain'
  //         },
  //         body: JSON.stringify(preciosABuscarObj),
  //         redirect: 'follow'
  //       };

  //       fetch(API_LITA_BASE + 'getSpecificProduct', requestOptions)
  //         .then(response => response.json())
  //         .then(result => console.log(result))
  //         .catch(error => console.log('error', error));

  //     } catch (error) {
  //       setErrorOneProductPrices(true)
  //     }
  //     setLoadingOneProductPrices(false)
  //   })();


  // }, [searchValue]);

  return (
    {
      searchValue,
      open,
      setOpen,
      setSearchValue,
      searchOptions,
      errorSearchOptions,
      loadingSearchOptions,
      oneProductPrices,
      errorOneProductPrices,
      loadingOneProductPrices,
    }
  );
}

export { useOneProduct };
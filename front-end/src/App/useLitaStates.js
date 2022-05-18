import React from "react";

const API_LITA_BASE = 'https://rickandmortyapi.com/api/character/'

export default function useLitaStates() {

  // Estados de LitaSearch (Autocomplete)
  const [open, setOpen] = React.useState(false);
  const [searchOptions, setSearchOptions] = React.useState([]);
  const [errorSearchOptions, setErrorSearchOptions] = React.useState(undefined);
  const loadingSearchOptions = open && searchOptions.length <= 1;
  // Effect para loading de LitaSearch (Autocomplete)
  React.useEffect(() => {
    let active = true; // variable usada para solo fetchear 1 vez la data y no cada vez que se ejecuta el useEffect

    if (!loadingSearchOptions) {
      return undefined;
    }

    // API -> productos/imagenes para search Autocomplete
    (async () => {
      if (active) {        //await new Promise((resolve) => setTimeout(resolve, 1000));
        try {
          const firstProds = await fetch(API_LITA_BASE)
            .then(response => response.json())
            .then(data => data.results)

          setSearchOptions([...firstProds])
          //setSearchOptions([...JSON.parse(firstProds.body)])

        } catch (error) {
          setSearchOptions([{ name: 'Error' }])
          setErrorSearchOptions(error)
        }
      }
    })();

    // Access-Control-Allow-Headers: 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'
    // Access-Control-Allow-Methods: 'GET'
    // Access-Control-Allow-Origin: '*'
    return () => {
      active = false;
    };


  }, [loadingSearchOptions]);

  // Estados del LitaSearchedProd (Precios del producto buscado)
  const [value, setValue] = React.useState(null);
  const [pricesOptions, setPricesOptions] = React.useState([]);
  const [errorPricesOptions, setErrorPricesOptions] = React.useState(false);
  const loadingPricesOptions = value && pricesOptions.length === 0;

  // Effect para loading de LitaSearchedProd
  React.useEffect(() => {

    if (!loadingPricesOptions) {
      return undefined;
    }

    // API -> precios de supers para searched product
    (async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // delay prueba para que se vea el skeleton
      try {
        const pricesProd = await fetch(API_LITA_BASE)
          .then(response => response.json())
          .then(data => data.results)
        setPricesOptions([...pricesProd.slice(0, 4)]);
      } catch (error) {
        //setPricesOptions(Array.from(new Array(4).fill({ name: 'Error' })))
        setErrorPricesOptions(true)
      }
    })();

  }, [loadingPricesOptions]);

  return (
    {
      value,
      setValue,
      open,
      setOpen,
      loadingSearchOptions,
      loadingPricesOptions,
      errorSearchOptions,
      searchOptions,
      errorPricesOptions,
      pricesOptions,
    }
  );
}

export { useLitaStates };
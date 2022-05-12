import React from "react";

const API_LITA_BASE = 'https://rickandmortyapi.com/api/character/'

export default function useLitaStates() {

  // Estados de LitaSearch (Autocomplete)
  const [value, setValue] = React.useState(null);
  const [inputValue, setInputValue] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [searchOptions, setSearchOptions] = React.useState([]);
  const [errorSearchOptions, setErrorSearchOptions] = React.useState(false);
  const loadingSearchOptions = open && searchOptions.length === 0;


  // Effect para loading de LitaSearch (Autocomplete)
  React.useEffect(() => {
    let active = true; // variable usada para solo fetchear 1 vez la data y no cada vez que se ejecuta el useEffect

    if (!loadingSearchOptions) {
      return undefined;
    }

    // API -> productos/imagenes para search Autocomplete
    (async () => {
      if (active) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        try {
          const firstProds = await fetch(API_LITA_BASE)
            .then(response => response.json())
            .then(data => data.results)
          setSearchOptions([...firstProds]);
        } catch (error) {
          setErrorSearchOptions(true)
          console.error(error)
        }
      }
    })();

    return () => {
      active = false;
    };

  }, [loadingSearchOptions]);

  // Estados del LitaSearchedProd (Precios del producto buscado)
  const [pricesOptions, setPricesOptions] = React.useState([]);
  const [errorPricesOptions, setErrorPricesOptions] = React.useState(false);
  const [loadingPricesOptions, setLoadingPricesOptions] = React.useState(false);

  // Effect para loading de LitaSearchedProd
  React.useEffect(() => {

    if (!loadingPricesOptions) {
      return undefined;
    }

    // API -> precios de supers para searched product
    (async () => {
      try {
        const pricesProd = await fetch(API_LITA_BASE)
          .then(response => response.json())
          .then(data => data.results)
        setPricesOptions([...pricesProd.slice(0, 4)]);
      } catch (error) {
        setErrorPricesOptions(true)
        console.error(error)
      }
      setTimeout(() => {

        setLoadingPricesOptions(false)
      }, 1000)
    })();

  }, [loadingPricesOptions]);

  return (
    {
      value,
      setValue,
      inputValue,
      setInputValue,
      open,
      setOpen,
      loadingSearchOptions,
      errorSearchOptions,
      searchOptions,
      loadingPricesOptions,
      setLoadingPricesOptions,
      errorPricesOptions,
      pricesOptions,
    }
  );
}

export { useLitaStates };
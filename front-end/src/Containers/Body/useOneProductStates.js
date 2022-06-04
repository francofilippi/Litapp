import React from "react";

const RICKYMORTY = 'https://rickandmortyapi.com/api/character/'
// const API_LITA_BASE = 'https://o5jypc5bx0.execute-api.us-east-1.amazonaws.com/default/responseDummyData'

// Access-Control-Allow-Headers: 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'
// Access-Control-Allow-Methods: 'GET'
// Access-Control-Allow-Origin: '*'

export default function useOneProductStates() {

  // Estados de LitaOneProductSearch (Autocomplete)
  const [open, setOpen] = React.useState(false);
  const [oneProductOptions, setOneProductOptions] = React.useState([]);
  const [errorOneProductOptions, setErrorOneProductOptions] = React.useState(undefined);
  const loadingOneProductOptions = open && oneProductOptions.length === 0;

  // Effect para loading de LitaOneProductSearch (Autocomplete)
  React.useEffect(() => {
    let active = true; // variable usada para solo fetchear 1 vez la data y no cada vez que se ejecuta el useEffect

    if (!loadingOneProductOptions) {
      return undefined;
    }

    /*API -> productos/imagenes para search Autocomplete
    (async () => {
      if (active) {
        //await new Promise((resolve) => setTimeout(resolve, 500));
        try {
          const firstProds = await fetch(API_LITA_BASE)
            .then(response => response.json())
            .then(data => data.results)

          setOneProductOptions([...firstProds])
          //setOneProductOptions([...JSON.parse(firstProds.body)])

        } catch (error) {
          setOneProductOptions([{ name: 'Error' }])
          setErrorOneProductOptions(error)
        }
      }
    })();*/


    // Esto es lo mismo que lo de arriba.
    async function fetchProductos() {
      if (active) {
        //await new Promise((resolve) => setTimeout(resolve, 500));
        try {
          const firstProds = await fetch(RICKYMORTY)
            .then(response => response.json())
            .then(data => data.results)

          setOneProductOptions([...firstProds])
          //setOneProductOptions([...JSON.parse(firstProds.body)])

        } catch (error) {
          setOneProductOptions([{ name: 'Error' }])
          setErrorOneProductOptions(error)
        }
      }
    };
    fetchProductos()

    return () => {
      active = false;
    };


  }, [loadingOneProductOptions]);

  // Estados del LitaOneProductSearchedProd (Precios del producto buscado)
  const [value, setValue] = React.useState(null);
  const [oneProductPrices, setOneProductPrices] = React.useState([]);
  const [errorOneProductPrices, setErrorOneProductPrices] = React.useState(false);
  const [loadingOneProductPrices, setLoadingOneProductPrices] = React.useState(false);
  //const loadingOneProductPrices = value && oneProductOptions.length === 0;

  // Effect para loading de LitaOneProductSearchedProd
  React.useEffect(() => {

    if (!value) {
      return undefined;
    }

    // API -> precios de supers para searched product

    (async () => {

      setOneProductPrices([])
      setLoadingOneProductPrices(true)
      setErrorOneProductPrices(false)

      await new Promise((resolve) => setTimeout(resolve, 500)); // delay prueba para que se vea el skeleton
      try {
        const pricesProd = await fetch(RICKYMORTY)
          .then(response => response.json())
          .then(data => data.results)

        setOneProductPrices([...pricesProd.slice(value.id - 1, value.id + 3)]);
      } catch (error) {
        setErrorOneProductPrices(true)
      }
      setLoadingOneProductPrices(false)
    })();

  }, [value]);

  return (
    {
      value,
      setValue,
      open,
      setOpen,
      oneProductOptions,
      errorOneProductOptions,
      loadingOneProductOptions,
      oneProductPrices,
      errorOneProductPrices,
      loadingOneProductPrices,
    }
  );
}

export { useOneProductStates };
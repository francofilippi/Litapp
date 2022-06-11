import React from 'react';

// IMPORTS MUI
import Grid from '@mui/material/Grid';

// Componente Search
import SearchProduct from '../../Components/SearchProduct';

// Componente OneProductInfo
import OneProductInfo from '../../Components/OneProductInfo';

// Componentes OneProduct Prices
import OneProductPrices from '../../Components/OneProductPrices';
import LoadingOneProductPrices from '../../Components/OneProductPrices/LoadingOneProductPrices'
import ErrorOneProductPrices from '../../Components/OneProductPrices/ErrorOneProductPrices'
import FullFilledOneProductPrices from '../../Components/OneProductPrices/FullFilledOneProductPrices';

// Lógica
import useOneProduct from './useOneProduct';

export default function OneProductMode() {

    const {
        searchValue,
        setSearchValue,
        open,
        setOpen,
        searchOptions,
        loadingSearchOptions,
        errorSearchOptions,
        oneProductPrices,
        errorOneProductPrices,
        loadingOneProductPrices,
    } = useOneProduct();

    return (
        <>
            <SearchProduct
                productMode='OneProduct'
                value={searchValue}
                setValue={setSearchValue}
                searchOptions={searchOptions}
                open={open}
                setOpen={setOpen}
                loadingSearchOptions={loadingSearchOptions}
                errorSearchOptions={errorSearchOptions}
            />
            {!!searchValue &&

                <Grid container spacing={2} justifyContent="center" sx={{ flexGrow: 1 }}>
                    <OneProductInfo
                        searchValue={searchValue} />

                    <OneProductPrices
                        errorOneProductPrices={errorOneProductPrices}
                        loadingOneProductPrices={loadingOneProductPrices}
                        oneProductPrices={oneProductPrices}
                        onLoading={() => (<LoadingOneProductPrices />)}
                        onError={() => (<ErrorOneProductPrices />)}
                    >
                        {(item, index) => (
                            <FullFilledOneProductPrices
                                key={item.name}
                                index={index}
                                item={item}
                            />
                        )}
                    </OneProductPrices>

                </Grid>
            }
        </>
    )
}
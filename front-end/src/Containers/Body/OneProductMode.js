import React from 'react';

// Lógica
import useOneProduct from './useOneProduct';

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

export default function OneProductMode({ searchOptions, storeOptions }) {

    const [searchValue, setSearchValue] = React.useState(null);

    const {
        oneProductPrices,
        errorOneProductPrices,
        loadingOneProductPrices,
    } = useOneProduct({ searchValue });

    return (
        <>
            <SearchProduct
                productMode='OneProduct'
                value={searchValue}
                setValue={setSearchValue}
                searchOptions={searchOptions}
            />

            {!!searchValue &&

                <Grid container spacing={2}>

                    <Grid item xs={12} sm={12} lg={8}>
                        <OneProductInfo
                            searchValue={searchValue}
                            oneProductPrices={oneProductPrices}
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} lg={4}>
                        <OneProductPrices
                            errorOneProductPrices={errorOneProductPrices}
                            loadingOneProductPrices={loadingOneProductPrices}
                            oneProductPrices={oneProductPrices}
                            onLoading={() => (<LoadingOneProductPrices />)}
                            onError={() => (<ErrorOneProductPrices />)}
                        >
                            {(item, index) => (
                                <FullFilledOneProductPrices
                                    key={item.market}
                                    item={item}
                                    index={index}
                                    storeOptions={storeOptions}
                                />
                            )}
                        </OneProductPrices>
                    </Grid>

                </Grid>

            }

        </>
    )
}
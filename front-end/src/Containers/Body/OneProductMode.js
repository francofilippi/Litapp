import React from 'react';

// Lógica
import useOneProduct from '../../CustomHooks/useOneProduct';

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
import HistoricalPrice from '../../Components/HistoricalPrice';

export default function OneProductMode({ searchOptions, storeOptions }) {

    const [searchValue, setSearchValue] = React.useState(null);
    const [historicalMode, setHistoricalMode] = React.useState(false)

    const {
        oneProductPrices,
        errorOneProductPrices,
        loadingOneProductPrices,
        historicalPrice,
    } = useOneProduct({ searchValue });

    return (
        <>
            <SearchProduct
                value={searchValue}
                setValue={setSearchValue}
                searchOptions={searchOptions}
            />

            {!!searchValue &&

                <Grid container spacing={2}>

                    {!historicalMode ? (
                        <>
                            <Grid item xs={12} sm={12} lg={8}>
                                <OneProductInfo
                                    searchValue={searchValue}
                                    oneProductPrices={oneProductPrices}
                                    setHistoricalMode={setHistoricalMode}
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
                        </>
                    ) : (
                        <Grid item xs={12} sm={12} lg={12}>
                            <HistoricalPrice
                                searchValue={searchValue}
                                historicalPrice={historicalPrice}
                                setHistoricalMode={setHistoricalMode}
                            />
                        </Grid>
                    )}
                </Grid>

            }

        </>
    )
}
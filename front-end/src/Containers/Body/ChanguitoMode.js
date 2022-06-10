import React from 'react';
// MUI
import Grid from '@mui/material/Grid';

// Lógica
import useOneProduct from './useOneProduct';
import useChanguito from './useChanguito';

// Componente Search
import SearchProduct from '../../Components/SearchProduct';

// Componentes Changuito Info
import ChanguitoInfo from '../../Components/ChanguitoInfo';
import FullFillChanguito from '../../Components/ChanguitoInfo/FullFillChanguito';
import EmptyChanguito from '../../Components/ChanguitoInfo/EmptyChanguito';
import LoadingChanguito from '../../Components/ChanguitoInfo/LoadingChanguito';

// Componentes Changuito Prices
import ChanguitoPrices from '../../Components/ChanguitoPrices';
import ErrorChanguitoPrices from '../../Components/ChanguitoPrices/ErrorChanguitoPrices'
import LoadingChanguitoPrices from '../../Components/ChanguitoPrices/LoadingChanguitoPrices'
import FullFilledChanguitoPrices from '../../Components/ChanguitoPrices/FullFilledChanguitoPrices'

import { ChangeAlertWithStorageListener } from '../../Components/ChangeAlert';

export default function ChanguitoMode() {

    const {
        open,
        setOpen,
        searchOptions,
        loadingSearchOptions,
        errorSearchOptions,
    } = useOneProduct();

    const {
        changuito,
        loadingChanguito,
        chPrices,
        errorChPrices,
        loadingChPrices,
        setLoadingChPrices,
        deleteProducto,
        saveChanguito,
        sincronizeChanguito,
    } = useChanguito();

    return (
        <>
            <SearchProduct
                multiple={true}
                limitTags={2}
                filterSelectedOptions={true}
                value={changuito}
                setValue={saveChanguito}
                searchOptions={searchOptions}
                open={open}
                setOpen={setOpen}
                loadingSearchOptions={loadingSearchOptions}
                errorSearchOptions={errorSearchOptions}
            />

            <Grid container spacing={2} justifyContent="center" sx={{ flexGrow: 1 }}>

                <Grid item xs={12} sm={12} lg={(chPrices.length || !!loadingChPrices) ? 8 : 12} sx={{ justifyContent: 'center' }}>

                    <ChanguitoInfo
                        changuito={changuito}
                        loadingChanguito={loadingChanguito}
                        chPrices={chPrices}
                        setLoadingChPrices={setLoadingChPrices}
                        onLoading={() => <LoadingChanguito />}
                        emptyChanguito={() => <EmptyChanguito />}
                    >
                        {(producto) => (
                            <FullFillChanguito
                                key={producto.name}
                                producto={producto}
                                deleteProducto={() => deleteProducto(producto.name)}
                            />
                        )}
                    </ChanguitoInfo>

                </Grid>

                <Grid item xs={12} sm={12} lg={(chPrices.length || !!loadingChPrices) ? 4 : 12}>

                    <Grid container spacing={2}>

                        <ChanguitoPrices
                            chPrices={chPrices}
                            errorChPrices={errorChPrices}
                            loadingChPrices={loadingChPrices}
                            onLoading={() => (<LoadingChanguitoPrices />)}
                            onError={() => (<ErrorChanguitoPrices />)}
                        >
                            {(item, index) => (
                                <FullFilledChanguitoPrices
                                    key={item.name}
                                    index={index}
                                    item={item}
                                />
                            )}
                        </ChanguitoPrices>

                    </Grid>

                </Grid>

            </Grid>

            <ChangeAlertWithStorageListener sincronize={sincronizeChanguito} />
        </>
    )
}
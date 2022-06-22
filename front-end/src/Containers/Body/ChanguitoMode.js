import React from 'react';

// IMPORTS MUI
import Grid from '@mui/material/Grid';

// Lógica
import useChanguito from '../../CustomHooks/useChanguito';

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

export default function ChanguitoMode({ searchOptions, storeOptions }) {

    const {
        changuito,
        loadingChanguito,
        chPrices,
        storeTotals,
        errorChPrices,
        loadingChPrices,
        selectedCh,
        setSelectedCh,
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
                disableCloseOnSelect={true}
                value={changuito}
                setValue={saveChanguito}
                searchOptions={searchOptions}
            />

            <Grid container spacing={2} >

                <Grid item xs={12} sm={12} lg={(chPrices.length || !!loadingChPrices) ? 8 : 12} sx={{ justifyContent: 'center', display: 'flex' }}>

                    <ChanguitoInfo
                        changuito={changuito}
                        loadingChanguito={loadingChanguito}
                        chPrices={chPrices}
                        storeTotals={storeTotals}
                        selectedCh={selectedCh}
                        setLoadingChPrices={setLoadingChPrices}
                        onLoading={() => <LoadingChanguito />}
                        emptyChanguito={() => <EmptyChanguito />}
                    >
                        {(producto) => (
                            <FullFillChanguito
                                key={producto.productName}
                                producto={producto}
                                chPrices={chPrices}
                                selectedCh={selectedCh}
                                deleteProducto={() => deleteProducto(producto.name)}
                            />
                        )}
                    </ChanguitoInfo>

                </Grid>

                <Grid item xs={12} sm={12} lg={(chPrices.length || !!loadingChPrices) ? 4 : 12}>

                    <Grid container spacing={2}>

                        <ChanguitoPrices
                            chPrices={chPrices}
                            storeTotals={storeTotals}
                            errorChPrices={errorChPrices}
                            loadingChPrices={loadingChPrices}
                            onLoading={() => (<LoadingChanguitoPrices />)}
                            onError={() => (<ErrorChanguitoPrices />)}
                        >
                            {(item, index) => (
                                <FullFilledChanguitoPrices
                                    key={item.store}
                                    index={index}
                                    item={item}
                                    setSelectedCh={setSelectedCh}
                                    storeOptions={storeOptions}
                                />
                            )}
                        </ChanguitoPrices>

                    </Grid>

                </Grid>

            </Grid>
        </>
    )
}
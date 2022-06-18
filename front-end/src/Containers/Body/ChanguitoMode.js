import React from 'react';

// IMPORTS MUI
import Grid from '@mui/material/Grid';

// Lógica
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

export default function ChanguitoMode({ searchOptions, storeOptions }) {

    const {
        changuito,
        loadingChanguito,
        chPrices,
        lowestPrices,
        totalPrices,
        errorChPrices,
        loadingChPrices,
        setLoadingChPrices,
        deleteProducto,
        saveChanguito,
        sincronizeChanguito,
    } = useChanguito();

    const [selectedCh, setSelectedCh] = React.useState(null);
    console.log(selectedCh)

    return (
        <>
            <SearchProduct
                multiple={true}
                limitTags={2}
                filterSelectedOptions={true}
                value={changuito}
                setValue={saveChanguito}
                searchOptions={searchOptions}
            />

            <Grid container spacing={2}>

                <Grid item xs={12} sm={12} lg={(chPrices.length || !!loadingChPrices) ? 8 : 12}>

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
                                key={producto.productName}
                                producto={producto}
                                chPrices={chPrices}
                                selectedCh={selectedCh}
                                totalPrices={totalPrices}
                                lowestPrices={lowestPrices}
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

            <ChangeAlertWithStorageListener sincronize={sincronizeChanguito} />
        </>
    )
}
import React from 'react';
// MUI
import Grid from '@mui/material/Grid';
// Componentes
import LitaChanguitoSearch from '../../Components/LitaChanguitoSearch';

// Lógica
import useOneProductStates from './useOneProductStates';
import { useChanguito } from './useChanguito';
import useChanguitoStates from '../../Containers/Body/useChanguitoStates';


// Componentes Changuito Search
import LitaChanguitoInfo from '../../Components/LitaChanguitoInfo';
import FullFillChanguito from '../../Components/LitaChanguitoInfo/FullFillChanguito';
import EmptyChanguito from '../../Components/LitaChanguitoInfo/EmptyChanguito';

// Componentes Changuito Prices
import LitaChanguitoPrices from '../../Components/LitaChanguitoPrices';
import ErrorChanguitoPrices from '../../Components/LitaChanguitoPrices/ErrorChanguitoPrices'
import LoadingChanguitoPrices from '../../Components/LitaChanguitoPrices/LoadingChanguitoPrices'
import FullFilledChanguitoPrices from '../../Components/LitaChanguitoPrices/FullFilledChanguitoPrices'



export default function ChanguitoMode() {

    const {
        open,
        setOpen,
        oneProductOptions,
        loadingOneProductOptions,
        errorOneProductOptions,
    } = useOneProductStates();

    const {
        changuitoPrices,
        errorChanguitoPrices,
        loadingChanguitoPrices,
        setLoadingChanguitoPrices,
    } = useChanguitoStates();

    const {
        changuito,
        addProducto,
        deleteProducto,
    } = useChanguito();

    return (
        <>
            <LitaChanguitoSearch
                addProducto={addProducto}
                oneProductOptions={oneProductOptions}
                open={open}
                setOpen={setOpen}
                loadingOneProductOptions={loadingOneProductOptions}
                errorOneProductOptions={errorOneProductOptions}
            />

            <Grid container spacing={2} justifyContent="center" sx={{ flexGrow: 1, height: '50vh' }}>

                <Grid item xs={12} sm={12} lg={(changuitoPrices.length || !!loadingChanguitoPrices) ? 8 : 12} sx={{ justifyContent: 'center' }}>

                    <LitaChanguitoInfo
                        changuito={changuito}
                        changuitoPrices={changuitoPrices}
                        setLoadingChanguitoPrices={setLoadingChanguitoPrices}
                        emptyChanguito={() => <EmptyChanguito />}
                    >
                        {(prod) => (
                            <FullFillChanguito
                                key={prod.id}
                                producto={prod.name}
                                deleteProducto={() => deleteProducto(prod.name)}
                            />
                        )}
                    </LitaChanguitoInfo>

                </Grid>

                <Grid item xs={12} sm={12} lg={(changuitoPrices.length || !!loadingChanguitoPrices) ? 4 : 12}>

                    <Grid container spacing={2}>

                        <LitaChanguitoPrices
                            changuitoPrices={changuitoPrices}
                            errorChanguitoPrices={errorChanguitoPrices}
                            loadingChanguitoPrices={loadingChanguitoPrices}
                            onLoading={() => (<LoadingChanguitoPrices />)}
                            onError={() => (<ErrorChanguitoPrices />)}
                        >
                            {(item, index) => (
                                <FullFilledChanguitoPrices
                                    key={index}
                                    index={index}
                                    item={item.name}
                                />
                            )}
                        </LitaChanguitoPrices>

                    </Grid>

                </Grid>

            </Grid>
        </>
    )
}
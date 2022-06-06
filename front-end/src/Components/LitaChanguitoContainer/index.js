import React from "react";

// Componentes Changuito Search
import LitaChanguitoInfo from '../../Components/LitaChanguitoInfo';
import FullFillChanguito from '../../Components/LitaChanguitoInfo/FullFillChanguito';
import EmptyChanguito from '../../Components/LitaChanguitoInfo/EmptyChanguito';

// Componentes Changuito Prices
import LitaChanguitoPrices from '../../Components/LitaChanguitoPrices';
import ErrorChanguitoPrices from '../../Components/LitaChanguitoPrices/ErrorChanguitoPrices'
import LoadingChanguitoPrices from '../../Components/LitaChanguitoPrices/LoadingChanguitoPrices'
import FullFilledChanguitoPrices from '../../Components/LitaChanguitoPrices/FullFilledChanguitoPrices'

// Lógica
import useChanguitoStates from '../../Containers/Body/useChanguitoStates';

// IMPORTS MUI
import Grid from '@mui/material/Grid';

export default function LitaChanguitoContainer() {

    const {
        changuito,
        setChanguito,
        changuitoPrices,
        errorChanguitoPrices,
        loadingChanguitoPrices,
        setLoadingChanguitoPrices,
    } = useChanguitoStates();

    return (
        <Grid container spacing={2} justifyContent="center" sx={{ flexGrow: 1, height: '50vh' }}>

            <Grid item xs={12} sm={12} lg={(changuitoPrices.length || !!loadingChanguitoPrices) ? 8 : 12} sx={{ justifyContent: 'center' }}>

                <LitaChanguitoInfo
                    changuito={changuito}
                    changuitoPrices={changuitoPrices}
                    setLoadingChanguitoPrices={setLoadingChanguitoPrices}
                    emptyChanguito={() => <EmptyChanguito />}
                    fullFilledChanguito={changuito?.map((item) => (
                        <FullFillChanguito
                            changuito={changuito}
                            setChanguito={setChanguito}
                            key={item.name}
                            item={item}
                        />
                    ))}
                >
                </LitaChanguitoInfo>

            </Grid>


            <Grid item xs={12} sm={12} lg={(changuitoPrices.length || !!loadingChanguitoPrices) ? 4 : 12}>

                <Grid container spacing={2}>

                    <LitaChanguitoPrices
                        changuito={changuito}
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
    );
}
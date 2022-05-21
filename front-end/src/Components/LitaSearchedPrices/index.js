// IMPORTS REACT
import React from 'react';

import Grid from '@mui/material/Grid';

export default function LitaSearchedPrices(props) {

    return (
        <>
            <Grid item xs={12} sm={12} lg={4}>
                <Grid container spacing={2}>

                    {props.errorPricesOptions && Array.from(new Array(4)).map(props.onError)}

                    {props.loadingPricesOptions && Array.from(new Array(4)).map(props.onLoading)}

                    {!props.loadingPricesOptions && !props.errorPricesOptions && props.pricesOptions?.map(props.children)}

                </Grid>
            </Grid>
        </>
    );
}
// IMPORTS REACT
import React from 'react';

import Grid from '@mui/material/Grid';

export default function LitaChanguitoPrices(props) {

    return (
        <Grid item xs={12} sm={12} lg={props.changuitoPrices ? 4 : 12}>
            <Grid container spacing={2}>

                {props.errorChanguitoPrices && props.onError()}

                {props.loadingChanguitoPrices && props.onLoading()}

                {!props.loadingChanguitoPrices && !props.errorChanguitoPrices && props.changuitoPrices?.map(props.children)}

            </Grid>
        </Grid>
    );
}
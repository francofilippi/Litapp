// IMPORTS REACT
import React from 'react';

import Grid from '@mui/material/Grid';

export default function OneProductPrices(props) {

    return (
        <Grid item xs={12} sm={12} lg={4}>
            <Grid container spacing={2}>

                {props.errorOneProductPrices && props.onError()}

                {props.loadingOneProductPrices && props.onLoading()}

                {!props.loadingOneProductPrices && !props.errorOneProductPrices && props.oneProductPrices?.map(props.children)}

            </Grid>
        </Grid>
    );
}
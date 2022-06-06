// IMPORTS REACT
import React from 'react';

import Grid from '@mui/material/Grid';

export default function LitaChanguitoPrices(props) {

    return (
        <>
            {props.errorChanguitoPrices && props.onError()}

            {props.loadingChanguitoPrices && props.onLoading()}

            {(!props.loadingChanguitoPrices && !props.errorChanguitoPrices) && props.changuitoPrices?.map(props.children)}
        </>
    );
}
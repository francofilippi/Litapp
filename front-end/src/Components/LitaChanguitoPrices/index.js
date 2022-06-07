// IMPORTS REACT
import React from 'react';

export default function LitaChanguitoPrices(props) {

    return (
        <>
            {props.errorChanguitoPrices && props.onError()}

            {props.loadingChanguitoPrices && props.onLoading()}

            {(!props.loadingChanguitoPrices && !props.errorChanguitoPrices) && props.changuitoPrices?.map(props.children)}
        </>
    );
}
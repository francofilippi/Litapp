// IMPORTS REACT
import React from 'react';

export default function ChanguitoPrices(props) {

    return (
        <>
            {props.errorChPrices && props.onError()}

            {props.loadingChPrices && props.onLoading()}

            {(!props.loadingChPrices && !props.errorChPrices) && props.chPrices?.map(props.children)}
        </>
    );
}
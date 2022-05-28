import React from 'react';

import LitaHeader from '../../Components/LitaHeader'

export default function Body(props) {

    return (
        <>
            <LitaHeader />
            {props.productMode === 'OneProduct' ? props.oneProductMode() : props.changuitoMode()}
        </>
    )
}
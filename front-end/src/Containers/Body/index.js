import React from 'react';

import Header from '../../Components/Header';

export default function Body(props) {

    return (
        <>
            <Header productMode={props.productMode} />
            {props.productMode === 'OneProduct' ? props.oneProductMode() : props.changuitoMode()}
        </>
    )
}
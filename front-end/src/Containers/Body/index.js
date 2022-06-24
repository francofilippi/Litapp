import React from 'react';

export default function Body(props) {

    return (
        <>
            {props.productMode === 'OneProduct' ? props.oneProductMode() : props.changuitoMode()}
        </>
    )
}
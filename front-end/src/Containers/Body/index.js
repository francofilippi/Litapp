import React from 'react';

import LitaHeader from '../../Components/LitaHeader'

export default function Body(props) {

    return (
        <>
            <LitaHeader />
            {!!props.changuito ? props.changuitoMode() : props.children}
        </>
    )
}
import React from "react"
import { Typography } from "@mui/material"
import { LitaContext } from '../LitaContext';

export default function LitaHeader() {

    const {
        value
    } = React.useContext(LitaContext);

    return (
        <Typography
            variant='h2'
            sx={value && { textShadow: '8px 4px 0px #3a4654', }}
            component='h1'
        >
            {!value ? 'BUSQUEN PRECIO!!' : 'CAMINE SEÑORA, CAMINE'}
        </Typography>
    )
}

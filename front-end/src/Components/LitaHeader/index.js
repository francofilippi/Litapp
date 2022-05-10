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
            component='h1'
        >
            {!value ? 'BUSQUEN PRECIO!!' : 'CAMINE SEÑORA, CAMINE'}
        </Typography>
    )
}

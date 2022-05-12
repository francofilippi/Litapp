import React from "react"
import { Typography } from "@mui/material"

export default function LitaHeader({ value }) {

    return (
        <Typography
            variant='h2'
            component='h1'
        >
            {!value ? 'BUSQUEN PRECIO!!' : 'CAMINE SEÑORA, CAMINE'}
        </Typography>
    )
}

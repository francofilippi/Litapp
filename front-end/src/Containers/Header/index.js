import React from "react"
import { Typography } from "@mui/material"

export default function LitaHeader({ productMode }) {

    return (
        <Typography
            variant='h3'
            component='h1'
            textAlign='center'
        >
            {productMode === 'OneProduct' ? 'NAVEGUE SEÑORA, NAVEGUE!' : 'BUSQUEN PRECIO!!'}
        </Typography>
    )
}

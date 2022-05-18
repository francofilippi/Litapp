import React from "react"
import { Box, Paper } from "@mui/material"

export default function AdsenseBox() {

    return (
        <Box
            sx={{
                display: 'flex',
                '& > :not(style)': {
                    m: 1,
                    width: '100%',
                    height: 60,
                },
                justifyContent: 'center',
            }}
        >
            <Paper variant="outlined"
                sx={{
                    textAlign: 'center',
                    backgroundColor: '#28BDD4',
                    height: 60,
                    lineHeight: '60px',
                    maxWidth: 800
                }} >ESPACIO PARA ANUNCIO GOOGLE ADSENSE</Paper>
        </Box>
    )
}

import React from "react"
import Paper from "@mui/material/Paper"

export default function AdsenseBox() {

    return (
        <Paper variant="outlined"
            sx={{
                textAlign: 'center',
                backgroundColor: '#28BDD4',
                lineHeight: '60px',
                maxWidth: 800
            }}
        >
            ESPACIO PARA ANUNCIO GOOGLE ADSENSE
        </Paper>
    )
}

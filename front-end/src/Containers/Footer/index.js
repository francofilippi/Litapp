import React from "react"
import Button from "@mui/material/Button"
import LsLogo from "../../assets/imgs/LS-logo-fondo-blanco.png"

import CardMedia from '@mui/material/CardMedia';
export default function Footer() {
    return (
        <Button sx={{ width: '120px', heigth: '100px', padding: 0, background: 'white' }}>

            <CardMedia
                component="img"
                style={{ 'maxHeight': '100%', 'width': '100%', 'height': '100%' }}
                src={LsLogo}
            />
        </Button>
    );
}

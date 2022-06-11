import React from "react"
import Button from "@mui/material/Button"
import LsLogo from "../../assets/imgs/LS-logo-fondo.png"

import CardMedia from '@mui/material/CardMedia';
export default function Footer() {
    return (
        <Button sx={{ width: '100px', heigth: '100px', padding: 0, background: 'none' }}>

            <CardMedia
                component="img"
                style={{ 'maxHeight': '100%', 'width': '100%', 'height': '100%' }}
                src={LsLogo}
            />
        </Button>
    );
}
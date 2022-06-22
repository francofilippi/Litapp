import React from "react"

// MUI
import Button from "@mui/material/Button"
import { useTheme } from '@mui/material/styles';

// Logos
import LsLogoLight from "../../assets/imgs/LsLogo-light.png"
import LsLogoDark from "../../assets/imgs/LsLogo-dark.png"

export default function Footer() {

    const theme = useTheme()
    let LsLogo = LsLogoLight

    theme.palette.mode === 'dark' && (
        LsLogo = LsLogoDark
    )

    return (
        <Button sx={{ display: 'flex', padding: 0, border: 'none', background: 'none' }}>
            <img
                style={{ 'width': '80%', 'height': '80%' }}
                src={LsLogo}
            />
        </Button>
    );
}

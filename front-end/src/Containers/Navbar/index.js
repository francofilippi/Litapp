import React from "react"
import { Box } from "@mui/material";
import { Stack } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { useTheme } from '@mui/material/styles';
import { ColorModeContext } from '../../App/litaTheme.js';
// import AccountMenu from "./AccountMenu";

export default function Navbar() {

    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    return (
        <Stack
            direction="row"
            justifyContent="flex-end"
        >
            Account Menu
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'background.default',
                    color: 'text.primary',
                    borderRadius: 1,
                    p: 3,
                }}
            >
                {theme.palette.mode} mode
                <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </Box>

        </Stack>
    );
}
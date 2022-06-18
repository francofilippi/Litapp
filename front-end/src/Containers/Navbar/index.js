import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';


import { useTheme } from '@mui/material/styles';
import { ColorModeContext } from '../../App/litaTheme.js';

// const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Navbar({ setProductMode }) {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);

    // const [anchorElNav, setAnchorElNav] = React.useState(null); 
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    // const handleOpenNavMenu = (event) => {
    //     setAnchorElNav(event.currentTarget);
    // };

    const toggleChanguito = () => {
        setProductMode((prevMode) => (prevMode === 'OneProduct' ? 'Changuito' : 'OneProduct'))
        console.log('Modo Changuito Activado')
    }

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    // const handleCloseNavMenu = () => {
    //     setAnchorElNav(null);
    // };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            <AppBar>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        <Stack
                            direction="row"
                            justifyContent="space-around"
                            alignItems="center"
                            width={'100%'}
                        >
                            <Button variant='ChanguitoButton' onClick={toggleChanguito}><ShoppingCartIcon />Changuito</Button>
                            <Stack
                                direction="row"
                                justifyContent="flex-end"
                                alignItems="center"
                                width={'100%'}
                                spacing={2}
                            >
                                <Box sx={{ color: 'text.primary', }}>
                                    <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                                        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness3Icon />}
                                    </IconButton>
                                    <Tooltip title="Open settings">
                                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">{setting}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Stack>
                        </Stack>
                    </Toolbar>
                </Container>
            </AppBar>
        </Slide>
    );
};
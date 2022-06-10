import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

export default function SearchProductError(error) {
    return (
        <Box sx={{ width: '100%', height: '100%', textAlign: 'center' }}>
            <ErrorOutlineOutlinedIcon fontSize="large" /><Typography variant='h5'>  Ups! Ha ocurrido un error😥</Typography>
        </Box>
    );
}
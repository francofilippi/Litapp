import React from "react";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function SearchProductError(error) {
    return (
        <Stack sx={{ minHeight: '50px', placeItems: 'center', justifyContent: 'center' }}>
            <Typography variant='body'>  Ups! Ha ocurrido un error😥</Typography>
        </Stack>
    );
}
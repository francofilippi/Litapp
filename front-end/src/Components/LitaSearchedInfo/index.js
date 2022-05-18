// IMPORTS REACT
import React from 'react';

// IMPORTS MUI
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// const pricesOfSearchedProduct = [
//     {
//         super: 'dia',
//         price: 34,
//     },
//     {
//         super: 'coto',
//         price: 33,
//     },
//     {
//         super: 'carrefour',
//         price: 38,
//     },
//     {
//         super: 'disco',
//         price: 32,
//     },

// ]

// ordenar los precios de menor a mayor
//const itemsOrderedByPrice = items.sort((a, b) => a.price - b.price);

export default function LitaSearchedInfo({ value }) {

    return (
        <React.Fragment>
            <Grid item xs={12} sm={12} lg={8}>
                <Paper variant="borderBlackElevatedPaper" sx={{ height: '100%', padding: '30px' }}>
                    <Stack direction="column" spacing={2} height="100%" width="100%" justifyContent="space-around" alignItems="center">
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} width="100%" justifyContent="space-around" alignItems="center">

                            <Typography variant="h5">{value.name}</Typography>

                            <Paper variant='imgListPaper' sx={{ height: '100%' }}>
                                <img
                                    loading='lazy'
                                    src={`https://rickandmortyapi.com/api/character/avatar/${value.id}.jpeg`}
                                    style={{ 'height': '100%' }}
                                    alt=""
                                />
                            </Paper>

                        </Stack>
                        <Divider sx={{ width: '80%' }} />
                    </Stack>
                </Paper>
            </Grid>
        </React.Fragment >
    );
}
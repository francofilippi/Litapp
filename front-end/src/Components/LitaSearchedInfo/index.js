// IMPORTS REACT
import React from 'react';

// IMPORTS MUI
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function LitaSearchedInfo({ value }) {

    return (
        <>
            <Grid item xs={12} sm={12} lg={8}>
                <Paper variant="borderBlackElevatedPaper" sx={{ height: '100%', padding: '30px' }}>
                    <Stack direction="column" spacing={2} height="100%" width="100%" justifyContent="space-around" alignItems="center">
                        <Stack spacing={2} width="100%" justifyContent="space-around" alignItems="center">

                            <Typography variant="h5">{value.name}</Typography>

                            <Paper variant='imgListPaper' sx={{ display: 'flex' }}>
                                <img
                                    loading='lazy'
                                    src={`https://rickandmortyapi.com/api/character/avatar/${value.id}.jpeg`}
                                    style={{ 'height': 'auto', 'maxWidth': '100%', 'borderRadius': 'inherit' }}
                                    alt=""
                                />
                            </Paper>

                        </Stack>
                        <Divider sx={{ width: '80%' }} />
                    </Stack>
                </Paper>
            </Grid>
        </ >
    );
}
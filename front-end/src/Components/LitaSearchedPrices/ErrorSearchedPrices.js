// IMPORTS REACT
import React from 'react';

// IMPORTS MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';


import './winnercard.css';

export default function ErrorSearchedPrices() {

    return (
        <React.Fragment>

            <Grid item xs={12} sm={6}>

                <Card variant='outlined' sx={{ minHeight: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
                    <ErrorOutlineOutlinedIcon fontSize="large" />

                    <CardContent>
                        <Typography variant='h5'>  Ups! Ha ocurrido un error😥</Typography>
                    </CardContent>

                </Card>
            </Grid>

        </React.Fragment >
    );
}
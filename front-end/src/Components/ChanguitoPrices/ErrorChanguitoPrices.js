// IMPORTS REACT
import React from 'react';

// IMPORTS MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

export default function ErrorChanguitoPrices() {
    const fourErrorBoxes = ['1', '2', '3', '4']
    return (
        fourErrorBoxes.map((item) => (
            <Grid key={item} item xs={12} sm={6}>

                <Card variant='errorCard' sx={{ minHeight: '250px', display: 'flex', placeItems: 'center', justifyContent: 'center' }}>


                    <CardContent sx={{ textAlign: 'center' }}>
                        <ErrorOutlineOutlinedIcon fontSize="large" /><br />
                        <Typography variant='body'>  Ups! Ha ocurrido un error😥</Typography>
                    </CardContent>

                </Card>
            </Grid>
        )
        )
    );
}
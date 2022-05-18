// IMPORTS REACT
import React from 'react';

// IMPORTS MUI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

import './winnercard.css';

export default function LoadingSearchedPrices() {

    return (
        <React.Fragment>

            <Grid item xs={12} sm={6}>

                <Card variant='outlined'>
                    <Skeleton variant="rectangular" height='180px' />

                    <CardContent>
                        <Skeleton width={150} />
                    </CardContent>

                    <CardActions sx={{ justifyContent: "center" }}>
                        <Skeleton width={80} />
                    </CardActions>

                </Card>
            </Grid>

        </React.Fragment >
    );
}
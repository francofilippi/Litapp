// IMPORTS REACT
import React from 'react';

// IMPORTS MUI
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

import './winnercard.css';

export default function LitaSearchedPrices({ pricesOptions }) {

    return (
        <React.Fragment>

            <Grid item xs={12} sm={12} lg={4}>
                <Grid container spacing={2}>
                    {(!pricesOptions ? Array.from(new Array(4)) : pricesOptions).map((item, index) => (

                        <Grid key={index} item xs={12} sm={6}>
                            <Box className={(pricesOptions?.indexOf(item) === 0) && 'winnercard'}>

                                {(pricesOptions?.indexOf(item) === 0) && (
                                    <Typography variant="h4" className="winnerstar">⭐</Typography>
                                )}

                                <Card variant={(pricesOptions?.indexOf(item) === 0) ? '' : 'outlined'}>
                                    {item ?
                                        <CardMedia
                                            component="img"
                                            height='100%'
                                            src={`https://rickandmortyapi.com/api/character/avatar/${index + 1}.jpeg`}//logo de super
                                            alt="logo super"
                                        />
                                        :
                                        <Skeleton variant="rectangular" height='180px' />
                                    }

                                    <CardContent>
                                        {item ?
                                            <Typography variant="h4">
                                                $ {item.name}
                                            </Typography>
                                            :
                                            <Skeleton width={150} />
                                        }

                                    </CardContent>

                                    <CardActions sx={{ justifyContent: "center" }}>

                                        {item ?
                                            <Button size="small" sx={{ color: 'white' }}>Ir a producto</Button>
                                            :
                                            <Skeleton width={80} />
                                        }
                                    </CardActions>

                                </Card>
                            </Box>
                        </Grid>

                    ))}
                </Grid>
            </Grid>

        </React.Fragment >
    );
}
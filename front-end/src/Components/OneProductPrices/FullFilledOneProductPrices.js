// IMPORTS REACT
import React from 'react';

// IMPORTS MUI
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
//import Button from '@mui/material/Button';
//import CardActions from '@mui/material/CardActions';


import './winnercard.css';

export default function FullFilledOneProductPrices({ item, index, storeOptions }) {

    const store = storeOptions.filter(e => e.stores === item.market) // asocia la imagen del super con el precio del producto del super que corresponde

    return (
        <Grid item xs={12} sm={6}>

            <Box className={index === 0 && "winnercard"}>

                {index === 0 && (
                    <Typography variant="h4" className="winnerstar">🏆</Typography>
                )}

                <Card variant="outlined" sx={{ borderRadius: '0px' }}>
                    <CardMedia
                        component="img"
                        variant="marketCard"
                        src={store[0].image}//logo de super
                        alt="logo super"
                    />

                    <CardContent>
                        <Typography variant="body">
                            $ {item.price}
                        </Typography>
                    </CardContent>

                    {/* <CardActions sx={{ justifyContent: "center" }}>
                        <Button size="small">
                            <Typography variant='body'>
                                Ir a producto
                            </Typography>
                        </Button>
                    </CardActions> */}
                </Card>

            </Box>

        </Grid>
    );
}
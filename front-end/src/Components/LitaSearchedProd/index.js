import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from "@mui/material/Divider";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import Typography from '@mui/material/Typography';

import { LitaContext } from "../LitaContext";
import './winnercard.css';

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
// dasjfklasdjkl
// ordenar los precios de menor a mayor
//const itemsOrderedByPrice = items.sort((a, b) => a.price - b.price);

export default function LitaSearchedProd() {

    const { value, pricesOptions, loadingPricesOptions } = useContext(LitaContext);
    // const [loading, setLoading] = useState(true);
    // setTimeout(() => {
    //     setLoading(false)
    // }, 1000)
    return (
        <React.Fragment>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>

                    <Grid item xs={12} sm={12} lg={8}>
                        <Box
                            padding={2}
                            sx={{
                                background: 'rgba(93, 16, 181, 0.75)',
                                border: '4px solid #000000',
                                borderRadius: '20px',
                                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                                height: '100%'
                            }}
                        >
                            <Stack
                                direction="column"
                                justifyContent="space-around"
                                height="100%"
                                spacing={2}
                            >
                                <Stack
                                    direction={{ xs: 'column', sm: 'row' }}
                                    justifyContent="space-around"
                                    alignItems="center"
                                >
                                    <Typography variant="h5" color="text.secondary">{value.name}</Typography>

                                        <img
                                            loading='lazy'
                                            src={`https://rickandmortyapi.com/api/character/avatar/${value.id}.jpeg`}
                                            alt=""
                                            width='300px'
                                            style={{ 'maxWidth': '100%'}}
                                        />
                                </Stack>
                                <Divider variant="litaDivider" />
                            </Stack>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={12} lg={4}>
                        <Grid container spacing={2}>
                            {(loadingPricesOptions ? Array.from(new Array(4)) : pricesOptions).map((item, index) => (

                                <Grid key={index} item xs={12} sm={6}>
                                    <Box className={item === pricesOptions[0] && 'winnercard'}>


                                        {item === pricesOptions[0] && (
                                            <Typography variant="h4" className="winnerstar">⭐</Typography>
                                        )}

                                        <Card variant={item === pricesOptions[0] ? '' : 'outlined'}>
                                            {item ?
                                                <CardMedia
                                                    component="img"
                                                    height='100%'
                                                    src={`https://rickandmortyapi.com/api/character/avatar/${value.id+index}.jpeg`}//logo de super
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
                                            {/* <CardActions>
                                                <Button size="small">Learn More</Button>
                                            </CardActions> */}

                                        </Card>
                                    </Box>
                                </Grid>

                            ))}
                        </Grid>
                    </Grid>

                </Grid>
            </Box >
        </React.Fragment >
    );
}
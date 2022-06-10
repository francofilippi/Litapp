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
import Typography from '@mui/material/Typography';

import './winnercard.css';

export default function FullFilledChanguitoPrices({ item, index }) {

    return (
        <Grid item xs={12} sm={6}>
            <Box className={index === 0 && "winnercard"}>

                {index === 0 && (
                    <Typography variant="h4" className="winnerstar">⭐</Typography>
                )}

                <Card variant="outlined" sx={{ borderRadius: '0px' }}>
                    <CardMedia
                        component="img"
                        style={{ 'maxHeight': '150px', 'width': '100%' }}
                        src={item.image}//logo de super
                        alt="logo super"
                    />

                    <CardContent>
                        <Typography variant="body">
                            $ {item.name}
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
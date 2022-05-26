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

export default function FullFilledSearchedPrices({ item, index }) {

    return (
        <Grid item xs={12} sm={6}>
            <Box className={index === 0 && "winnercard"}>

                {index === 0 && (
                    <Typography variant="h4" className="winnerstar">⭐</Typography>
                )}

                <Card variant="outlined">
                    <CardMedia
                        component="img"
                        style={{ 'height': 'auto', 'maxWidth': '100%', 'maxHeight': '150px', 'borderRadius': 'inherit' }}
                        src={`https://rickandmortyapi.com/api/character/avatar/${index + 1}.jpeg`}//logo de super
                        alt="logo super"
                    />

                    <CardContent>
                        <Typography variant="h5">
                            $ {item}
                        </Typography>
                    </CardContent>

                    <CardActions sx={{ justifyContent: "center" }}>
                        <Button size="small" sx={{ backgroundColor: "button.main", color: "button.contrastText" }}>Ir a producto</Button>
                    </CardActions>
                </Card>
            </Box>
        </Grid>
    );
}
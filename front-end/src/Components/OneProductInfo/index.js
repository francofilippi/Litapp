// IMPORTS REACT
import React from 'react';

// IMPORTS MUI
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function OneProductInfo({ searchValue, oneProductPrices, setHistoricalMode }) {

    return (
        <Paper variant='borderBlackElevatedPaper' sx={{ padding: '24px', height: '100%', maxWidth: '750px' }}>
            <Stack spacing={2} height='100%' width='100%' justifyContent='space-around' alignItems='center'>

                <Typography variant='h7'>{searchValue.productName}</Typography>

                <img
                    loading='lazy'
                    src={searchValue.image}
                    style={{ maxWidth: '250px', aspectRatio: '1/1', borderRadius: '10%' }}
                    alt=''
                />

                {!!oneProductPrices.length &&
                    <Typography variant='h7' textAlign='center'>
                        MÁS ECONÓMICO EN: {oneProductPrices[0].market.toUpperCase()} 🏆
                    </Typography>
                }
                <Button onClick={() => setHistoricalMode(true)}>Ver historico</Button>
                <Divider sx={{ width: '80%' }} />

            </Stack>
        </Paper>
    );
}
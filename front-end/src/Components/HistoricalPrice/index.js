import React from 'react';
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { line } from './GLine';

// IMPORTS MUI
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function HistoricalPrice({ searchValue, setHistoricalMode, historicalPrice }) {

    if (!!historicalPrice.length) {
        var keys = Object.keys(historicalPrice[0]);
    }

    console.log('hola')
    return (
        <Paper variant='borderBlackElevatedPaper' sx={{ padding: '24px', height: '100%', width: '100%', maxWidth: '1000px', placeContent: 'center' }}>
            <Stack spacing={2} height='100%' width='100%' justifyContent='space-around' alignItems='center'>

                <Stack flexDirection='row' sx={{ placeContent: 'center', placeItems: 'center' }}>
                    <Typography variant='body' mr={2}>{searchValue.productName}</Typography>
                    <img
                        loading='lazy'
                        src={searchValue.image}
                        style={{ maxWidth: '50px', aspectRatio: '1/1', borderRadius: '10%' }}
                        alt=''
                    />
                </Stack>

                {!!historicalPrice.length && (
                    <Stack component={Paper} sx={{ flexDirection: 'column', backgroundColor: 'background.storeCard', height: "100%", placeItems: 'center' }} >
                        <div>
                            <Typography variant='body' color='primary.contrastText'>Periodo: 06-2022</Typography>
                        </div>
                        <LineChart width={730} height={250} data={historicalPrice}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            {line(keys)}
                        </LineChart>
                    </Stack>
                )}

                <Button onClick={() => setHistoricalMode(false)}>Volver</Button>
                <Divider sx={{ width: '80%' }} />

            </Stack>
        </Paper>
    )
}

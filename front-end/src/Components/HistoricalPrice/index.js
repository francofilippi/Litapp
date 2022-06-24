import React from 'react';
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { line } from './GLine';

// IMPORTS MUI
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function HistoricalPrice({ searchValue, setHistoricalMode, historicalPrice }) {

    let keys = []
    if (historicalPrice.length > 0) {
        keys = Object.keys(historicalPrice[0]);
    }

    function detectMob() {
        const toMatch = [
            /Android/i,
            /webOS/i,
            /iPhone/i,
            /iPad/i,
            /iPod/i,
            /BlackBerry/i,
            /Windows Phone/i
        ];

        return toMatch.some((toMatchItem) => {
            return navigator.userAgent.match(toMatchItem);
        });

    }

    if (!!detectMob()) {
        toast.info('📱 Volteá el celu !', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }


    return (
        <Paper variant='borderBlackElevatedPaper' sx={{ py: '24px', height: '100%', width: '100%', placeContent: 'center' }}>
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
                    <Stack component={Paper} sx={{ py: '12px', flexDirection: 'column', backgroundColor: 'background.storeCard', width: '100%', height: "100%", maxWidth: '800px', placeItems: 'center' }} >
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
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </Paper>
    )
}

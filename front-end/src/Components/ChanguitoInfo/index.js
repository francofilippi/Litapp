import React from "react";

// IMPORTS MUI
import Divider from '@mui/material/Divider';
import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";

// Table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './table.css'
export default function ChanguitoInfo(props) {

    console.log(props.changuito)
    const handleFullFillChPrices = () => {
        if (props.changuito.length === 0) {
            toast.error('Llena el changuito 🤦‍♀️', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        } else if (props.changuito.length > 5) {
            toast.info('Max. 5 productos, lita se enoja 👎', {
                position: "bottom-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            props.setLoadingChPrices(true)
        }
    }

    return (
        <Paper variant="borderBlackElevatedPaper" sx={{ padding: '24px', width: '100%', maxWidth: '750px', minHeight: '500px' }}>

            <Grid container direction="column" justifyContent="space-around" height="100%">

                {!!props.chPrices.length &&
                    <Grid item textAlign="center">
                        <Typography variant="h7" >CHANGUITO MÁS ECONÓMICO: {props.storeTotals[0].store.toUpperCase()} 🏆</Typography>
                    </Grid>
                }

                <Grid item >
                    <Typography variant="body1" >Tienes {props.changuito.length} productos en tu changuito</Typography>
                </Grid>

                <Grid item xs={7}>
                    <TableContainer component={Paper} sx={{ backgroundColor: 'background.secondaryPaper', height: "100%", width: '100%', maxHeight: '300px' }}>
                        <Table size="small" aria-label="a dense table" className="container">
                            <TableHead >
                                <TableRow>
                                    <TableCell>Productos</TableCell>
                                    {!!props.chPrices.length &&
                                        <>
                                            <TableCell align="center">Precios {props.selectedCh.toUpperCase()} </TableCell>
                                            <TableCell align="center">💲 Menor Precio</TableCell>
                                        </>
                                    }
                                    <TableCell align="center"> </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody >
                                {!!props.loadingChanguito && props.onLoading()}
                                {(!props.changuito.length && !props.loadingChanguito) && props.emptyChanguito()}
                                {(!props.loadingChanguito && props.changuito.length > 0) && props.changuito.map(props.children)}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>

                <Grid item >
                    <Button onClick={handleFullFillChPrices} sx={{ width: '100%', maxWidth: '100%' }} >Armar Changuito</Button>
                </Grid>

                <Grid item >
                    <Divider width='100%' />
                </Grid>
                <ToastContainer />

            </Grid>
        </Paper >
    )
}


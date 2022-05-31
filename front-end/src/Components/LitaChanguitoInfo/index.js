import React from "react";

// IMPORTS MUI
import Divider from '@mui/material/Divider';
import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";

// Table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

//Lógica

export default function LitaChanguitoInfo(props) {

    function createData(name, price) {
        return { name, price };
    }

    const tresProductosTontos = [
        createData('Yerba Común Mañanita 1kg', 359),
        createData('Chocolate Block Cofler 500mg', 250),
        createData('Jugo de Mazana Baggio 1 lt', 120),
    ];

    return (
        <>
            <Grid item xs={12} sx={{ justifyContent: 'center' }}>
                <Paper variant="borderBlackElevatedPaper" sx={{ width: 'auto', height: '50vh', padding: '30px' }}>

                    <Grid container direction="column" justifyContent="space-around" height="100%">

                        <Grid item >
                            <Typography variant="h7" >Tienes {props.chango.length} productos en tu chango</Typography>
                        </Grid>

                        <Grid item xs={7} overflow="hidden" >
                            <TableContainer component={Paper} sx={{ backgroundColor: 'background.secondaryPaper', height: "100%" }}>
                                <Table aria-label="a dense table">
                                    <TableHead >
                                        <TableRow>
                                            <TableCell sx={{ fontSize: 'medium' }}>Productos</TableCell>
                                            <TableCell sx={{ fontSize: 'medium' }} align="center">Precio</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody >
                                        {!props.chango.length ? props.emptyChango() : props.fullFilledChango}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>

                        <Grid item >
                            <Button sx={{ width: '100%' }} >Buscar Precios</Button>
                        </Grid>

                        <Grid item >
                            <Divider width='100%' />
                        </Grid>

                    </Grid>
                </Paper>
            </Grid>
        </ >
    )
}


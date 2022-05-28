import React from "react";

// IMPORTS MUI
import Divider from '@mui/material/Divider';
import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

// Table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

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
            <Grid item xs={12} sm={12} lg={12} sx={{ justifyContent: 'center' }}>
                <Paper variant="borderBlackElevatedPaper" sx={{ width: '500px', height: '500px', maxHeight: '500px', padding: '30px', justifyContent: 'center' }}>
                    <Stack direction="column" justifyContent="space-between" alignItems="space-around" height='100%' >

                        <TableContainer component={Paper} sx={{ backgroundColor: 'background.secondaryPaper', height: '80%' }}>
                            <Table aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Productos</TableCell>
                                        <TableCell align="center">Precio</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {!props.chango.length ? props.emptyChango() : props.fullFilledChango}
                                </TableBody>
                            </Table>
                        </TableContainer>

                        <Button >Buscar Precios</Button>
                        <Divider />

                    </Stack>
                </Paper>
            </Grid>
        </ >
    )
}


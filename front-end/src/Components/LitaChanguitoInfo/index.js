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

export default function LitaChanguitoInfo() {

    function createData(name, calories, fat) {
        return { name, calories, fat };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0),
        createData('Ice cream sandwich', 237, 9.0),
        createData('Eclair', 262, 16.0),
        createData('Cupcake', 305, 3.7),
        createData('Gingerbread', 356, 16.0),
    ];

    return (
        <>
            <Grid item xs={12} sm={12} lg={12}>
                <Paper variant="borderBlackElevatedPaper" sx={{ height: '600px', padding: '10px' }}>
                    <Stack direction="column" spacing={2} height="100%" width="100%" justifyContent="space-around" alignItems="center">
                        <Stack spacing={6} width="100%" justifyContent="space-around" alignItems="center">

                            <div style={{ display: 'flex', width: "100%" }}>
                                <div style={{ flexGrow: 1 }}>
                                    <TableContainer component={Paper}>
                                        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Productos</TableCell>
                                                    <TableCell align="right">Precio</TableCell>
                                                    <TableCell align="right">Eliminar</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {rows.map((row) => (
                                                    <TableRow
                                                        key={row.name}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell component="th" scope="row">
                                                            LALALALA
                                                        </TableCell>
                                                        <TableCell align="right">{row.calories}</TableCell>
                                                        <TableCell align="right">{row.fat}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </div>
                            </div>

                            <Button >Buscar Precios</Button>
                            <Divider sx={{ width: '80%' }} />

                        </Stack>
                    </Stack>
                </Paper>
            </Grid>
        </ >
    )
}


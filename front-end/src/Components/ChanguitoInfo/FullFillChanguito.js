import React from "react";

// Table
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from "@mui/material/Button";
import Delete from "@mui/icons-material/Delete";

export default function FullFillChanguito({ producto, deleteProducto, chPrices }) {

    return (
        <TableRow
            key={producto.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {producto.name}
            </TableCell>
            {!!chPrices.length && (
                <TableCell align="center">{producto.id}</TableCell>
            )}
            <TableCell align="center"><Button onClick={deleteProducto}><Delete /></Button></TableCell>
        </TableRow>
    )
}
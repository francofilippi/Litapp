import React from "react";

import ouchSinProductos from '../../assets/imgs/ouch-sin-productos.svg'

// Table
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export default function EmptyChanguito() {
    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell align="center" colSpan={2}>
                <img src={ouchSinProductos} style={{ width: "auto", height: "100px" }} />
                <br />
                <strong>AGREGA PRODUCTOS AL CHANGUITO!</strong>
            </TableCell>
        </TableRow>
    )
}
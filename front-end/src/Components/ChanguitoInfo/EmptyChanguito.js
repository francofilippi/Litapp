import React from "react";

import ouchSinProductos from '../../assets/imgs/ouch-sin-productos.svg'

// Table
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from "@mui/material/Typography";

export default function EmptyChanguito() {
    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell align="center" colSpan={2} >
                <img src={ouchSinProductos} style={{ height: "6rem", maxWidth: "50%", marginTop: "35px" }} />
                <br />
                <Typography variant='body'>AGREGA PRODUCTOS AL CHANGUITO!</Typography>
            </TableCell>
        </TableRow>
    )
}
import React from "react";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export default function LoadingChanguito() {
    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

        >
            <TableCell align="center" colSpan={3} height="100%">
                <strong>cargando..</strong>
            </TableCell>
        </TableRow>
    )
}
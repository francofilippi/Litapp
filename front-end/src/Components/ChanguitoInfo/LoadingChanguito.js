import React from "react";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import CircularProgress from '@mui/material/CircularProgress';


export default function LoadingChanguito() {
    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

        >
            <TableCell align="center" colSpan={2} style={{ lineHeight: 12.43 }}>
                <CircularProgress color="primary" />
            </TableCell>
        </TableRow>
    )
}
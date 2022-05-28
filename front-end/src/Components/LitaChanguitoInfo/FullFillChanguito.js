import React from "react";

// Table
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export default function FullFillChanguito({ item }) {
    return (
        <TableRow
            key={item.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {item.name}
            </TableCell>
            <TableCell align="center">{item.id}</TableCell>
        </TableRow>
    )
}
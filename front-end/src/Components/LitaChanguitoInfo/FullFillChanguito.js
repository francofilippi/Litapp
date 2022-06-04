import React from "react";

// Table
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from "@mui/material/Button";
import Delete from "@mui/icons-material/Delete";

export default function FullFillChanguito({ item, changuito, setChanguito }) {

    const quitarDelChanguito = (prod) => {
        console.log(prod)
        setChanguito(changuito.filter(producto => producto.id !== prod))
    }

    return (
        <TableRow
            key={item.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {item.name}
            </TableCell>
            <TableCell align="center">{item.id}</TableCell>
            <TableCell align="center"><Button onClick={() => quitarDelChanguito(item.id)}><Delete /></Button></TableCell>
        </TableRow>
    )
}
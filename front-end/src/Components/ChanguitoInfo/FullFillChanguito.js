import React from "react";

// Table
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from "@mui/material/Button";
import Delete from "@mui/icons-material/Delete";

export default function FullFillChanguito({ producto, deleteProducto, totalPrices, lowestPrices, selectedCh }) {

    let mejorPrecio = {}
    lowestPrices.forEach((e) => {
        if (e.producto === producto.productName) {
            mejorPrecio.precio = e.precio
            mejorPrecio.store = e.store
        }
    })


    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {producto.productName}
            </TableCell>
            {!!totalPrices.length &&
                <>
                    {/* <TableCell align="center"> Precios: </TableCell> */}
                    <TableCell align="center"> $ {mejorPrecio.precio} - {mejorPrecio.store.toUpperCase()}</TableCell>
                </>
            }
            <TableCell align="center"><Button onClick={deleteProducto}><Delete /></Button></TableCell>
        </TableRow>
    )
}
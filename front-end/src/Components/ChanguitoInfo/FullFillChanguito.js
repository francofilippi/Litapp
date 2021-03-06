import React from "react";

// Table
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from "@mui/material/IconButton";

import './table.css'

export default function FullFillChanguito({ producto, deleteProducto, chPrices, selectedCh }) {

    let mejorPrecio = null
    let precioSelectedCh = null
    if (!!chPrices.length) {
        mejorPrecio = chPrices.filter(x => x.producto === producto.productName).sort((a, b) => a.precio - b.precio)[0]
        precioSelectedCh = chPrices.filter(x => (x.store === selectedCh) && (x.producto === producto.productName))[0]
    }

    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {producto.productName}
            </TableCell>
            {(mejorPrecio && precioSelectedCh) &&
                <>
                    <TableCell align="center"> $ {precioSelectedCh.precio.toFixed(2)}</TableCell>
                    <TableCell align="center"> $ {mejorPrecio.precio} - {mejorPrecio.store.toUpperCase()}</TableCell>
                </>
            }
            <TableCell align="center" ><IconButton className="btnCont" onClick={() => deleteProducto(producto.productName)}><ClearIcon className="btn" /></IconButton></TableCell>
        </TableRow>
    )
}
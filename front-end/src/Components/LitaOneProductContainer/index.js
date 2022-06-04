import React from "react";

// IMPORTS MUI
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';

export default function LitaOneProductContainer(props) {

    return (
        < Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} justifyContent="center">
                {props.children}
            </Grid>
        </Box >
    );
}
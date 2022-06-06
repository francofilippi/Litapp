import React from "react";

// IMPORTS MUI
import Grid from '@mui/material/Grid';

export default function LitaOneProductContainer(props) {

    return (
        <Grid container spacing={2} justifyContent="center" sx={{ flexGrow: 1, height: '50vh' }}>
            {props.children}
        </Grid>
    );
}
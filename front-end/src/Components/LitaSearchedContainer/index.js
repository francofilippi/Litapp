import React from "react";

// IMPORTS MUI
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';

export default function LitaSearchedContainer({ children }) {

    return (

        <React.Fragment>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {children}
                </Grid>
            </Box >
        </React.Fragment>

    );
}
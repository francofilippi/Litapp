import React from "react";

// IMPORTS MUI
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';

export default function LitaSearchedContainer(props) {

    return (

        <React.Fragment>
            {!!props.value &&
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        {props.children}
                    </Grid>
                </Box >
            }
        </React.Fragment>

    );
}
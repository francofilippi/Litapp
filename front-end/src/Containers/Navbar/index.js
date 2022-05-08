import React from "react"
import { Stack } from "@mui/material";
// import AccountMenu from "./AccountMenu";

export default function Navbar() {
    return (
        <Stack
            direction="row"
            justifyContent="flex-end"
        >
            Account Menu
            {/* <AccountMenu /> */}
        </Stack>
    );
}
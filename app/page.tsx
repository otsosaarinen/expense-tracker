"use client";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function Home() {
    return (
        <>
            <div className="flex h-full flex-col items-center justify-center gap-2">
                <TextField
                    id="outlined-first-name-input"
                    label="First Name"
                    variant="outlined"
                />
                <TextField
                    id="outlined-last-name-input"
                    label="Last Name"
                    variant="outlined"
                />

                <TextField
                    id="outlined-email-input"
                    label="Email"
                    variant="outlined"
                />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    variant="outlined"
                />

                <Button variant="contained">Create account</Button>
            </div>
        </>
    );
}

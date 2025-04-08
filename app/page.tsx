"use client";

import { create_user } from "./expenses/pg_actions/create_user";

import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function Home() {
    // create variables for saving input values
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        create_user({ firstName, lastName, email, password });
    };
    return (
        <>
            <div className="flex h-full flex-col items-center justify-center gap-2">
                <TextField
                    id="outlined-first-name-input"
                    label="First Name"
                    variant="outlined"
                    value={firstName}
                    onChange={(e) => {
                        setFirstName(e.target.value);
                    }}
                />
                <TextField
                    id="outlined-last-name-input"
                    label="Last Name"
                    variant="outlined"
                    value={lastName}
                    onChange={(e) => {
                        setLastName(e.target.value);
                    }}
                />

                <TextField
                    id="outlined-email-input"
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    variant="outlined"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />

                <Button variant="contained" onClick={handleSubmit}>
                    Create user
                </Button>
            </div>
        </>
    );
}

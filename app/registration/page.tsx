"use client";

import Link from "next/link";
import { create_user } from "@/db_actions/create_user";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function Registration() {
    // create variables for saving input values
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // checks if all fields are filled and sends user information to database
    const submitForm = () => {
        if (validateForm()) {
            create_user({ firstName, lastName, email, password });
        }
    };

    // check if user has filled all the fields
    const validateForm = () => {
        return firstName && lastName && email && password;
    };

    return (
        <>
            <div className="flex flex-col gap-2 rounded-xl border-3 border-neutral-800 bg-white p-15 text-neutral-800">
                <div className="mb-10 flex items-center justify-center text-6xl font-bold">
                    Registration
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                    <TextField
                        id="outlined-first-name-input"
                        label="First Name"
                        variant="outlined"
                        value={firstName}
                        onChange={(e) => {
                            setFirstName(e.target.value);
                        }}
                        required
                    />
                    <TextField
                        id="outlined-last-name-input"
                        label="Last Name"
                        variant="outlined"
                        value={lastName}
                        onChange={(e) => {
                            setLastName(e.target.value);
                        }}
                        required
                    />

                    <TextField
                        id="outlined-email-input"
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        required
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
                        required
                    />
                </div>
                <div className="flex items-center justify-center">
                    <Button
                        variant="contained"
                        onClick={submitForm}
                        sx={{
                            color: "oklch(26.9% 0 0)",
                            backgroundColor: "oklch(83.7% 0.128 66.29)",
                            borderColor: "oklch(26.9% 0 0)",
                        }}
                        disabled={!validateForm()}
                    >
                        Register
                    </Button>
                </div>
                <div className="mt-10 flex flex-col items-center justify-center text-xl">
                    Have an account already?
                    <br />
                    <Link className="font-bold underline" href={"/login"}>
                        Click here to login
                    </Link>
                </div>
            </div>
        </>
    );
}

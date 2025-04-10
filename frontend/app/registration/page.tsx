"use client";

import Link from "next/link";
import { create_user } from "@/db_actions/create_user";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import HowToReg from "@mui/icons-material/HowToReg";

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
            <div className="flex flex-col items-center justify-center gap-5">
                <div className="flex flex-col gap-5 rounded-xl border-3 border-neutral-800 bg-white/50 p-15 text-neutral-800 backdrop-blur-xs">
                    <div className="flex items-center justify-center text-6xl font-bold">
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
                        <Button
                            variant="contained"
                            onClick={submitForm}
                            disabled={!validateForm()}
                            color="success"
                            endIcon={<HowToReg />}
                        >
                            Register
                        </Button>
                    </div>

                    <div className="flex flex-col items-center justify-center text-xl">
                        Have an account already?
                        <br />
                        <Link className="font-bold underline" href={"/login"}>
                            Click here to login
                        </Link>
                    </div>
                </div>
                <div>
                    <Link href="/">
                        <Button variant="contained" color="success">
                            back home
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
}

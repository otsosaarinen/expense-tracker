"use client";

import Link from "next/link";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";

import LoginIcon from "@mui/icons-material/Login";

export default function Login() {
    // create variables for saving input values
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validateForm = () => {
        return email && password;
    };
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-3">
                <div className="flex flex-col gap-5 rounded-xl border-3 border-neutral-800 bg-white p-15 text-neutral-800">
                    <div className="flex items-center justify-center text-6xl font-bold">
                        Login
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <TextField
                            label="Email"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            required
                        ></TextField>
                        <TextField
                            label="Password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            required
                        ></TextField>
                        <Button
                            variant="contained"
                            disabled={!validateForm()}
                            color="success"
                            endIcon={<LoginIcon />}
                        >
                            Login
                        </Button>
                    </div>

                    <div className="flex flex-col items-center justify-center text-xl">
                        Don't have an account yet?
                        <br />
                        <Link
                            className="font-bold underline"
                            href={"/registration"}
                        >
                            Click here to register
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

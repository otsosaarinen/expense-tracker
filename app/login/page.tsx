"use client";

import Link from "next/link";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { use, useState } from "react";

export default function Login() {
    // create variables for saving input values
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validateForm = () => {
        return email && password;
    };
    return (
        <>
            <div className="flex flex-col gap-2 text-neutral-800">
                <div className="mb-10 flex items-center justify-center text-6xl font-bold">
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
                </div>
                <div className="flex items-center justify-center">
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            color: "white",
                            backgroundColor: "success.light",
                            borderColor: "success.light",
                        }}
                        disabled={!validateForm()}
                    >
                        Login
                    </Button>
                </div>
                <div className="mt-10 text-xl">
                    Don't have an account yet?{" "}
                    <Link className="underline" href={"/registration"}>
                        Click here to register
                    </Link>
                </div>
            </div>
        </>
    );
}

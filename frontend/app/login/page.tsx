"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";

export default function Login() {
    const router = useRouter();

    // create variables for saving input values
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const checkLogin = async () => {
        if (validateForm()) {
            const body = {
                email_address: email,
                password: password,
            };
            try {
                const response = await fetch("http://localhost:4000/userAuth", {
                    method: "POST",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify(body),
                });

                if (!response.ok) {
                    setError(true);
                } else {
                    router.push("/dashboard");
                }
            } catch (error) {
                setError(true);
                console.log("Error occured while creating an account: ", error);
            }
        }
    };

    // check if user has filled all the fields
    const validateForm = () => {
        return email && password;
    };
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-5">
                <div className="flex flex-col gap-5 rounded-xl border-3 border-neutral-800 bg-white/50 p-15 text-neutral-800 backdrop-blur-xs">
                    <div className="flex items-center justify-center text-6xl font-bold">
                        Login
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <TextField
                            id="outlined-email-input"
                            label="Email"
                            variant="outlined"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            required
                        ></TextField>
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
                        ></TextField>
                        <Button
                            variant="contained"
                            onClick={checkLogin}
                            disabled={!validateForm()}
                            color="success"
                            endIcon={<LoginIcon />}
                        >
                            Login
                        </Button>
                        {error ? (
                            <div className="font-medium text-red-500">
                                Incorrect email or password
                            </div>
                        ) : (
                            ""
                        )}
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

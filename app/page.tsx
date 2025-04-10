"use client";

import { Button } from "@mui/material";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-10 text-neutral-800">
                <div className="gap- flex flex-col items-center justify-center gap-3 text-center">
                    <h1 className="text-6xl font-bold">
                        Welcome to Expense Tracker
                    </h1>
                    <h2 className="text-xl">
                        Here you can track your daily expenses and optimize your
                        spending!
                    </h2>
                </div>
                <div className="flex flex-row gap-3">
                    <Link href="/login">
                        <Button variant="contained" size="large">
                            Login
                        </Button>
                    </Link>
                    <Link href="/registration">
                        <Button variant="contained" size="large">
                            Register
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
}

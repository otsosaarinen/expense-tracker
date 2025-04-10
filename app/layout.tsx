import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import type { Metadata } from "next";
import Link from "next/link";
import { Roboto } from "next/font/google";
import { Button } from "@mui/material";
import "./globals.css";

const roboto = Roboto({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Expense Tracker",
    description: "Track your daily expenses",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`flex h-screen w-screen flex-col items-center justify-center ${roboto.className} antialiased`}
            >
                <AppRouterCacheProvider>
                    <div className="mt-3 flex gap-3">
                        <Link href="/">
                            <Button
                                variant="contained"
                                size="large"
                                color="success"
                            >
                                Home
                            </Button>
                        </Link>
                        <Link href="/dashboard">
                            <Button
                                variant="contained"
                                size="large"
                                color="success"
                            >
                                Dashboard
                            </Button>
                        </Link>
                        <Link href="/expenses">
                            <Button
                                variant="contained"
                                size="large"
                                color="success"
                            >
                                Expenses
                            </Button>
                        </Link>
                    </div>
                    <div className="flex h-full w-full grow items-center justify-center">
                        {children}
                    </div>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}

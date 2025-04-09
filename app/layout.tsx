import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

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
                className={`flex h-screen flex-col ${roboto.className} antialiased`}
            >
                <div className="flex justify-center">
                    Welcome to expense tracker
                </div>
                <div className="grow">{children}</div>
            </body>
        </html>
    );
}

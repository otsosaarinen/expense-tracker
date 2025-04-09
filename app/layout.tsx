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
                className={`flex h-screen w-screen flex-col items-center justify-center bg-orange-100 ${roboto.className} antialiased`}
            >
                <div className="flex w-full items-center justify-center bg-neutral-800 p-3 text-3xl font-medium text-white">
                    Expense Tracker
                </div>
                <div className="flex h-full w-full grow items-center justify-center">
                    {children}
                </div>
            </body>
        </html>
    );
}

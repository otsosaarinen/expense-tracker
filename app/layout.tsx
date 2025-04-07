import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
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
            <body className={`${lexend.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}

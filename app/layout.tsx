import type { Metadata } from "next";
import { Roboto } from "next/font/google";
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
                className={`flex h-screen flex-col ${roboto.className} antialiased`}
            >
                <div className="grow">{children}</div>
            </body>
        </html>
    );
}

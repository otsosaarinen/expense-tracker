import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
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
                className={`flex h-screen w-screen flex-col items-center justify-center ${roboto.className} bg-[url(../public/lines.jpg)] antialiased`}
            >
                <AppRouterCacheProvider>
                    <div className="flex h-full w-full grow items-center justify-center">
                        {children}
                    </div>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}

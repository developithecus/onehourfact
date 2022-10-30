import '../core/globals.css';
import { ReactNode } from 'react';

export default function RootLayout({
    children,
}: {
    children: ReactNode
}) {
    return (
        <html lang="en">
        <head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app"/>
            <link rel="icon" href="/favicon.ico"/>
        </head>
        <body>{children}</body>
        </html>
    );
}

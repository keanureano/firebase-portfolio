import Link from "next/link";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-screen-md px-4 mx-auto">
        <header>
          <nav>
            <Link href="#">Home</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}

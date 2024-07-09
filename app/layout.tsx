import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar/page";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MFA",
  description: "Multi-Factor Authentication Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className="h-screen flex flex-col bg-blue-100 align-middle mt-5 m-auto"> */}
        <NavBar />
        {/* </div> */}
        {children}
        {/* <NavBar /> */}
      </body>
    </html>
  );
}

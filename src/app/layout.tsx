import type { Metadata } from "next";
import {Poppins} from 'next/font/google';

import "./globals.css";

const poppins=Poppins({
  subsets:["latin"],
  variable:'--font-poppins',
  weight:["100","200","300","400","500","600","700","800"]
})

export const metadata: Metadata = {
  title: "CYC Software",
  description: "Web & Mobile Application Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-Sora antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

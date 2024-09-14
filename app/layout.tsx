import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MyType Demo",
  description: "MyType Font Demo Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

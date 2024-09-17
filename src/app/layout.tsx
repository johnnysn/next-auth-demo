import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const interFont = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Auth Demo",
  description: "Next Auth integrated with Spring Auth Server",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interFont.className} antialiased bg-gradient-to-b from-slate-300 to-slate-50`}
      >
        <div className="flex flex-col min-h-screen">
          <header className="h-16 px-2 bg-slate-800 flex items-center text-white">
            Next Auth Demo
          </header>
          <main className="flex-1">{children}</main>
          <footer className="h-10"></footer>
        </div>
      </body>
    </html>
  );
}

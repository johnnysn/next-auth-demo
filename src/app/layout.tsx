import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";

const interFont = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Auth Demo",
  description: "Next Auth integrated with Spring Auth Server",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body
        className={`${interFont.className} antialiased bg-gradient-to-b from-slate-300 to-slate-50`}
      >
        <div className="flex flex-col min-h-screen">
          <header className="h-16 px-2 bg-slate-800 flex justify-between items-center text-white">
            <a href="/" className="font-medium">
              Next Auth Demo
            </a>
            <nav className="flex items-center gap-3">
              {!!session && (
                <>
                  <a href="/profile">Profile</a>
                  <a href="/api/auth/signout">Logout</a>
                </>
              )}
              {!session && <a href="/api/auth/signin">Signin</a>}
            </nav>
          </header>
          <main className="flex-1 py-24 px-2">{children}</main>
          <footer className="h-10"></footer>
        </div>
      </body>
    </html>
  );
}

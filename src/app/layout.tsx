import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LavaLab Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-UncutSansLight">
        <div className="flex min-h-screen bg-white">
          <Sidebar />
          <main className="flex-1 overflow-x-hidden transition-all duration-300 ml-52">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
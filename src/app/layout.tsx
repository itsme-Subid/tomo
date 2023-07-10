import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Tomo",
  description: "Gamifying good deeds and making the world a better place.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className="font-sans relative min-h-screen">
        <Toaster />
        <Header session={session} />
        {children}
        <Footer />
      </body>
    </html>
  );
}

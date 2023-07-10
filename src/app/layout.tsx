import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Tomo -The Social Media to Make World a Better Place",
  description:
    "gamifying social & environmental well-being through a unique social media",
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

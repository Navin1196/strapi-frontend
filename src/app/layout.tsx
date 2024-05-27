import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getGlobalData, getGlobalPageMetadata } from "@/data/loaders";
import { Header } from "@/components/Custom/Header";
import { Footer } from "@/components/Custom/Footer";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const metaData = await getGlobalPageMetadata();
  return {
    title: metaData?.title,
    description: metaData?.description,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalData = await getGlobalData();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header data={globalData.header} />
        <div>{children}</div>
        <Footer data={globalData.footer} />
      </body>
    </html>
  );
}

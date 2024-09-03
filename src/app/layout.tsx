import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ApolloWrapper } from "@/gql/ApolloWrapper";
import Image from 'next/image'
import backgroundImg from '/public/Star_Wars_Logo.svg'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Star Wars Characters Encyclopedia",
  description: "Star Wars Characters Encyclopedia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Image src={backgroundImg} width={500} height={500} alt="Star Wars" className="fixed top-0 left-0 w-full h-full bg-cover -z-10" />
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}

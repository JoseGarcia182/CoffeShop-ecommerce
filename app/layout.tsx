import type { Metadata } from "next";
import {Urbanist} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from 'next-themes';
import { Toaster } from "@/components/ui/sonner"
import NextTopLoader from 'nextjs-toploader';

const urbanist = Urbanist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "CoffeShop e-commerce",
  description: "Welcome to my e-commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${urbanist.variable}antialiased`}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NextTopLoader
            color="#2299DD"
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            template='<div class="bar" role="bar"><div class="peg"></div></div> 
            <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
            zIndex={1600}
            showAtBottom={false}
            initialPosition={0.08}
/>
        <Navbar />
        {children}
        <Toaster />
        <Footer />
          </ThemeProvider>
      </body>
    </html>
  );
}

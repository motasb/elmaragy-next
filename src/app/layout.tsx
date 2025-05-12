import type { Metadata } from "next";
import { Geist, IBM_Plex_Sans, Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FloatingContact from "@/components/FloatingContact";
import Footer from "@/components/Footer";
import { keywords } from "@/lib/constants";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const ibmPlex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-ibm',
});

const rubik = Rubik({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-rubik',
});

const urlForWeb = process.env.URL_FOR_WEB;

export const metadata: Metadata = {
  metadataBase: new URL(urlForWeb!),
  title: "El-Maragy Academy",
  description:
    "El-Maragy Academy is an Islamic education platform offering online courses in Quran, Tajweed, Arabic language, and Islamic studies.",
  keywords: keywords,
  authors: [{ name: "El-Maragy Academy", url: urlForWeb }],
  creator: "El-Maragy Academy",
  publisher: "El-Maragy Academy",

  alternates: {
    canonical: urlForWeb,
  },

  openGraph: {
    title: "El-Maragy Academy",
    description:
      "Learn Quran, Tajweed, Arabic Language and Islamic Studies online at El-Maragy Academy.",
    url: urlForWeb,
    siteName: "El-Maragy Academy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/logo.webp", 
        width: 1200,
        height: 630,
        alt: "El-Maragy Academy Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "El-Maragy Academy",
    description:
      "Join El-Maragy Academy and explore online Islamic education in Quran, Tajweed, Arabic and more.",
    images: ["/images/logo.webp"],
  },

  category: "education",
};

export const revalidate = 86400;


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${ibmPlex.variable} ${rubik.variable} antialiased `}
      >
      <ToastContainer theme="colored" position="top-center"/>
        <Navbar/>
        <main className="pt-[82] ">
          {children}
        </main>
        <FloatingContact/>
        <Footer/>
      </body>
    </html>
  );
}

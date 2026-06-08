import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EcoPulse AI | Carbon Footprint Awareness Platform",
  description:
    "Track carbon emissions, analyze sustainability trends, earn eco scores, set goals, and build greener habits with EcoPulse AI.",
  keywords: [
    "Carbon Footprint",
    "Sustainability",
    "Climate Change",
    "Green Energy",
    "Eco Score",
    "Environmental Impact",
    "Carbon Calculator",
    "EcoPulse AI",
  ],
  authors: [
    {
      name: "EcoPulse AI",
    },
  ],
  creator: "EcoPulse AI",
  openGraph: {
    title:
      "EcoPulse AI | Carbon Footprint Awareness Platform",
    description:
      "Monitor emissions, improve sustainability, and achieve your eco goals with AI-powered insights.",
    siteName: "EcoPulse AI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        {children}
      </body>
    </html>
  );
}
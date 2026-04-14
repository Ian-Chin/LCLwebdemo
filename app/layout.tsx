import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LCL Auto Service | Trusted Auto Care in Ipoh",
  description:
    "Professional car servicing, repair, and maintenance in Ipoh, Perak. Trusted by hundreds of vehicle owners for quality workmanship and honest pricing.",
  keywords: [
    "car service ipoh",
    "auto repair ipoh",
    "car workshop ipoh",
    "LCL Auto Service",
    "car maintenance perak",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable}`}
      suppressHydrationWarning
    >
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Crown De Balon — Premium Barbershop · Toronto",
  description:
    "Crown De Balon is Toronto's premier barbershop. Premium cuts, clean fades & beard trims. Walk-ins welcome. Call 437-696-2005.",
  keywords: [
    "barbershop Toronto",
    "Crown De Balon",
    "haircut Toronto",
    "fade cut",
    "beard trim Toronto",
  ],
  openGraph: {
    title: "Crown De Balon — Premium Barbershop",
    description: "Premium Cuts. Clean Style. Confidence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-dark text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

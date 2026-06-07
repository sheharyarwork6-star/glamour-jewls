import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Glamour Jewels | Elegance That Shines With You",
  description: "Discover premium, elegant, and modern luxury jewelry designed to enhance your beauty and confidence. Shop our exclusive collections or order custom designs directly via WhatsApp.",
  keywords: ["Glamour Jewels", "luxury jewelry", "women's jewelry", "diamonds", "rose gold necklace", "solitaire engagement ring", "pearl earrings", "WhatsApp jewelry shopping"],
  authors: [{ name: "Glamour Jewels" }],
  openGraph: {
    title: "Glamour Jewels | Elegance That Shines With You",
    description: "Discover premium, elegant, and modern luxury jewelry designed to enhance your beauty and confidence.",
    url: "https://glamourjewels.com",
    siteName: "Glamour Jewels",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Glamour Jewels | Elegance That Shines With You",
    description: "Discover premium, elegant, and modern luxury jewelry designed to enhance your beauty and confidence.",
  },
  icons: {
    icon: "/favicon.ico",
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
      className={`${playfair.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-bg text-brand-dark">
        {children}
      </body>
    </html>
  );
}

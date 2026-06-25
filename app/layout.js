import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/languageContext"; 


const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  metadataBase: new URL("https://jtechdigital.id"),

  title: "J-Tech Digital | Software House Bandung – Custom ERP & Business System Development",
  description:
    "J-Tech Digital adalah software house di Bandung yang spesialis dalam pembuatan sistem ERP custom, aplikasi web bisnis, dan solusi digital terintegrasi. Dipercaya 100+ klien UMKM & Enterprise Indonesia.",

  keywords: [
    // Tier 1 — Lokal + Brand
    "J-Tech Digital",
    "software house Bandung",
    "software house Indonesia",
    "jasa pembuatan software Bandung",

    // Tier 1 — ERP & Business System
    "jasa pembuatan ERP",
    "custom ERP Indonesia",
    "sistem manajemen bisnis custom",
    "ERP UMKM Indonesia",

    // Tier 2 — Long tail
    "jasa pembuatan aplikasi web Bandung",
    "sistem inventory custom",
    "pembuatan aplikasi bisnis",
    "software house terpercaya Indonesia",

    // English keywords
    "custom ERP development Indonesia",
    "software house Bandung Indonesia",
    "business system development",
    "web application development Indonesia",
  ],

  authors: [{ name: "J-Tech Digital" }],
  creator: "J-Tech Digital",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/icon-jtech.png",
    apple: "/icon-jtech.png",
  },

  openGraph: {
    title: "J-Tech Digital | Software House Bandung – Custom ERP & Business System Development",
    description:
      "Spesialis pembuatan sistem ERP custom, aplikasi web bisnis, dan solusi digital terintegrasi untuk UMKM & Enterprise Indonesia.",
    url: "https://jtechdigital.id",
    siteName: "J-Tech Digital",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "J-Tech Digital - Software House Bandung" }],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "J-Tech Digital | Software House Bandung",
    description: "Custom ERP & Business System Development. Solusi digital terintegrasi untuk bisnis Indonesia.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${outfit.className} ${ovo.className} antialiased`}>
        <LanguageProvider> 
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
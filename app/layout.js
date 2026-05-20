import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

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
  title: "J-Tech Digital | Integrated Digital Solutions & AI Expertise",
  description: "J-Tech Digital is a leading software house in Indonesia, specializing in integrated digital solutions and AI chatbot development. We empower businesses with innovative technology to drive growth and efficiency.",
  keywords: [
    "J-Tech Digital", 
    "Software House Indonesia", 
    "Software House Bandung", 
    "AI Chatbot Solutions", 
    "ERP Custom Indonesia",
    "Web Development Bandung"
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
    title: "J-Tech Digital | Elevating Business Through Technology",
    description: "Digital solutions for your business. We specialize in AI chatbot development and integrated digital solutions to help your business thrive in the digital age.",
    url: "https://jtechdigital.id",
    siteName: "J-Tech Digital",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "J-Tech Digital - Elevating Business", 
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "J-Tech Digital | Elevating Business Through Technology",
    description: "Integrated digital solutions for your business. We specialize in AI chatbot development and custom systems.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id"> 
      <body
        className={`${outfit.className} ${ovo.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
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

// app/layout.js atau app/page.js
export const metadata = {
  title: "J-Tech Digital | Integrated Digital Solutions & AI Expertise",
  description: "J-Tech Digital is a leading software house in Indonesia, specializing in integrated digital solutions and AI chatbot development. We empower businesses with innovative technology to drive growth and efficiency.",
  keywords: ["J-Tech Digital", "Software House Indonesia", "AI Chatbot Solutions", "Web Development Bandung"],
  icons: {
    icon: "/J-Tech Digital Logo.png", 
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
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} ${ovo.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

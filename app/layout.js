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
  description: "J-Tech Digital menyediakan solusi IT kustom mulai dari Full-Stack Web (Laravel, Vue.js), Mobile Apps (Flutter), hingga integrasi AI dan IoT.",
  keywords: ["J-Tech Digital", "Software House Indonesia", "Laravel Developer", "AI Chatbot Solutions", "Web Development Jakarta"],
  openGraph: {
    title: "J-Tech Digital | Elevating Business Through Technology",
    description: "Solusi digital terintegrasi untuk bisnis modern.",
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

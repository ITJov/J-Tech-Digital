"use client";

import { createContext, useContext, useState } from "react";

const translations = {
    id: {
    nav: {
        home: "Beranda", about: "Tentang", services: "Layanan",
        portfolio: "Portofolio", contact: "Kontak",
    },
    header: {
        title1: "Wujudkan Sistem Bisnis",
        title2: "yang Efisien &",
        title3: "Terintegrasi.",
        subtitle: "J-Tech Digital adalah software house Bandung yang spesialis membangun sistem ERP custom, aplikasi web bisnis, dan solusi digital sesuai kebutuhan spesifik perusahaan Anda.",
        cta: "Konsultasi Gratis",
        contact1: "Hubungi",
        contact2: "Kami",
        panelSubtitle: "Terhubung dengan tim kami",
        instagram: "Instagram Resmi",
        email: "Email Resmi",
        whatsapp: "Respon Cepat",
        actionChat: "Chat",
        actionSend: "Kirim",
    },
    about: {
        title: "Mengapa Bermitra Dengan Kami?",
        subtitle: "Kami menghadirkan perpaduan unik antara keahlian industri dan keunggulan teknis untuk memastikan kesuksesan proyek Anda sejak hari pertama.",
        f1Title: "Visi Strategis",
        f1Desc: "Kami menyelaraskan eksekusi dengan tujuan bisnis Anda untuk memastikan kesuksesan jangka panjang yang berkelanjutan.",
        f2Title: "Desain Inovatif",
        f2Desc: "Pendekatan design thinking kami memastikan solusi tidak hanya fungsional, tetapi dirancang secara intuitif.",
        f3Title: "Eksekusi Kolaboratif",
        f3Desc: "Kami bertindak sebagai perpanjangan tim Anda, menjaga komunikasi transparan di setiap langkah.",
        f4Title: "Hasil Terukur",
        f4Desc: "Setiap fitur dikaitkan dengan indikator kinerja utama untuk memastikan return on investment yang terverifikasi.",
    },
    services: {
        title: "Dibangun untuk Tantangan Ini",
        subtitle: "Saat meninjau kebutuhan Anda, kami melihat peluang untuk memanfaatkan kekuatan inti kami. Pendekatan kami meminimalkan risiko sekaligus memaksimalkan kecepatan.",
        point1: "Rekam jejak terbukti di lingkup dan industri serupa",
        point2: "Sumber daya dedicated selama durasi proyek",
        point3: "Pelaporan transparan dan tinjauan milestone berkala",
        point4: "Dukungan pasca peluncuran aplikasi dan optimasi berkelanjutan",
        badge: "Tingkat Penyelesaian Proyek Tepat Waktu",
    },
    order: {
        title: "Siap Membawa Kejelasan pada Sistem Bisnis Anda?",
        subtitle: "Jika Anda mencari satu sistem dengan proses yang lebih efisien dan data yang jelas untuk mendukung keputusan lebih baik, mari bicara.",
        cta: "Minta Konsultasi Gratis",
    },
    footer: {
        tagline: "Meningkatkan Bisnis Melalui Solusi Digital Terintegrasi.",
        cta: "Siap berinovasi?",
        rights: "Semua hak dilindungi.",
        about: "Tentang",
        services: "Layanan",
        contact: "Kontak",
    },
},
    en: {
    nav: {
        home: "Home", about: "About", services: "Services",
        portfolio: "Portfolio", contact: "Contact",
    },
    header: {
        title1: "Build Efficient Business",
        title2: "Systems that",
        title3: "Actually Work.",
        subtitle: "J-Tech Digital is a Bandung based software house specializing in custom ERP development, web applications, and integrated digital solutions to your business.",
        cta: "Free Consultation",
        contact1: "Get",
        contact2: "Contact",
        panelSubtitle: "Connect with our team",
        instagram: "Official Instagram",
        email: "Official Email",
        whatsapp: "Fast Response",
        actionChat: "Chat",
        actionSend: "Send",
    },
    about: {
        title: "Why Partner With Us?",
        subtitle: "We bring a unique blend of industry expertise and technical excellence to ensure your project's success from day one.",
        f1Title: "Strategic Vision",
        f1Desc: "We align our execution with your business objectives to ensure sustainable, long-term success.",
        f2Title: "Innovative Design",
        f2Desc: "Our design thinking approach ensures solutions are not just functional, but intuitively crafted.",
        f3Title: "Collaborative Execution",
        f3Desc: "We act as an extension of your team, maintaining transparent communication at every step.",
        f4Title: "Measurable Outcomes",
        f4Desc: "Every feature is tied to key performance indicators to ensure verifiable return on investment.",
    },
    services: {
        title: "Built for This Challenge",
        subtitle: "When reviewing your requirements, we recognized an opportunity to leverage our core strengths. Our approach minimizes risk while maximizing velocity.",
        point1: "Proven track record in similar scopes and industries",
        point2: "Dedicated resources committed for the duration of the project",
        point3: "Transparent reporting and regular milestone reviews",
        point4: "Post-launch support and continuous optimization",
        badge: "On Time Project Delivery Rate",
    },
    order: {
        title: "Ready to Bring Clarity to Your Business Systems?",
        subtitle: "If you are looking for one system with streamlined processes and clear data to support better decisions, let's talk.",
        cta: "Request Free Consultation",
    },
    footer: {
        tagline: "Elevating Business Through Integrated Digital Solutions.",
        cta: "Ready to innovate?",
        rights: "All rights reserved.",
        about: "About",
        services: "Services",
        contact: "Contact",
    },
  },
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("id");

  const t = (key) => {
    // key format: "nav.home"
    const keys = key.split(".");
    let result = translations[lang];
    for (const k of keys) {
      result = result?.[k];
    }
    return result || key;
  };

  const toggleLang = () => setLang((prev) => (prev === "id" ? "en" : "id"));

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
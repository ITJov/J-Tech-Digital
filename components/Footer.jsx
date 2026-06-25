import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/context/languageContext"; 

const Footer = () => {
    const { t } = useLanguage(); 

    return (
        <footer className="bg-slate-950 text-white py-12 px-[10%] border-t border-slate-900">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Logo / Brand */}
                <div className="text-center md:text-left">
                    <h1 className="font-bold text-2xl tracking-tight text-white">
                        J-Tech<span className="text-blue-600">Digital</span>
                    </h1>
                    <p className="text-sm text-slate-400 mt-2 max-w-xs">
                        {t("footer.tagline")}
                    </p>
                </div>

                {/* Social Media */}
                <div className="flex flex-col items-center md:items-end gap-4">
                    <div className="flex gap-6 text-2xl">
                        <a href="https://instagram.com/jtechdigital.id" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors"><FaInstagram /></a>
                        <a href="https://www.linkedin.com/in/cherno-salwa-joviansyah-71b496340/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors"><FaLinkedin /></a>
                        <a href="https://github.com/ITJov" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors"><FaGithub /></a>
                        <a href="https://wa.me/6281910023976" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors"><FaWhatsapp /></a>
                    </div>
                    <p className="text-xs text-slate-500 font-mono uppercase tracking-widest">
                        {t("footer.cta")}
                    </p>
                </div>
            </div>

            <hr className="my-8 border-slate-900" />

            {/* Bottom Note */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                <p>&copy; {new Date().getFullYear()} J-Tech Digital. {t("footer.rights")}</p>
                <div className="flex gap-6">
                    <a href="#about" className="hover:text-white transition">{t("footer.about")}</a>
                    <a href="#services" className="hover:text-white transition">{t("footer.services")}</a>
                    <a href="#order" className="hover:text-white transition">{t("footer.contact")}</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
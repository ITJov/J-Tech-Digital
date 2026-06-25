"use client";

import React, { useState } from "react";
import { FaComments, FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { useLanguage } from "@/context/languageContext"; 

/* ================= MOTION VARIANTS ================= */
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } };
const itemUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } };
const buttonPop = { hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } } };

const Header = () => {
    const [open, setOpen] = useState(false);
    const { t } = useLanguage(); 

    return (
        <header className="relative min-h-screen overflow-hidden">
            <video
                poster="/hero-thumbnail.jpg"
                className="absolute inset-0 w-full h-full object-cover -z-10"
                autoPlay loop muted playsInline
                title="J-Tech Digital Technology Background"
            >
                <source src="hero-bg.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-blue-950/80 to-slate-900/90 -z-10" />

            <div className="relative z-10 min-h-[85vh] lg:min-h-screen flex items-center px-6 md:px-[12%]">
                <motion.div variants={container} initial="hidden" animate="show" className="max-w-5xl lg:mt-10">

                    {/* HERO TITLE */}
                    <motion.h1 variants={itemUp} className="text-white font-extrabold leading-tight text-[clamp(2.5rem,5vw,4.5rem)]">
                        <span className="text-blue-500">{t("header.title1")}</span> <br />
                        {t("header.title2")} <br />
                        {t("header.title3")}
                    </motion.h1>

                    {/* HERO SUBTITLE */}
                    <motion.p variants={itemUp} className="mt-8 max-w-3xl text-gray-300 leading-relaxed text-[clamp(1.1rem,1.8vw,1.4rem)]">
                        {t("header.subtitle")}
                    </motion.p>

                    {/* CTA */}
                    <motion.div variants={buttonPop} className="mt-10 flex gap-4">
                        <button
                            onClick={() => window.open("https://wa.me/6281910023976?text=Halo%20J-Tech%20Digital,%20saya%20tertarik%20untuk%20memulai%20proyek...", "_blank")}
                            className="flex items-center gap-2 rounded-full px-8 py-4 bg-blue-600 hover:bg-blue-700 transition-all text-white font-semibold shadow-lg shadow-blue-900/20"
                        >
                            {t("header.cta")}
                            <Image src={assets.right_arrow_white} alt="Right Arrow" className="w-5" />
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            {/* STICKY CONTACT BUTTON */}
            <motion.button
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
                onClick={() => setOpen(true)}
                className="fixed top-1/2 right-0 z-50 bg-blue-600 text-white px-4 py-4 rounded-l-2xl shadow-2xl hover:bg-blue-700 transition-transform hover:scale-105 -translate-y-1/2"
            >
                <div className="flex flex-col items-center text-xs font-bold uppercase tracking-wider">
                    <FaComments className="text-lg mb-2" />
                    <span>{t("header.contact1")}</span>
                    <span>{t("header.contact2")}</span>
                </div>
            </motion.button>

            {/* SLIDEOUT PANEL */}
            <AnimatePresence>
                {open && (
                    <>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} className="fixed inset-0 bg-slate-900 z-40" />
                        <motion.div
                            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed top-0 right-0 z-50 h-full w-full max-w-[380px] bg-slate-50 shadow-2xl p-8"
                        >
                            <div className="flex justify-between items-center mb-10">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900">J-Tech Digital</h3>
                                    <p className="text-blue-600 text-sm font-medium">{t("header.panelSubtitle")}</p>
                                </div>
                                <button onClick={() => setOpen(false)} className="text-slate-400 hover:text-slate-900 p-2 transition-colors">✕</button>
                            </div>

                            <div className="space-y-5">
                                <ContactItem icon={<FaInstagram />} title={t("header.instagram")} desc="Chat via Instagram DM" action={t("header.actionChat")} href="https://www.instagram.com/jtechdigital.id/" />
                                <ContactItem icon={<FaEnvelope />} title={t("header.email")} desc="jtechnodigital@gmail.com" action={t("header.actionSend")} href="mailto:jtechnodigital@gmail.com" />
                                <ContactItem icon={<FaWhatsapp />} title={t("header.whatsapp")} desc="Chat via WhatsApp" action={t("header.actionChat")} href="https://wa.me/6281910023976" />
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;

const ContactItem = ({ icon, title, desc, action, href }) => (
    <motion.div whileHover={{ y: -2 }} className="flex items-center gap-4 border border-slate-200 bg-white rounded-2xl p-5 hover:border-blue-300 hover:shadow-md transition-all">
        <div className="text-blue-600 text-2xl shrink-0 p-3 bg-blue-50 rounded-xl">{icon}</div>
        <div className="flex flex-col flex-1 min-w-0">
            <p className="font-bold text-slate-800 leading-tight">{title}</p>
            <p className="text-xs text-slate-500 mt-1 truncate">{desc}</p>
        </div>
        <a href={href} className="bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-blue-600 transition-colors">{action}</a>
    </motion.div>
);
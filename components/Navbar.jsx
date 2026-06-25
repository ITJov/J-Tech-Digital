"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { useLanguage } from "@/context/languageContext"; 

const Navbar = () => {
    const [openDesktop, setOpenDesktop] = useState(true);
    const [openMobile, setOpenMobile] = useState(false);
    const { lang, toggleLang, t } = useLanguage(); 

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const sections = ["top", "about", "services", "order", "contact"];
            let current = "top";

            for (let id of sections) {
                const el = document.getElementById(id);
                if (el && scrollY >= el.offsetTop - 120) {
                    current = id;
                }
            }

            document.querySelectorAll("nav a[data-link]").forEach((a) => {
                const href = a.getAttribute("href")?.replace("#", "");
                a.classList.toggle("text-blue-600", href === current);
                a.classList.toggle("text-gray-500", href !== current);
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav className="fixed w-full z-50 bg-white/85 backdrop-blur px-6 xl:px-[8%] py-3 flex items-center border-b border-gray-100" role="navigation">
                {/* LOGO */}
                <div className="font-bold text-xl tracking-tight text-slate-900">
                    J-Tech<span className="text-blue-600">Digital</span>
                </div>

                {/* DESKTOP MENU */}
                <div className="hidden lg:flex flex-1 justify-end items-center gap-3">
                    <div
                        className={`
                            overflow-hidden transition-all duration-500 ease-in-out
                            ${openDesktop ? "max-w-[1000px] opacity-100" : "max-w-0 opacity-0"}
                        `}
                    >
                        <div className="flex items-center gap-6 bg-white/60 rounded-full px-10 py-3 shadow-sm border border-gray-100">
                            <ul className="flex items-center gap-8 font-medium">
                                <li><a data-link href="#top" className="text-gray-500 hover:text-blue-600 transition">{t("nav.home")}</a></li>
                                <li><a data-link href="#about" className="text-gray-500 hover:text-blue-600 transition">{t("nav.about")}</a></li>
                                <li><a data-link href="#services" className="text-gray-500 hover:text-blue-600 transition">{t("nav.services")}</a></li>
                                <li><a data-link href="#order" className="text-gray-500 hover:text-blue-600 transition">{t("nav.contact")}</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* ← TOMBOL GANTI BAHASA */}
                    <button
                        onClick={toggleLang}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-gray-200 text-sm font-medium hover:bg-gray-50 transition"
                    >
                        {lang === "id" ? "🇬🇧 EN" : "🇮🇩 ID"}
                    </button>

                    {/* DESKTOP HAMBURGER */}
                    <button
                        onClick={() => setOpenDesktop(!openDesktop)}
                        aria-label="Toggle Desktop Menu"
                        className="p-2 hover:bg-gray-100 rounded-full transition"
                    >
                        <Image src={assets.menu_black} alt="Menu" className="w-6" />
                    </button>
                </div>

                {/* MOBILE: tombol bahasa + hamburger */}
                <div className="lg:hidden ml-auto flex items-center gap-2">
                    {/* ← TOMBOL BAHASA MOBILE — selalu visible */}
                    <button
                        onClick={toggleLang}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-gray-200 text-sm font-medium hover:bg-gray-50 transition"
                    >
                        {lang === "id" ? "🇬🇧 EN" : "🇮🇩 ID"}
                    </button>

                    {/* HAMBURGER */}
                    <button
                        onClick={() => setOpenMobile(true)}
                        aria-label="Open Mobile Menu"
                        className="p-2"
                    >
                        <Image src={assets.menu_black} alt="Menu" className="w-6" />
                    </button>
                </div>
            </nav>

            {/* MOBILE SIDEBAR */}
            <div className={`fixed inset-0 z-40 lg:hidden ${openMobile ? "pointer-events-auto" : "pointer-events-none"}`}>
                <div
                    onClick={() => setOpenMobile(false)}
                    className={`absolute inset-0 bg-slate-900/40 transition-opacity ${openMobile ? "opacity-100" : "opacity-0"}`}
                />
                <div
                    className={`
                        absolute right-0 top-0 h-full w-72 bg-white shadow-2xl
                        transform transition-transform duration-500 ease-in-out
                        ${openMobile ? "translate-x-0" : "translate-x-full"}
                    `}
                >
                    <button onClick={() => setOpenMobile(false)} className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900">✕</button>

                    {/* ← TOMBOL GANTI BAHASA DI MOBILE */}
                    <div className="absolute top-6 left-6">
                        <button
                            onClick={toggleLang}
                            className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-gray-200 text-sm font-medium"
                        >
                            {lang === "id" ? "🇬🇧 EN" : "🇮🇩 ID"}
                        </button>
                    </div>

                    <ul className="flex flex-col gap-6 px-10 py-24 font-semibold text-slate-800">
                        <li><a onClick={() => setOpenMobile(false)} href="#top">{t("nav.home")}</a></li>
                        <li><a onClick={() => setOpenMobile(false)} href="#about">{t("nav.about")}</a></li>
                        <li><a onClick={() => setOpenMobile(false)} href="#services">{t("nav.services")}</a></li>
                        <li><a onClick={() => setOpenMobile(false)} href="#portfolio">{t("nav.portfolio")}</a></li>
                        <li><a onClick={() => setOpenMobile(false)} href="#contact">{t("nav.contact")}</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;
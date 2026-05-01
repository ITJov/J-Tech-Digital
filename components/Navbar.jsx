"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Navbar = () => {
    const [openDesktop, setOpenDesktop] = useState(true);
    const [openMobile, setOpenMobile] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const sections = ["top", "about", "services", "portfolio", "contact"];
            let current = "top";

            for (let id of sections) {
                const el = document.getElementById(id);
                if (el && scrollY >= el.offsetTop - 120) {
                    current = id;
                }
            }

            document.querySelectorAll("nav a[data-link]").forEach((a) => {
                const href = a.getAttribute("href")?.replace("#", "");
                // Mengubah warna indikator aktif menjadi biru agar sesuai branding baru J-Tech
                a.classList.toggle("text-blue-600", href === current);
                a.classList.toggle("text-gray-500", href !== current);
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* ================= NAVBAR ================= */}
            <nav className="fixed w-full z-50 bg-white/85 backdrop-blur px-6 xl:px-[8%] py-3 flex items-center border-b border-gray-100" role="navigation">                {/* LOGO */}
                <div className="font-bold text-xl tracking-tight text-slate-900">
                    J-Tech<span className="text-blue-600">Digital</span>
                </div>

                {/* ================= DESKTOP MENU ================= */}
                <div className="hidden lg:flex flex-1 justify-end items-center">
                    {/* COLLAPSIBLE MENU */}
                    <div
                        className={`
                            overflow-hidden transition-all duration-500 ease-in-out
                            ${openDesktop ? "max-w-[1000px] opacity-100" : "max-w-0 opacity-0"}
                        `}
                    >
                        <div className="flex items-center gap-6 bg-white/60 rounded-full px-10 py-3 shadow-sm border border-gray-100">
                            <ul className="flex items-center gap-8 font-medium">
                                <li><a data-link href="#top" className="text-gray-500 hover:text-blue-600 transition">Home</a></li>
                                <li><a data-link href="#about" className="text-gray-500 hover:text-blue-600 transition">About</a></li>
                                <li><a data-link href="#services" className="text-gray-500 hover:text-blue-600 transition">Services</a></li>
                                <li><a data-link href="#portfolio" className="text-gray-500 hover:text-blue-600 transition">Portfolio</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* DESKTOP HAMBURGER */}
                    <button
                        onClick={() => setOpenDesktop(!openDesktop)}
                        aria-label="Toggle Desktop Menu"
                        className="ml-4 p-2 hover:bg-gray-100 rounded-full transition"
                    >
                        <Image src={assets.menu_black} alt="J-Tech Digital Menu" className="w-6" />
                    </button>
                </div>

                {/* ================= MOBILE HAMBURGER ================= */}
                <button
                    onClick={() => setOpenMobile(true)}
                    aria-label="Open Mobile Menu"
                    className="lg:hidden ml-auto p-2"
                >
                    <Image src={assets.menu_black} alt="J-Tech Digital Menu" className="w-6" />
                </button>
            </nav>

            {/* ================= MOBILE SIDEBAR ================= */}
            <div
                className={`
                    fixed inset-0 z-40 lg:hidden
                    ${openMobile ? "pointer-events-auto" : "pointer-events-none"}
                `}
            >
                {/* OVERLAY */}
                <div
                    onClick={() => setOpenMobile(false)}
                    className={`
                        absolute inset-0 bg-slate-900/40 transition-opacity
                        ${openMobile ? "opacity-100" : "opacity-0"}
                    `}
                />

                {/* SIDEBAR */}
                <div
                    className={`
                        absolute right-0 top-0 h-full w-72 bg-white shadow-2xl
                        transform transition-transform duration-500 ease-in-out
                        ${openMobile ? "translate-x-0" : "translate-x-full"}
                    `}
                >
                    <button
                        onClick={() => setOpenMobile(false)}
                        className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900"
                    >
                        ✕
                    </button>

                    <ul className="flex flex-col gap-6 px-10 py-24 font-semibold text-slate-800">
                        <li><a onClick={() => setOpenMobile(false)} href="#top">Home</a></li>
                        <li><a onClick={() => setOpenMobile(false)} href="#about">About</a></li>
                        <li><a onClick={() => setOpenMobile(false)} href="#services">Services</a></li>
                        <li><a onClick={() => setOpenMobile(false)} href="#portfolio">Portfolio</a></li>
                        <li><a onClick={() => setOpenMobile(false)} href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;
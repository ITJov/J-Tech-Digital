import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { assets } from "@/assets/assets";

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-white py-12 px-[10%] border-t border-slate-900">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Logo / Brand */}
                <div className="text-center md:text-left">
                    <h1 className="font-bold text-2xl tracking-tight text-white">
                        J-Tech<span className="text-blue-600">Digital</span>
                    </h1>
                    <p className="text-sm text-slate-400 mt-2 max-w-xs">
                        Elevating Business Through Integrated Digital Solutions.
                    </p>
                </div>

                {/* Social Media & Contact Quick Links */}
                <div className="flex flex-col items-center md:items-end gap-4">
                    <div className="flex gap-6 text-2xl">
                        <a
                            href="https://instagram.com/jtechdigital.id"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500 transition-colors"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/cherno-salwa-joviansyah-71b496340/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Follow J-Tech Digital on Instagram"
                            className="hover:text-blue-500 transition-colors"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://github.com/ITJov"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500 transition-colors"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://wa.me/6281910023976"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-green-500 transition-colors"
                        >
                            <FaWhatsapp />
                        </a>
                    </div>
                    <p className="text-xs text-slate-500 font-mono uppercase tracking-widest">
                        Ready to innovate?
                    </p>
                </div>
            </div>

            <hr className="my-8 border-slate-900" />

            {/* Bottom Note */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                <p>
                    &copy; {new Date().getFullYear()} J-Tech Digital. All rights reserved.
                </p>
                <div className="flex gap-6">
                    <a href="#about" className="hover:text-white transition">About</a>
                    <a href="#services" className="hover:text-white transition">Services</a>
                    <a href="#portfolio" className="hover:text-white transition">Portfolio</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
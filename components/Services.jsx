"use client";

import React from "react";
import { motion } from "framer-motion";
// 1. UBAH DARI LuCheckCircle2 MENJADI LuCircleCheck SESUAI REKOMENDASI COMPILER
import { LuCircleCheck } from "react-icons/lu";

const BuiltForChallenge = () => {
    const challengesPoints = [
        "Proven track record in similar scopes and industries",
        "Dedicated resources committed for the duration of the project",
        "Transparent reporting and regular milestone reviews",
        "Post-launch support and continuous optimization"
    ];

    return (
        <section 
            id="services" 
            className="w-full px-[5%] md:px-[10%] py-24 bg-white dark:bg-slate-950 scroll-mt-20 transition-colors overflow-hidden"
            aria-labelledby="services-title"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                
                {/* Kolom Kiri: Konten Teks & Poin Keunggulan */}
                <div className="lg:col-span-6 flex flex-col justify-center">
                    <motion.h2
                        id="services-title"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight"
                    >
                        Built for This Challenge
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8"
                    >
                        When reviewing your requirements, we recognized an opportunity to leverage our core strengths. 
                        Our approach minimizes risk while maximizing velocity, ensuring you see tangible results faster.
                    </motion.p>

                    {/* List Poin Berurutan */}
                    <div className="space-y-4">
                        {challengesPoints.map((point, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 + 0.2 }}
                                className="flex items-start gap-4 group"
                            >
                                {/* 2. UBAH NAMA KOMPONEN DI SINI JUGA */}
                                <div className="text-blue-600 dark:text-blue-400 text-xl mt-1 flex-shrink-0 transition-transform group-hover:scale-110">
                                    <LuCircleCheck aria-hidden="true" />
                                </div>
                                <span className="text-slate-700 dark:text-slate-300 font-medium text-base leading-relaxed">
                                    {point}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Kolom Kanan: Gambar Utama & Stat Badge Melayang */}
                <div className="lg:col-span-6 relative w-full flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative rounded-3xl overflow-hidden aspect-[4/3] w-full max-w-[540px] shadow-lg border border-slate-100 dark:border-slate-800"
                    >
                        <img 
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                            alt="J-Tech Digital Collaborative Team Meeting" 
                            className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-500"
                            loading="lazy"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="absolute bottom-[-24px] left-4 lg:left-[-12px] p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 max-w-[180px] sm:max-w-[200px]"
                    >
                        <span className="block text-4xl sm:text-5xl font-black text-blue-600 dark:text-blue-400 tracking-tight mb-2">
                            98%
                        </span>
                        <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                            On time Project Delivery Rate
                        </p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default BuiltForChallenge;
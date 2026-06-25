"use client";

import React from "react";
import { motion } from "framer-motion";
import { LuTarget, LuLightbulb, LuUsers, LuTrendingUp } from "react-icons/lu";
import { useLanguage } from "@/context/languageContext"; // ← tambah ini

const WhyPartnerWithUs = () => {
    const { t } = useLanguage(); // ← tambah ini

    const features = [
        { icon: <LuTarget className="text-blue-600" />, title: t("about.f1Title"), desc: t("about.f1Desc") },
        { icon: <LuLightbulb className="text-indigo-600" />, title: t("about.f2Title"), desc: t("about.f2Desc") },
        { icon: <LuUsers className="text-violet-600" />, title: t("about.f3Title"), desc: t("about.f3Desc") },
        { icon: <LuTrendingUp className="text-cyan-600" />, title: t("about.f4Title"), desc: t("about.f4Desc") },
    ];

    return (
        <section id="about" className="w-full px-[5%] md:px-[10%] py-24 bg-white dark:bg-slate-950 scroll-mt-20 transition-colors overflow-hidden" aria-labelledby="section-title">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <motion.h2 id="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
                    {t("about.title")}
                </motion.h2>
                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                    {t("about.subtitle")}
                </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((item, idx) => (
                    <FeatureCard key={idx} index={idx} icon={item.icon} title={item.title} desc={item.desc} />
                ))}
            </div>
        </section>
    );
};

const FeatureCard = ({ icon, title, desc, index }) => (
    <motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ y: -6, transition: { duration: 0.2 } }} className="flex flex-col items-start text-left p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/60 hover:shadow-md transition-all h-full">
        <div className="text-2xl mb-6 p-3 bg-blue-50 dark:bg-slate-800 rounded-xl flex items-center justify-center shadow-sm">{icon}</div>
        <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white tracking-tight">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{desc}</p>
    </motion.article>
);

export default WhyPartnerWithUs;
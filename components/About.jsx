"use client";

import React from "react";
import { motion } from "framer-motion";
// MENGUBAH IMPOR KE LU (LUCIDE ICONS) AGAR "Lightbulb" BERHASIL DIRESOLUSI
import { LuTarget, LuLightbulb, LuUsers, LuTrendingUp } from "react-icons/lu";

const WhyPartnerWithUs = () => {
    const features = [
        {
            icon: <LuTarget className="text-blue-600 dark:text-blue-400" aria-hidden="true" />,
            title: "Strategic Vision",
            desc: "We align our execution with your business objectives to ensure sustainable, long-term success."
        },
        {
            icon: <LuLightbulb className="text-indigo-600 dark:text-indigo-400" aria-hidden="true" />,
            title: "Innovative Design",
            desc: "Our design thinking approach ensures solutions are not just functional, but intuitively crafted."
        },
        {
            icon: <LuUsers className="text-violet-600 dark:text-violet-400" aria-hidden="true" />,
            title: "Collaborative Execution",
            desc: "We act as an extension of your team, maintaining transparent communication at every step."
        },
        {
            icon: <LuTrendingUp className="text-cyan-600 dark:text-cyan-400" aria-hidden="true" />,
            title: "Measurable Outcomes",
            desc: "Every feature is tied to key performance indicators to ensure verifiable return on investment."
        }
    ];

    return (
        <section 
            id="about" 
            className="w-full px-[5%] md:px-[10%] py-24 bg-white dark:bg-slate-950 scroll-mt-20 transition-colors overflow-hidden"
            aria-labelledby="section-title"
        >
            <div className="max-w-3xl mx-auto text-center mb-16">
                <motion.h2
                    id="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight"
                >
                    Why Partner With Us?
                </motion.h2>
                
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
                >
                    We bring a unique blend of industry expertise and technical excellence to ensure your project's success from day one. As a trusted software house, we transform your business goals into scalable digital reality.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((item, idx) => (
                    <FeatureCard 
                        key={idx}
                        index={idx}
                        icon={item.icon}
                        title={item.title}
                        desc={item.desc}
                    />
                ))}
            </div>
        </section>
    );
};

const FeatureCard = ({ icon, title, desc, index }) => (
    <motion.article 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -6, transition: { duration: 0.2 } }}
        className="flex flex-col items-start text-left p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/60 hover:shadow-md transition-all h-full"
    >
        <div className="text-2xl mb-6 p-3 bg-blue-50 dark:bg-slate-800 rounded-xl flex items-center justify-center shadow-sm">
            {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white tracking-tight">
            {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            {desc}
        </p>
    </motion.article>
);

export default WhyPartnerWithUs;
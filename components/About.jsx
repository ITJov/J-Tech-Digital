"use client"; 

import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaRobot, FaLayerGroup } from "react-icons/fa";

const About = () => {
    return (
        <section id="about" className="w-full px-[10%] py-24 bg-white dark:bg-slate-950 scroll-mt-20 transition-colors overflow-hidden">
            {/* Animasi Judul */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
            >
                <h4 className="text-xl text-blue-600 font-semibold mb-2 uppercase tracking-widest">Introduction</h4>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-10">About J-Tech Digital</h2>
            </motion.div>

            {/* Animasi Deskripsi */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-4xl mx-auto text-center mb-16"
            >
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                    J-Tech Digital is a technology company specializing in creating custom digital solutions for businesses. We combine
                    <strong className="text-slate-900 dark:text-white"> Fullstack Development</strong>, 
                    <strong className="text-slate-900 dark:text-white"> Artificial Intelligence</strong>, dan 
                    <strong className="text-slate-900 dark:text-white"> Business Logic</strong> <br />
                    for building integrated systems that streamline operations, enhance customer experience, and drive growth.
                </p>
            </motion.div>

            {/* Grid Card dengan Stagger Effect (Muncul Berurutan) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <AboutCard 
                    index={0}
                    icon={<FaCode className="text-blue-600" />}
                    title="Modern Tech Stack"
                    desc="User-friendly, scalable, and secure technologies to build custom web and mobile applications that drive business growth."
                />
                <AboutCard 
                    index={1}
                    icon={<FaRobot className="text-indigo-600" />}
                    title="AI Integration"
                    desc="Upgrade your systems with AI-powered features like chatbots, predictive analytics, and automation to enhance efficiency and customer experience."
                />
                <AboutCard 
                    index={2}
                    icon={<FaLayerGroup className="text-cyan-600" />}
                    title="Integrated Systems"
                    desc="Build a connected digital ecosystem, from POS to analytics dashboards."
                />
            </div>
        </section>
    );
};

const AboutCard = ({ icon, title, desc, index }) => (
    <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        whileHover={{ y: -10 }}
        className="flex flex-col items-center text-center p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all"
    >
        <div className="text-4xl mb-6 p-4 bg-white dark:bg-slate-800 shadow-sm rounded-2xl">{icon}</div>
        <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{desc}</p>
    </motion.div>
);

export default About;
"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
    FaCode, 
    FaRobot, 
    FaMobileAlt, 
    FaChartLine, 
    FaTools, 
    FaHandshake 
} from "react-icons/fa";

const SERVICES_DATA = [
    {
        icon: <FaCode className="text-blue-600" />,
        title: "Custom Web Development",
        desc: "High-performance web applications built with Laravel and Vue.js, tailored to your specific business logic."
    },
    {
        icon: <FaRobot className="text-indigo-600" />,
        title: "AI & Automation",
        desc: "Integrating intelligent chatbots (NLP) and automated workflows to increase your business efficiency."
    },
    {
        icon: <FaMobileAlt className="text-cyan-600" />,
        title: "Mobile App Solutions",
        desc: "Developing cross-platform mobile applications using Flutter for seamless Android and iOS experiences."
    },
    {
        icon: <FaChartLine className="text-emerald-600" />,
        title: "ERPNext Solutions",
        desc: "Comprehensive ERPNext implementation and module customization to streamline your corporate operations."
    },
    {
        icon: <FaTools className="text-slate-600" />,
        title: "Support & Maintenance",
        desc: "Reliable technical support and system upgrades to ensure your digital infrastructure stays robust."
    },
    {
        icon: <FaHandshake className="text-amber-600" />,
        title: "SaaS Partnership",
        desc: "Strategic partnership opportunities and revenue-sharing models for scalable software solutions."
    }
];

const Services = () => {
    return (
        <section id="services" className="w-full px-[10%] py-24 bg-white scroll-mt-20 overflow-hidden">
            {/* Header Animasi */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h4 className="text-xl text-blue-600 font-semibold mb-2 uppercase tracking-widest italic">Our Expertise</h4>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">What We Offer</h2>
                <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
            </motion.div>

            {/* Grid Services dengan Staggered Animation */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {SERVICES_DATA.map((service, index) => (
                    <ServiceCard
                        key={index}
                        index={index}
                        icon={service.icon}
                        title={service.title}
                        desc={service.desc}
                    />
                ))}
            </div>
        </section>
    );
};

const ServiceCard = ({ icon, title, desc, index }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-blue-100 transition-all duration-300"
        >
            <div className="flex flex-col items-center text-center">
                <div className="text-4xl mb-6 p-4 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                    {icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
            </div>
        </motion.div>
    );
};

export default Services;
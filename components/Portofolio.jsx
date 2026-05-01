"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaCode } from "react-icons/fa";

// Data projects dengan deskripsi yang lebih kaya kata kunci untuk SEO
const projects = [
    {
        title: "MeowMart Multi-Branch",
        category: "Full-Stack Development",
        description: "A comprehensive pet shop management system with multi-branch synchronization, real-time inventory tracking, and integrated POS solutions using Laravel and Vue.js.",
        tech: ["Laravel", "Vue.js", "MySQL", "Tailwind"],
        github: "https://github.com/ITJov", // Sebaiknya arahkan ke profil atau repo spesifik
        image: "/Meowmart_Logo.png"
    },
    {
        title: "Hybrid Symptom Detection Chatbot",
        category: "Artificial Intelligence",
        description: "AI-powered healthcare chatbot for initial ISPA diagnosis, utilizing DistilBERT (NLP) and rule-based algorithms for high-accuracy medical assessments.",
        tech: ["Next.js", "Flask", "Python", "Transformers"],
        github: "https://github.com/ITJov",
        image: "/AI_chatbot.png"
    },
    {
        title: "Maranatha Store Admin",
        category: "Web Application",
        description: "Professional E-commerce administrative dashboard featuring advanced product management, secure transaction tracking, and integrated sales analytics.",
        tech: ["Laravel", "Bootstrap", "JavaScript"],
        github: "https://github.com/ITJov",
        image: "/maranatha-store.png"
    },
    {
        title: "Midnight Maze Game",
        category: "Game Development",
        description: "An immersive 2D adventure game featuring custom level editors, pixel art graphics, and complex puzzle-solving mechanics built with Unity.",
        tech: ["Unity", "C#", "Pixel Art"],
        github: "https://github.com/ITJov",
        image: "/midnight-maze.png"
    },
    {
        title: "Flappy Bird 3D",
        category: "Game Development",
        description: "A high-performance 3D game reconstruction using Three.js and WebGL, focusing on fluid physics and optimized browser-based rendering.",
        tech: ["JavaScript", "Three.js", "WebGL"],
        github: "https://github.com/ITJov",
        image: "/flappy-bird.jpeg"
    }
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-24 px-6 md:px-[12%] bg-white scroll-mt-20 overflow-hidden">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16 w-full">

                <h4 className="text-blue-600 font-semibold tracking-widest uppercase mb-2">Our Work</h4>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Featured Projects</h2>
                <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>
            </motion.div>

            {/* Container Horizontal Scroll */}
            <div className="flex overflow-x-auto gap-8 pb-10 scrollbar-hide snap-x snap-mandatory px-4">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="min-w-[320px] md:min-w-[400px] flex-shrink-0 snap-center group bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all"
                    >
                        <div className="relative h-56 bg-slate-200 overflow-hidden">
                            <Image 
                                src={project.image} 
                                alt={`${project.title} - ${project.category} by J-Tech Digital`} // SEO: Alt text yang lebih kaya
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                sizes="(max-width: 768px) 320px, 400px"
                            />
                            <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-300"></div>
                        </div>

                        <div className="p-8">
                            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{project.category}</span>
                            <h3 className="text-xl font-bold text-slate-900 mt-2 mb-3">{project.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6 h-12 line-clamp-2">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8 min-h-[4rem] content-start">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="text-[10px] font-bold px-4 py-1.5 bg-white border border-slate-200 rounded-full text-slate-500 uppercase tracking-wider shadow-sm">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                <a 
                                    href={project.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    aria-label={`View ${project.title} source code on GitHub`}
                                    className="text-slate-400 hover:text-slate-900 transition-colors flex items-center gap-2 text-sm"
                                >
                                    <FaGithub size={20} />
                                    <span className="font-medium text-slate-600">View Source</span>
                                </a>
                                
                                {/* Ikon dekoratif pengganti Live Demo */}
                                <div className="text-blue-200 group-hover:text-blue-500 transition-colors">
                                    <FaCode size={18} />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            
            <div className="text-center mt-4 md:hidden">
                <p className="text-slate-400 text-xs animate-pulse">← Swipe to see more →</p>
            </div>
        </section>
    );
};

export default Portfolio;
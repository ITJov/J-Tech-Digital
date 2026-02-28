"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaChartLine,
    FaFileInvoiceDollar,
    FaBalanceScale,
    FaShoppingCart,
    FaWarehouse,
    FaBoxes,
    FaUsers,
    FaMoneyCheckAlt,
    FaUserCheck,
} from "react-icons/fa";

const FEATURES = [
    {
        key: "accounting",
        label: "Accounting",
        title: "Kontrol keuangan bisnis dengan sistem akuntansi otomatis",
        desc: "Permudah pengelolaan keuangan bisnis melalui pencatatan otomatis dan laporan instan.",
        image: FaChartLine,
        points: [
            {
                title: "Automated Journal Entries",
                desc: "Semua transaksi tercatat otomatis.",
                icon: FaFileInvoiceDollar,
            },
            {
                title: "Accurate Financial Reports",
                desc: "Neraca, Laba Rugi, Arus Kas real-time.",
                icon: FaBalanceScale,
            },
            {
                title: "Real-Time Monitoring",
                desc: "Pantau keuangan via dashboard.",
                icon: FaChartLine,
            },
        ],
    },
    {
        key: "sales",
        label: "Sales",
        title: "Kelola prospek hingga closing",
        desc: "Optimalkan pipeline penjualan.",
        image: FaShoppingCart,
        points: [
            {
                title: "Integrated Sales Data",
                desc: "Lead hingga invoice terhubung.",
                icon: FaShoppingCart,
            },
            {
                title: "Pipeline Management",
                desc: "Pantau setiap tahapan.",
                icon: FaChartLine,
            },
            {
                title: "Sales Report",
                desc: "Dashboard penjualan akurat.",
                icon: FaFileInvoiceDollar,
            },
        ],
    },
    {
        key: "inventory",
        label: "Inventory",
        title: "Visibilitas penuh stok",
        desc: "Kontrol inventaris real-time.",
        image: FaBoxes,
        points: [
            {
                title: "Automated Stock Movement",
                desc: "Mutasi stok otomatis.",
                icon: FaBoxes,
            },
            {
                title: "Stock Control",
                desc: "Hindari overstock & stockout.",
                icon: FaWarehouse,
            },
            {
                title: "Warehouse Integration",
                desc: "Multi warehouse.",
                icon: FaWarehouse,
            },
        ],
    },
    {
        key: "purchasing",
        label: "Purchasing",
        title: "Pengadaan lebih efisien",
        desc: "Automasi proses pembelian.",
        image: FaMoneyCheckAlt,
        points: [
            {
                title: "Purchase Automation",
                desc: "PR, PO, approval terintegrasi.",
                icon: FaMoneyCheckAlt,
            },
            {
                title: "Budget Control",
                desc: "Kontrol biaya real-time.",
                icon: FaBalanceScale,
            },
            {
                title: "Vendor Management",
                desc: "Data vendor rapi.",
                icon: FaUsers,
            },
        ],
    },
    {
        key: "hrm",
        label: "HRM",
        title: "Optimalkan proses HR",
        desc: "Kelola SDM end-to-end.",
        image: FaUsers,
        points: [
            {
                title: "Recruitment",
                desc: "Proses rekrutmen otomatis.",
                icon: FaUserCheck,
            },
            {
                title: "Payroll",
                desc: "Payroll & absensi terintegrasi.",
                icon: FaMoneyCheckAlt,
            },
            {
                title: "Performance",
                desc: "Pantau kinerja karyawan.",
                icon: FaChartLine,
            },
        ],
    },
];

export default function ERPFeatures() {
    const [active, setActive] = useState("accounting");
    const current = FEATURES.find((f) => f.key === active);
    const HeroIcon = current.image;

    return (
        <section className="relative overflow-hidden py-28 px-6 md:px-[10%] bg-gradient-to-b from-[#f9fafb] via-white to-[#fff7f2]">

            {/* Soft Radial Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,115,0,0.07),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,180,0,0.07),transparent_40%)] pointer-events-none" />

            {/* Tabs */}
            <div className="hidden lg:flex justify-center mb-16 relative z-10">
                <div className="flex gap-2 bg-white shadow-md rounded-full p-2 border border-gray-100">
                    {FEATURES.map((item) => (
                        <button
                            key={item.key}
                            onClick={() => setActive(item.key)}
                            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300
                ${active === item.key
                                    ? "bg-orange-600 text-white shadow-md scale-105"
                                    : "text-gray-600 hover:text-orange-600"
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="grid lg:grid-cols-2 gap-20 items-center relative z-10"
                >
                    {/* ICON BESAR */}
                    <motion.div
                        className="flex justify-center"
                        animate={{ y: [0, -15, 0] }}
                        transition={{ repeat: Infinity, duration: 5 }}
                    >
                        <HeroIcon className="text-orange-600 text-[200px] drop-shadow-2xl" />
                    </motion.div>

                    {/* TEXT */}
                    <div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-orange-600">
                            {current.title}
                        </h3>
                        <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                            {current.desc}
                        </p>

                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                visible: {
                                    transition: { staggerChildren: 0.15 },
                                },
                            }}
                            className="space-y-6"
                        >
                            {current.points.map((p, idx) => {
                                const Icon = p.icon;
                                return (
                                    <motion.div
                                        key={idx}
                                        variants={{
                                            hidden: { opacity: 0, x: -20 },
                                            visible: { opacity: 1, x: 0 },
                                        }}
                                        className="flex gap-4"
                                    >
                                        <div className="bg-orange-100 p-3 rounded-xl shadow-sm">
                                            <Icon className="text-orange-600 text-2xl" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-800">
                                                {p.title}
                                            </p>
                                            <p className="text-gray-600 text-sm">
                                                {p.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </section>
    );
}
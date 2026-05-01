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
        title: "Control business finances with automated accounting systems",
        desc: "Streamline business financial management through automated recording and instant reporting.",
        image: FaChartLine,
        points: [
            {
                title: "Automated Journal Entries",
                desc: "All transactions are recorded automatically.",
                icon: FaFileInvoiceDollar,
            },
            {
                title: "Accurate Financial Reports",
                desc: "Real-time Balance Sheets, Profit & Loss, and Cash Flow.",
                icon: FaBalanceScale,
            },
            {
                title: "Real-Time Monitoring",
                desc: "Monitor finances via an interactive dashboard.",
                icon: FaChartLine,
            },
        ],
    },
    {
        key: "sales",
        label: "Sales",
        title: "Manage prospects from lead to closing",
        desc: "Optimize your sales pipeline for maximum efficiency.",
        image: FaShoppingCart,
        points: [
            {
                title: "Integrated Sales Data",
                desc: "Seamlessly connect leads to invoices.",
                icon: FaShoppingCart,
            },
            {
                title: "Pipeline Management",
                desc: "Monitor every stage of the sales process.",
                icon: FaChartLine,
            },
            {
                title: "Sales Report",
                desc: "Highly accurate sales performance dashboards.",
                icon: FaFileInvoiceDollar,
            },
        ],
    },
    {
        key: "inventory",
        label: "Inventory",
        title: "Full stock visibility",
        desc: "Control your inventory with real-time tracking.",
        image: FaBoxes,
        points: [
            {
                title: "Automated Stock Movement",
                desc: "Automatic stock mutation tracking.",
                icon: FaBoxes,
            },
            {
                title: "Stock Control",
                desc: "Prevent overstocking and stockouts.",
                icon: FaWarehouse,
            },
            {
                title: "Warehouse Integration",
                desc: "Support for multi-warehouse management.",
                icon: FaWarehouse,
            },
        ],
    },
    {
        key: "purchasing",
        label: "Purchasing",
        title: "More efficient procurement",
        desc: "Automate your purchasing workflows.",
        image: FaMoneyCheckAlt,
        points: [
            {
                title: "Purchase Automation",
                desc: "Integrated PR, PO, and approval systems.",
                icon: FaMoneyCheckAlt,
            },
            {
                title: "Budget Control",
                desc: "Real-time cost and expenditure control.",
                icon: FaBalanceScale,
            },
            {
                title: "Vendor Management",
                desc: "Organized and centralized vendor data.",
                icon: FaUsers,
            },
        ],
    },
    {
        key: "hrm",
        label: "HRM",
        title: "Optimize HR processes",
        desc: "Manage human resources from end-to-end.",
        image: FaUsers,
        points: [
            {
                title: "Recruitment",
                desc: "Automated recruitment and hiring workflows.",
                icon: FaUserCheck,
            },
            {
                title: "Payroll",
                desc: "Integrated payroll and attendance systems.",
                icon: FaMoneyCheckAlt,
            },
            {
                title: "Performance",
                desc: "Monitor and track employee performance.",
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
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.07),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,180,0,0.07),transparent_40%)] pointer-events-none" />

            {/* Tabs */}
            <div className="hidden lg:flex justify-center mb-16 relative z-10">
                <div className="flex gap-2 bg-white shadow-md rounded-full p-2 border border-gray-100">
                    {FEATURES.map((item) => (
                        <button
                            key={item.key}
                            onClick={() => setActive(item.key)}
                            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300
                ${active === item.key
                                    ? "bg-blue-600 text-white shadow-md scale-105"
                                    : "text-gray-600 hover:text-blue-600"
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
                        <HeroIcon className="text-blue-600 text-[200px] drop-shadow-2xl" />
                    </motion.div>

                    {/* TEXT */}
                    <div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600">
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
                                        <div className="bg-blue-100 p-3 rounded-xl shadow-sm">
                                            <Icon className="text-blue-600 text-2xl" />
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
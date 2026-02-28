"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/assets/assets";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const res = await fetch("https://app.athena-erp.cloud/api/method/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ usr: username, pwd: password }),
                credentials: "include", // penting, biar browser dapet sid
                redirect: "manual", // jangan auto redirect
            });

            // Jika status 200 → login berhasil
            if (res.status === 200) {
                window.location.href = "https://app.athena-erp.cloud/app/home";
            } else {
                setError("Wrong username or password");
            }
        } catch (err) {
            console.error(err);
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-12">
            <div className="mb-6">
                <Link href="/">
                    <Image
                        src={assets.new_logo_dark}
                        alt="logo"
                        className="w-50 cursor-pointer shrink-0"
                        priority
                    />
                </Link>
            </div>

            <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
                <p className="text-gray-600 mb-6">Log in to access your ERP App</p>

                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email address
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                        />
                    </div>

                    {error && (
                        <p className="text-red-600 text-sm font-medium bg-red-50 p-2 rounded">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-2 px-4 bg-black text-white font-semibold rounded-md transition cursor-pointer 
              ${loading ? "opacity-60 cursor-not-allowed" : "hover:bg-gray-800"}`}
                    >
                        {loading ? "Processing..." : "Sign In"}
                    </button>
                </form>

                <p className="mt-6 text-sm text-gray-600 text-center">
                    Don’t have an account?{" "}
                    <Link href="/signup" className="text-orange-600 hover:underline font-medium">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
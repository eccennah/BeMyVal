"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const themes = [
    {
        id: "classic",
        name: "Classic Rose",
        color: "bg-rose-100",
        border: "border-rose-300",
        text: "text-rose-900",
        preview: "bg-rose-500",
    },
    {
        id: "passion",
        name: "Dark Passion",
        color: "bg-red-950",
        border: "border-red-800",
        text: "text-red-100",
        preview: "bg-red-700",
    },
    {
        id: "sweet",
        name: "Sweet Pink",
        color: "bg-pink-100",
        border: "border-pink-300",
        text: "text-pink-900",
        preview: "bg-pink-400",
    },
];

export default function CreateCard() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        recipient: "",
        message: "",
        theme: "classic",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/cards', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const { id } = await response.json();
                router.push(`/c/${id}?preview=true`);
            } else {
                console.error('Failed to create card');
                setIsSubmitting(false);
            }
        } catch (error) {
            console.error('Error creating card:', error);
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-rose-50 text-rose-950 font-sans selection:bg-rose-200 flex flex-col">
            {/* Navbar */}
            <nav className="fixed w-full z-50 top-0 start-0 border-b border-rose-100 bg-rose-50/80 backdrop-blur-md">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-serif font-bold whitespace-nowrap text-rose-600">
                            BeMyVal
                        </span>
                    </Link>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-grow pt-32 pb-20 px-4">
                <div className="max-w-xl mx-auto">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-rose-900 mb-4">
                            Create Your Card
                        </h1>
                        <p className="text-rose-800/70">
                            Fill in the details below to craft your perfect Valentine's request.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-rose-100">
                        {/* Recipient */}
                        <div>
                            <label htmlFor="recipient" className="block mb-2 text-sm font-bold text-rose-900 uppercase tracking-wide">
                                Who is it for?
                            </label>
                            <input
                                type="text"
                                id="recipient"
                                required
                                className="block w-full p-4 text-rose-900 border border-rose-200 rounded-xl bg-rose-50/30 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all placeholder:text-rose-300"
                                placeholder="e.g. Sarah, My Love, Bestie"
                                value={formData.recipient}
                                onChange={(e) => setFormData({ ...formData, recipient: e.target.value })}
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block mb-2 text-sm font-bold text-rose-900 uppercase tracking-wide">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                required
                                className="block w-full p-4 text-rose-900 border border-rose-200 rounded-xl bg-rose-50/30 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all placeholder:text-rose-300 resize-none"
                                placeholder="Will you be my Valentine?..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            ></textarea>
                        </div>

                        {/* Theme Selection */}
                        <div>
                            <label className="block mb-4 text-sm font-bold text-rose-900 uppercase tracking-wide">
                                Choose a Theme
                            </label>
                            <div className="grid grid-cols-3 gap-4">
                                {themes.map((theme) => (
                                    <button
                                        key={theme.id}
                                        type="button"
                                        onClick={() => setFormData({ ...formData, theme: theme.id })}
                                        className={`relative p-4 rounded-xl border-2 transition-all duration-200 flex flex-col items-center gap-2 group ${formData.theme === theme.id
                                            ? "border-rose-500 bg-rose-50 scale-105 shadow-md"
                                            : "border-transparent bg-gray-50 hover:bg-rose-50/50 hover:border-rose-200"
                                            }`}
                                    >
                                        <div className={`w-12 h-12 rounded-full ${theme.preview} shadow-sm group-hover:scale-110 transition-transform`} />
                                        <span className={`text-xs font-medium ${formData.theme === theme.id ? "text-rose-900" : "text-gray-500"}`}>
                                            {theme.name}
                                        </span>
                                        {formData.theme === theme.id && (
                                            <div className="absolute top-2 right-2 w-4 h-4 bg-rose-500 rounded-full flex items-center justify-center">
                                                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 bg-rose-600 text-white rounded-xl font-bold text-lg shadow-lg hover:bg-rose-700 focus:ring-4 focus:ring-rose-300 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span>Creating Magic...</span>
                                </>
                            ) : (
                                <>
                                    <span>Create Card</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
}

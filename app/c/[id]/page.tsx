"use client";

import { useEffect, useState, use } from "react"; // Added 'use' import
import Link from "next/link";
import confetti from "canvas-confetti";
import { supabase } from "@/lib/supabase";

// Reuse themes from main card page (or refactor to shared file)
const themes: Record<string, { bg: string; card: string; text: string; accent: string; button: string; buttonText: string }> = {
    classic: {
        bg: "bg-rose-50",
        card: "bg-white border-rose-200",
        text: "text-rose-900",
        accent: "text-rose-600",
        button: "bg-rose-600 hover:bg-rose-700",
        buttonText: "text-white",
    },
    passion: {
        bg: "bg-stone-950",
        card: "bg-stone-900 border-red-900",
        text: "text-red-100",
        accent: "text-red-500",
        button: "bg-red-700 hover:bg-red-600",
        buttonText: "text-white",
    },
    sweet: {
        bg: "bg-pink-50",
        card: "bg-white border-pink-200",
        text: "text-pink-900",
        accent: "text-pink-500",
        button: "bg-pink-400 hover:bg-pink-500",
        buttonText: "text-white",
    },
};

export default function DynamicCardPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const [cardData, setCardData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [response, setResponse] = useState<"pending" | "yes">("pending");
    const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
    const [isNoHovered, setIsNoHovered] = useState(false);

    useEffect(() => {
        if (id) {
            const fetchCard = async () => {
                const { data, error } = await supabase
                    .from('cards')
                    .select('*')
                    .eq('id', id)
                    .single();

                if (data) {
                    setCardData(data);
                }
                setLoading(false);
            };
            fetchCard();
        }
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-rose-50">
                <div className="animate-pulse flex flex-col items-center">
                    <div className="h-12 w-12 bg-rose-200 rounded-full mb-4"></div>
                    <div className="h-4 w-32 bg-rose-200 rounded"></div>
                    <span className="text-rose-400 mt-2 text-sm">Loading love letter...</span>
                </div>
            </div>
        );
    }

    if (!cardData) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-rose-50 text-rose-900 p-4 text-center">
                <h1 className="text-4xl mb-4">💔</h1>
                <h2 className="text-2xl font-bold mb-2">Card Not Found</h2>
                <p className="mb-6 opacity-70">This valentine seems to have gotten lost in the mail.</p>
                <Link href="/create" className="px-6 py-3 bg-rose-600 text-white rounded-full font-bold hover:bg-rose-700 transition">
                    Create New Card
                </Link>
            </div>
        );
    }

    // --- EVERYTHING BELOW IS REUSED LOGIC ---
    const theme = themes[cardData.theme] || themes.classic;

    const handleNoHover = () => {
        if (response === "yes") return;
        setIsNoHovered(true);
        const x = Math.random() * 200 - 100;
        const y = Math.random() * 200 - 100;
        setNoPosition({ x, y });
    };

    const handleYes = () => {
        setResponse("yes");
        const duration = 5 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) return clearInterval(interval);
            const particleCount = 50 * (timeLeft / duration);
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);
    };

    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
    };

    return (
        <div className={`min-h-screen flex flex-col items-center justify-center p-4 transition-colors duration-500 ${theme.bg} relative overflow-hidden`}>
            {/* Floating Hearts Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-10 left-10 text-4xl opacity-20 animate-float">💕</div>
                <div className="absolute top-20 right-20 text-3xl opacity-15 animate-float-delayed">💖</div>
                <div className="absolute bottom-32 left-1/4 text-5xl opacity-10 animate-sway">💗</div>
                <div className="absolute top-1/3 right-1/3 text-2xl opacity-20 animate-float" style={{ animationDelay: '2s' }}>💝</div>
                <div className="absolute bottom-20 right-10 text-4xl opacity-15 animate-float-delayed" style={{ animationDelay: '1.5s' }}>💘</div>
            </div>
            <nav className="fixed top-0 left-0 w-full p-4 flex justify-between items-center z-10">
                <Link href="/" className="bg-white/50 p-2 rounded-full hover:bg-white/80 transition shadow-sm backdrop-blur-sm">
                    <svg className={`w-6 h-6 ${theme.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </Link>
                <button
                    onClick={handleShare}
                    className="px-4 py-2 bg-white/50 rounded-full text-sm font-medium hover:bg-white/80 transition shadow-sm backdrop-blur-sm flex items-center gap-2 text-rose-950"
                >
                    <span>Share</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                </button>
            </nav>

            <div className={`w-full max-w-md p-8 md:p-12 rounded-3xl shadow-2xl border ${theme.card} text-center relative overflow-hidden transition-all duration-500 animate-fade-in`} style={{ animationDelay: '0.2s' }}>
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-${theme.accent.split('-')[1]}-400 to-transparent opacity-50`} />

                {response === "yes" ? (
                    <div className="animate-in fade-in zoom-in duration-700 py-10">
                        <div className="text-6xl mb-6 animate-pulse">💖</div>
                        <h1 className={`text-4xl md:text-5xl font-serif font-bold ${theme.accent} mb-4`}>
                            YAAAY!
                        </h1>
                        <p className={`text-xl ${theme.text} opacity-80`}>
                            Best. Valentine. Ever.
                        </p>
                    </div>
                ) : (
                    <>
                        <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                            <span className={`inline-block py-1 px-3 rounded-full text-xs font-bold uppercase tracking-widest mb-4 opacity-60 border ${theme.text} ${theme.text}`}>
                                A Special Question
                            </span>
                            <h1 className={`text-3xl md:text-4xl font-serif font-bold ${theme.text} mb-2`}>
                                Dear {cardData.recipient},
                            </h1>
                        </div>

                        <p className={`text-lg md:text-xl leading-relaxed whitespace-pre-wrap mb-10 ${theme.text} font-medium opacity-90 animate-fade-in`} style={{ animationDelay: '0.5s' }}>
                            {cardData.message}
                        </p>

                        <div className="flex flex-col gap-4 items-center justify-center relative h-32 animate-fade-in" style={{ animationDelay: '0.7s' }}>
                            <button
                                onClick={handleYes}
                                className={`px-10 py-4 ${theme.button} ${theme.buttonText} rounded-full text-xl font-bold shadow-lg transform hover:scale-110 active:scale-95 transition-all duration-200 z-10 w-full md:w-auto`}
                            >
                                YES! 💖
                            </button>

                            <button
                                onMouseEnter={handleNoHover}
                                onClick={handleNoHover}
                                style={{
                                    transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
                                    transition: isNoHovered ? 'transform 0.2s ease-out' : 'none'
                                }}
                                className={`px-6 py-2 bg-gray-200 text-gray-500 rounded-full text-sm font-medium hover:bg-gray-300 transition-colors absolute bottom-0 ${isNoHovered ? '' : 'relative'}`}
                            >
                                No
                            </button>
                        </div>
                    </>
                )}
            </div>
            <div className="mt-8 text-center opacity-40 text-sm">
                Made with <Link href="/" className="underline hover:opacity-100">BeMyVal</Link>
            </div>
        </div>
    );
}

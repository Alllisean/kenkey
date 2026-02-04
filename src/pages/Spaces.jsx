import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Spaces = ({ darkMode }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-black text-white' : 'bg-zinc-50 text-zinc-900'}`}>
            {/* Navigation */}
            <div className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-colors duration-500 ${darkMode ? 'bg-black/60 border-zinc-800' : 'bg-white/60 border-purple-100'}`}>
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link to="/" className="flex items-center space-x-2 group">
                        <svg className={`w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span className={`font-bold ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>Back to Home</span>
                    </Link>
                    <span className="text-xl font-black bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent uppercase tracking-tighter">BITZ SPACES</span>
                </div>
            </div>

            {/* Hero Section */}
            <header className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight animate-fade-in-up">
                        Infrastructures of <span className="text-purple-500 underline decoration-purple-500/30">Growth</span>
                    </h1>
                    <p className={`text-xl md:text-2xl font-medium leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'} animate-fade-in-up delay-100`}>
                        Creating spaces where students and innovators grow intellectually, socially, and technologically.
                    </p>
                </div>
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[120px] -z-10"></div>
            </header>

            <main className="max-w-5xl mx-auto px-6 pb-32">
                {/* Introduction */}
                <section className="mb-24">
                    <div className={`p-10 rounded-[3rem] ${darkMode ? 'bg-zinc-900' : 'bg-white shadow-xl'} border ${darkMode ? 'border-zinc-800' : 'border-purple-100'} flex flex-col md:flex-row items-center gap-12`}>
                        <div className="flex-1">
                            <h2 className="text-3xl font-black mb-6 text-purple-600 italic">Introduction</h2>
                            <p className="text-lg leading-relaxed opacity-90">
                                Education today is not only about classrooms; it is about the infrastructures that enable learning to thrive. Bitz Academy, supported by Bitz Enterprises, has built a reputation for creating spaces ranging from modern facilities to digital platforms and strategic partnerships.
                            </p>
                        </div>
                        <div className="flex-1 w-full h-[300px] rounded-[2.5rem] overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" alt="Modern Infrastructure" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </section>

                {/* 1. Physical Infrastructure */}
                <section className="mb-24">
                    <h2 className="text-4xl font-black mb-12 text-center">1. Physical Infrastructure</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="p-6 rounded-2xl bg-purple-500/5 border-l-4 border-purple-500">
                                <h3 className="text-xl font-bold mb-2 italic">Campus Design</h3>
                                <p className="opacity-80">Blended traditional learning with modern innovations for holistic development.</p>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    { name: "Smart Classrooms", desc: "Equipped with interactive boards & ergonomic seating." },
                                    { name: "Diverse Libraries", desc: "Physical books meeting digital archives." },
                                    { name: "S&T Laboratories", desc: "Hands-on experience for innovation and application." },
                                    { name: "Sports Facilities", desc: "Gyms and grounds for physical wellness." }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4">
                                        <span className="text-purple-500 font-bold shrink-0">✓</span>
                                        <p><span className="font-bold">{item.name}:</span> <span className="opacity-70">{item.desc}</span></p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="h-[500px] rounded-[3rem] overflow-hidden shadow-2xl skew-y-1">
                            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80" alt="Physical Learning" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </section>

                {/* 2. Digital Infrastructure */}
                <section className="mb-24">
                    <div className={`p-12 rounded-[4rem] ${darkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-zinc-900 text-white shadow-2xl'} border`}>
                        <h2 className="text-4xl font-black mb-12 italic text-purple-400">2. Digital Infrastructure</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { title: "E-Learning", desc: "Online portals for lectures and assignments.", icon: "🌐" },
                                { title: "Virtual Class", desc: "Remote learning capabilities for continuity.", icon: "💻" },
                                { title: "Global Knowledge", desc: "Access to worldwide journals and databases.", icon: "📚" },
                                { title: "E-Admin", desc: "Transparent grading and admission systems.", icon: "⚡" }
                            ].map((card, i) => (
                                <div key={i} className="flex flex-col items-center text-center">
                                    <div className="text-4xl mb-4 bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center">{card.icon}</div>
                                    <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                                    <p className="text-sm opacity-60 leading-tight">{card.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. Organizational Infrastructure */}
                <section className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1 h-[400px] rounded-[3rem] overflow-hidden shadow-2xl relative">
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Teamwork" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-purple-600/10"></div>
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-4xl font-black mb-8 underline decoration-purple-500 decoration-4 underline-offset-8">3. Organizational</h2>
                        <div className="space-y-8">
                            <p className="text-lg leading-relaxed opacity-90 italic">
                                "Infrastructure is not only about buildings—it is also about people and systems."
                            </p>
                            <div className="grid grid-cols-1 gap-4">
                                {['Faculty Development', 'Student Support Systems', 'Strong Governance', 'Community Engagement'].map((item, i) => (
                                    <div key={i} className={`px-6 py-4 rounded-xl font-bold flex items-center space-x-3 ${darkMode ? 'bg-zinc-800' : 'bg-white shadow-sm'}`}>
                                        <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Strategic Infrastructure */}
                <section className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black mb-4">4. Strategic Infrastructure</h2>
                        <p className="text-purple-500 font-bold uppercase tracking-widest">Backed by BITZ Enterprises</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { title: "Financial Support", desc: "Sustaining high standards and expanding capabilities." },
                            { title: "Industry Linkages", desc: "Connecting learners to real-world career pathways." },
                            { title: "Innovation Culture", desc: "Embedding excellence and sustainability into the ethos." },
                            { title: "Future Expansion", desc: "Scaling the capacity to match global demand." }
                        ].map((item, i) => (
                            <div key={i} className={`p-8 rounded-[2.5rem] border transition-transform hover:-translate-y-2 ${darkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-purple-100 shadow-xl'}`}>
                                <h3 className="text-xl font-black mb-4 text-purple-600 uppercase italic tracking-tighter">{item.title}</h3>
                                <p className="opacity-70 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Conclusion */}
                <section className={`p-16 rounded-[4.5rem] relative overflow-hidden text-center ${darkMode ? 'bg-purple-900/40' : 'bg-purple-900 text-white shadow-2xl'}`}>
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-4xl font-black mb-8 italic">A Beacon of Excellence</h2>
                        <p className="text-lg leading-relaxed opacity-90 mb-10">
                            Bitz Spaces are more than buildings—they are environments where learning is nurtured. With the strong backing of Bitz Enterprises, we prepare students for life in a dynamic, interconnected world.
                        </p>
                        <Link to="/enterprise" className="inline-block px-12 py-5 bg-white text-purple-900 font-black rounded-full hover:scale-105 transition-transform">
                            Learn About the Vision
                        </Link>
                    </div>
                    {/* Decorative element */}
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500 blur-3xl rounded-full opacity-20"></div>
                </section>
            </main>

            <footer className="py-20 text-center opacity-40 text-sm">
                © 2026 BITZ SPACES | The Infrastructure of Tomorrow.
            </footer>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                .delay-100 { animation-delay: 0.1s; }
            `}} />
        </div>
    );
};

export default Spaces;

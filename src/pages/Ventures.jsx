import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Ventures = ({ darkMode }) => {
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
                    <span className="text-xl font-black bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent uppercase tracking-tight">BITZ VENTURES</span>
                </div>
            </div>

            {/* Hero Section */}
            <header className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter animate-fade-in-up">
                        Nurturing <span className="text-purple-500 italic">Impactful</span> Realities
                    </h1>
                    <p className={`text-xl md:text-2xl font-medium leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'} animate-fade-in-up delay-100`}>
                        A dynamic firm extending influence into education, entrepreneurship, and global innovation.
                    </p>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[120px] -z-10"></div>
            </header>

            <main className="max-w-6xl mx-auto px-6 pb-32">
                {/* Introduction */}
                <section className="mb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 h-[400px] rounded-[3rem] overflow-hidden shadow-2xl">
                            <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80" alt="Innovation Hub" className="w-full h-full object-cover" />
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="text-3xl font-black mb-6 text-purple-600">Catalyst for Growth</h2>
                            <p className="text-lg leading-relaxed opacity-90 mb-6">
                                Bitz Enterprises is more than just a backbone—it is a dynamic firm that has extended its influence into multiple ventures. By combining financial support, technological expertise, and strategic vision, we nurture projects that span education, entrepreneurship, and digital innovation.
                            </p>
                            <p className="text-lg font-bold border-l-4 border-purple-500 pl-6 italic">
                                "Our ventures reflect a commitment to building sustainable ecosystems where ideas grow into impactful realities."
                            </p>
                        </div>
                    </div>
                </section>

                {/* 1. Educational Ventures */}
                <section className="mb-24">
                    <div className={`p-12 rounded-[3.5rem] ${darkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white shadow-xl border-purple-100'} border`}>
                        <div className="flex flex-col md:flex-row gap-12">
                            <div className="flex-1">
                                <h2 className="text-4xl font-black mb-8 italic">1. Educational Ventures</h2>
                                <div className="space-y-6">
                                    {[
                                        { title: "Vocational Training", desc: "Establishing skill-based centers for trades like coding and engineering." },
                                        { title: "Scholarship Funds", desc: "Investing in schemes for talented but underprivileged students." },
                                        { title: "Teacher Workshops", desc: "Equipping educators with modern methods and digital tools." }
                                    ].map((item, i) => (
                                        <div key={i} className="group">
                                            <h3 className="text-xl font-bold text-purple-500 mb-1 group-hover:translate-x-2 transition-transform">{item.title}</h3>
                                            <p className="opacity-70">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="md:w-1/3 h-[350px] rounded-[2.5rem] overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80" alt="Education" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Entrepreneurial Ventures */}
                <section className="mb-24">
                    <h2 className="text-4xl font-black mb-12 text-center underline decoration-purple-500/30 decoration-8 underline-offset-8 uppercase tracking-tighter">2. Entrepreneurial Ventures</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Startup Incubators", icon: "🚀", desc: "Nurturing ideas with mentorship, seed funding, and global networks." },
                            { title: "Small Biz Support", icon: "💎", desc: "Providing microloans and advisory for sustainable community growth." },
                            { title: "Tech Innovation Hubs", icon: "🧠", desc: "Experimenting with software, apps, and AI-driven solutions." }
                        ].map((item, i) => (
                            <div key={i} className={`p-8 rounded-[2.5rem] text-center transition-all hover:scale-105 ${darkMode ? 'bg-zinc-800/50' : 'bg-purple-50'}`}>
                                <div className="text-5xl mb-6">{item.icon}</div>
                                <h3 className="text-2xl font-black mb-4 tracking-tighter">{item.title}</h3>
                                <p className="opacity-70 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3. Community Development */}
                <section className="mb-24">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 space-y-8">
                            <h2 className="text-4xl font-black italic">3. Community Development</h2>
                            <p className="text-xl opacity-80 leading-relaxed font-medium">
                                We believe strong communities are the foundation of progress. Our social responsibility extends into health, local infrastructure, and youth empowerment.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {['Health Initiatives', 'Infrastructure Projects', 'Youth Empowerment', 'Clean Water Drives'].map((item, i) => (
                                    <div key={i} className="flex items-center space-x-3 p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                        <span className="font-bold">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex-1 w-full h-[500px] rounded-[4rem] overflow-hidden shadow-2xl rotate-1 group">
                            <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80" alt="Community" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                        </div>
                    </div>
                </section>

                {/* 4. Digital & Global */}
                <section className="mb-24">
                    <div className={`p-16 rounded-[4rem] overflow-hidden relative ${darkMode ? 'bg-zinc-950' : 'bg-zinc-900 text-white shadow-2xl'}`}>
                        <div className="relative z-10">
                            <h2 className="text-4xl font-black mb-12 text-center text-purple-400">4. Digital & Global Ventures</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                                <div className="text-center">
                                    <h3 className="text-xl font-bold mb-4">E-Learning Portals</h3>
                                    <p className="opacity-60 text-sm">Accessible worldwide education platforms supported by the firm.</p>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xl font-bold mb-4">Intl. Partnerships</h3>
                                    <p className="opacity-60 text-sm">Collaborations with global firms bringing resources to local ventures.</p>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xl font-bold mb-4">Sustainable Tech</h3>
                                    <p className="opacity-60 text-sm">Investing in renewable energy solutions for a greener future.</p>
                                </div>
                            </div>
                        </div>
                        {/* Abstract Background */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 blur-[100px] rounded-full"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-900/40 blur-[100px] rounded-full"></div>
                    </div>
                </section>

                {/* Conclusion */}
                <section className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-black mb-8 italic italic">Catalyzing Future Growth</h2>
                    <p className="text-xl leading-relaxed opacity-80 mb-12">
                        From education to entrepreneurship and beyond, BITZ Ventures embodies a vision of progress that is both local and global. Shaping futures and transforming communities—one venture at a time.
                    </p>
                </section>
            </main>

            <footer className="py-20 text-center opacity-40 text-sm uppercase tracking-widest font-bold">
                © 2026 BITZ VENTURES | IMPACT THROUGH INNOVATION.
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

export default Ventures;

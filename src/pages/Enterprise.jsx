import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Enterprise = ({ darkMode }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-black text-white' : 'bg-zinc-50 text-zinc-900'}`}>
            {/* Simple Nav for the page */}
            <div className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-colors duration-500 ${darkMode ? 'bg-black/60 border-zinc-800' : 'bg-white/60 border-purple-100'}`}>
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link to="/" className="flex items-center space-x-2 group">
                        <svg className={`w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span className={`font-bold ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>Back to Home</span>
                    </Link>
                    <span className="text-xl font-black bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">BITZ ENTERPRISE</span>
                </div>
            </div>

            {/* Hero Section */}
            <header className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight animate-fade-in-up">
                        Powering the <span className="text-purple-500 underline decoration-purple-500/30">Vision</span> of Innovation
                    </h1>
                    <p className={`text-xl md:text-2xl font-medium leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'} animate-fade-in-up delay-100`}>
                        The strong foundation driving the mission to train and inspire the next generation of tech leaders.
                    </p>
                </div>
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[120px] -z-10"></div>
            </header>

            <main className="max-w-4xl mx-auto px-6 pb-32">
                {/* Introduction */}
                <section className="mb-20">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <h2 className="text-3xl font-black mb-6 text-purple-500 italic">Introduction</h2>
                            <p className="text-lg leading-relaxed opacity-90">
                                Behind every successful institution lies a strong foundation of support. For BITZ Academy, that foundation is BITZ Enterprise—the proud sponsor and strategic partner driving the academy’s mission to train and inspire tech enthusiasts. BITZ Enterprise is more than just a sponsor; it is a visionary organization committed to nurturing innovation, empowering communities, and investing in the future of technology.
                            </p>
                        </div>
                        <div className="flex-1 w-full h-[350px] rounded-[3rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" alt="Corporate Headquarters" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </section>

                {/* Who is BITZ Enterprise? */}
                <section className="mb-24 space-y-12">
                    <div className={`p-10 rounded-[3rem] ${darkMode ? 'bg-zinc-900' : 'bg-white'} shadow-xl relative overflow-hidden group`}>
                        <h2 className="text-3xl font-black mb-6 italic text-purple-600">Who is BITZ Enterprise?</h2>
                        <div className="relative z-10">
                            <p className="text-lg leading-relaxed opacity-90 mb-6">
                                BITZ Enterprise is a dynamic company that operates at the intersection of technology, business, and education. With a focus on creating sustainable solutions and fostering digital growth, the enterprise has built a reputation for supporting initiatives that empower individuals and organizations to thrive in the digital age.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                                {['Sustainable Solutions', 'Digital Growth', 'Talent Cultivation'].map((item, i) => (
                                    <div key={i} className={`p-4 rounded-2xl text-center font-bold border ${darkMode ? 'bg-black/40 border-zinc-800' : 'bg-purple-50 border-purple-100 text-purple-900'}`}>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sponsorship with Purpose */}
                <section className="mb-24">
                    <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                        <div className="flex-1">
                            <h2 className="text-3xl font-black mb-6 text-purple-500 uppercase tracking-tighter">Sponsorship with Purpose</h2>
                            <p className="text-lg leading-relaxed opacity-90 mb-6">
                                BITZ Enterprise’s sponsorship of BITZ Academy is not a mere financial arrangement—it is a purposeful investment in people. By providing funding, infrastructure, and strategic guidance, BITZ Enterprise enables the academy to deliver high-quality training programs.
                            </p>
                            <p className="font-bold text-purple-500">Breaking down barriers to make technology education accessible to everyone.</p>
                        </div>
                        <div className="flex-1 w-full h-[400px] rounded-[3.5rem] overflow-hidden shadow-2xl relative">
                            <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80" alt="Collaboration" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-purple-600/20 mix-blend-overlay"></div>
                        </div>
                    </div>
                </section>

                {/* Driving Innovation */}
                <section className="mb-24">
                    <div className={`p-12 rounded-[3.5rem] ${darkMode ? 'bg-gradient-to-br from-zinc-900 to-black' : 'bg-gradient-to-br from-purple-50 to-white'}`}>
                        <h2 className="text-4xl font-black mb-8 italic">Driving Innovation & Growth</h2>
                        <p className="text-xl leading-relaxed opacity-80 mb-10 max-w-2xl">
                            We collaborate with BITZ Academy to design curricula that align with industry needs. This synergy ensures that graduates are ready to contribute to the global tech ecosystem.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-purple-500 underline decoration-2 underline-offset-4">Strategic Integration</h3>
                                <p className="opacity-70">Leveraging business expertise to shape real-world training challenges.</p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-purple-500 underline decoration-2 underline-offset-4">Professional Edge</h3>
                                <p className="opacity-70">Internships and networking events that bridge the classroom and the workplace.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Community Impact */}
                <section className="mb-24 text-center">
                    <h2 className="text-4xl font-black mb-8 italic italic">Impact on the Community</h2>
                    <p className="text-lg leading-relaxed opacity-70 mb-12 max-w-2xl mx-auto">
                        The partnership creates a ripple effect, producing graduates who launch startups and drive digital transformation globally.
                    </p>
                    <div className="w-full h-[450px] rounded-[4rem] overflow-hidden shadow-2xl mb-12 group">
                        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80" alt="Tech Community" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    </div>
                </section>

                {/* Conclusion */}
                <section className={`p-16 rounded-[4rem] text-center border-t border-purple-500/20 ${darkMode ? 'bg-zinc-950' : 'bg-white shadow-2xl'}`}>
                    <h2 className="text-3xl md:text-5xl font-black mb-8 italic uppercase tracking-tighter">Building the Future</h2>
                    <p className="text-xl leading-relaxed mb-12 opacity-80 max-w-3xl mx-auto">
                        Together, we are not just training individuals—we are building a future where technology serves as a tool for empowerment, progress, and global impact.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="px-10 py-4 bg-purple-600 text-white font-black rounded-full hover:bg-purple-500 hover:scale-105 transition-all">
                            Partner With Us
                        </button>
                        <Link to="/academy" className="px-10 py-4 border-2 border-purple-500/30 font-black rounded-full hover:bg-purple-500/10 transition-all">
                            Explore Academy
                        </Link>
                    </div>
                </section>
            </main>

            {/* Footer space */}
            <footer className="py-20 text-center opacity-40 text-sm">
                © 2026 BITZ ENTERPRISE | Empowering Global Innovation.
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

export default Enterprise;

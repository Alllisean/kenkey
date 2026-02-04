import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Kidz = ({ darkMode }) => {
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
                    <span className="text-xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent uppercase tracking-tight">BITZ KIDZ</span>
                </div>
            </div>

            {/* Hero Section */}
            <header className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-block px-4 py-1 rounded-full bg-purple-500/10 text-purple-500 font-bold text-sm mb-6 animate-fade-in-up uppercase tracking-widest">
                        Nurturing the Future 🌈
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter animate-fade-in-up">
                        Play. <span className="text-purple-500">Learn.</span> <span className="text-pink-500">Grow.</span>
                    </h1>
                    <p className={`text-xl md:text-2xl font-medium leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'} animate-fade-in-up delay-100`}>
                        A specialized foundation where curiosity meets creativity for our youngest explorers.
                    </p>
                </div>
                {/* Decorative Background Elements */}
                <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[120px] -z-10"></div>
            </header>

            <main className="max-w-6xl mx-auto px-6 pb-32">
                {/* Introduction */}
                <section className="mb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="flex-1 space-y-6">
                            <h2 className="text-3xl font-black text-purple-600 italic">Welcome to BITZ Kidz</h2>
                            <p className="text-lg leading-relaxed opacity-90">
                                BITZ Kidz is one of the most vibrant initiatives under the umbrella of Bitz Enterprises. Designed as a specialized program for children, it focuses on nurturing creativity, curiosity, and character from an early age.
                            </p>
                            <p className="text-lg leading-relaxed opacity-90 font-medium">
                                While Bitz Academy provides structured education for older students, BITZ Kidz creates a foundation where younger learners can explore, play, and grow.
                            </p>
                        </div>
                        <div className="flex-1 w-full h-[400px] rounded-[4rem] overflow-hidden shadow-2xl relative">
                            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80" alt="Kids learning" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent"></div>
                        </div>
                    </div>
                </section>

                {/* Learning Spaces */}
                <section className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">Learning Spaces</h2>
                        <p className="text-purple-500 font-bold uppercase tracking-widest text-sm">Tailored to Developmental Needs</p>
                    </div>
                    <div className="w-full h-[400px] mb-12 rounded-[3.5rem] overflow-hidden shadow-2xl relative group">
                        <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80" alt="Kidz Learning Environment" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Interactive Classrooms", desc: "Bright, colorful spaces with age-appropriate tools.", icon: "🎨" },
                            { title: "Play Zones", desc: "Indoor and outdoor areas for motor skills development.", icon: "🎠" },
                            { title: "Creative Corners", desc: "Dedicated spots for art, music, and storytelling.", icon: "🎷" },
                            { title: "Tech Integration", desc: "Basic digital literacy through gentle, fun play.", icon: "🎮" }
                        ].map((space, i) => (
                            <div key={i} className={`p-8 rounded-[2.5rem] border transition-transform hover:-translate-y-2 ${darkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-purple-100 shadow-xl'}`}>
                                <div className="text-4xl mb-6">{space.icon}</div>
                                <h3 className="text-xl font-bold mb-3">{space.title}</h3>
                                <p className="opacity-70 text-sm leading-relaxed">{space.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Programs & Curriculum */}
                <section className={`mb-24 p-12 md:p-16 rounded-[4rem] ${darkMode ? 'bg-zinc-900' : 'bg-zinc-900 text-white shadow-2xl'} overflow-hidden relative`}>
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-black mb-8 italic text-purple-400">Programs & Curriculum</h2>
                            <ul className="space-y-6">
                                {[
                                    { title: "Early Literacy & Numeracy", desc: "Taught through games, songs, and interaction." },
                                    { title: "Character Building", desc: "Values like kindness and teamwork in daily routines." },
                                    { title: "STEM for Kids", desc: "Science and tech activities that spark curiosity." },
                                    { title: "Cultural Awareness", desc: "Appreciating global traditions through music and art." }
                                ].map((prog, i) => (
                                    <li key={i} className="flex gap-4">
                                        <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center shrink-0 mt-1">
                                            <span className="text-[10px] text-white">★</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">{prog.title}</h4>
                                            <p className="opacity-60 text-sm">{prog.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="h-[450px] rounded-[3rem] overflow-hidden shadow-2xl rotate-2 transition-transform hover:rotate-0 duration-700">
                            <img src="https://images.unsplash.com/photo-1472162072142-384197c2c944?auto=format&fit=crop&w=800&q=80" alt="Creative Learning" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full"></div>
                </section>

                {/* Support from BITZ Enterprises */}
                <section className="mb-24">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 order-2 md:order-1 h-[400px] rounded-[3.5rem] overflow-hidden shadow-2xl relative group">
                            <img src="https://images.unsplash.com/photo-1560419011-0c534438b438?auto=format&fit=crop&w=800&q=80" alt="Support" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-pink-500/10 mix-blend-overlay"></div>
                        </div>
                        <div className="flex-1 order-1 md:order-2 space-y-8">
                            <h2 className="text-4xl font-black italic">Strategic Support</h2>
                            <div className="space-y-6">
                                {[
                                    { title: "Financial Backing", desc: "Ensuring facilities remain modern and world-class." },
                                    { title: "Expertise in Education", desc: "Guiding curriculum design and proactive teacher training." },
                                    { title: "Community Partnerships", desc: "Connecting with parents to create a supportive ecosystem." }
                                ].map((item, i) => (
                                    <div key={i} className={`p-6 rounded-2xl border ${darkMode ? 'bg-zinc-800 border-zinc-700' : 'bg-white border-purple-100 shadow-sm'}`}>
                                        <h4 className="text-xl font-black mb-2 text-purple-500 uppercase tracking-tighter">{item.title}</h4>
                                        <p className="opacity-70 leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Conclusion */}
                <section className={`p-16 rounded-[4rem] text-center ${darkMode ? 'bg-gradient-to-br from-zinc-900 to-black' : 'bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-2xl'} relative overflow-hidden`}>
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-black mb-8 italic italic uppercase tracking-tighter">Sparking a Lifelong Journey</h2>
                        <p className="text-xl leading-relaxed opacity-90 mb-12">
                            BITZ Kidz is more than a preschool program—it is a nurturing space where children grow into confident, curious, and compassionate individuals.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className={`px-10 py-4 font-black rounded-full transition-all hover:scale-105 ${darkMode ? 'bg-purple-600 text-white' : 'bg-white text-purple-600 shadow-lg'}`}>
                                Enroll Your Explorer
                            </button>
                            <Link to="/academy" className={`px-10 py-4 border-2 font-black rounded-full transition-all hover:scale-105 ${darkMode ? 'border-purple-500/30' : 'border-white/30 text-white'}`}>
                                View Academy
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="py-20 text-center opacity-40 text-sm uppercase tracking-widest font-bold">
                © 2026 BITZ KIDZ | THE FUTURE STARTS HERE. 🌟
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

export default Kidz;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Academy = ({ darkMode }) => {
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
                    <span className="text-xl font-black bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">BITZ ACADÉMIE</span>
                </div>
            </div>

            {/* Hero Section */}
            <header className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight animate-fade-in-up">
                        Empowering Tech <span className="text-purple-500 underline decoration-purple-500/30">Enthusiasts</span> for the Future
                    </h1>
                    <p className={`text-xl md:text-2xl font-medium leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'} animate-fade-in-up delay-100`}>
                        Bridging the gap between raw curiosity and structured expertise in the digital economy.
                    </p>
                </div>
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[120px] -z-10"></div>
            </header>

            <main className="max-w-4xl mx-auto px-6 pb-32">
                {/* Introduction & Vision */}
                <section className="mb-20 space-y-8">
                    <div className={`p-8 rounded-[2.5rem] ${darkMode ? 'bg-zinc-900' : 'bg-white'} shadow-xl`}>
                        <h2 className="text-3xl font-black mb-6 text-purple-500 italic">Introduction</h2>
                        <p className="text-lg leading-relaxed opacity-90">
                            In today’s rapidly evolving digital landscape, technology has become the backbone of innovation, entrepreneurship, and global connectivity. As industries transform under the influence of artificial intelligence, cloud computing, cybersecurity, and data science, the demand for skilled professionals continues to rise. BITZ Academy, a forward-thinking institution dedicated to training tech enthusiasts, has emerged as a beacon of opportunity for individuals eager to thrive in this dynamic environment.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 items-center mt-12">
                        <div className="flex-1">
                            <h2 className="text-3xl font-black mb-6 text-purple-500 italic uppercase tracking-wider">The Vision</h2>
                            <p className="text-lg leading-relaxed opacity-90">
                                BITZ Academy was founded with a clear mission: to bridge the gap between raw enthusiasm for technology and the structured expertise required to excel in the digital economy. The academy envisions a world where anyone with curiosity and passion for tech can access high-quality training, regardless of background or prior experience.
                            </p>
                        </div>
                        <div className="flex-1 w-full h-[400px] rounded-[3rem] overflow-hidden shadow-2xl">
                            <img src="/assets/academy-learning.png" alt="Futuristic Learning" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </section>

                {/* Training Approach */}
                <section className="mb-20">
                    <h2 className="text-4xl font-black mb-12 text-center underline decoration-purple-500 decoration-4">Hands-On Training</h2>
                    <div className="flex flex-col lg:flex-row gap-8 mb-12">
                        <div className="lg:w-1/3 h-[400px] rounded-[3rem] overflow-hidden shadow-2xl">
                            <img src="/assets/academy-softdev.png" alt="Software Development" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { title: "Software Development", desc: "Python, JavaScript, and Java. Building real-world applications.", icon: "💻" },
                                { title: "Data Science", desc: "Visualization, machine learning, and statistical analysis.", icon: "📊" },
                                { title: "Cybersecurity", desc: "Protecting systems, networks, and data from evolving threats.", icon: "🛡️" },
                                { title: "Cloud Computing", desc: "AWS, Azure, and Google Cloud infrastructure.", icon: "☁️" },
                            ].map((item, i) => (
                                <div key={i} className={`p-6 rounded-3xl border transition-all duration-300 hover:scale-[1.02] ${darkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-purple-100 shadow-sm'}`}>
                                    <div className="text-3xl mb-3">{item.icon}</div>
                                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                                    <p className="opacity-70 text-[10px] leading-tight">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Image Gap 2 */}
                <section className="mb-20 h-[500px] rounded-[3.5rem] overflow-hidden shadow-2xl relative group">
                    <img src="/assets/academy-mentorship.png" alt="Mentorship at Bitz" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-12">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-2 italic">Mentorship & Community</h2>
                        <p className="text-purple-200 font-medium">Experienced professionals guiding the next generation.</p>
                    </div>
                </section>

                {/* Partnerships & Inclusivity */}
                <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className={`p-10 rounded-[2.5rem] ${darkMode ? 'bg-zinc-900' : 'bg-purple-100/30'}`}>
                        <h2 className="text-2xl font-black mb-6 text-purple-600">Career Development</h2>
                        <ul className="space-y-4">
                            {["Portfolio building workshops", "Mock interviews & coaching", "Networking with recruiters", "Freelancing guidance"].map((li, i) => (
                                <li key={i} className="flex items-center space-x-3">
                                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                                    <span className="font-medium opacity-80">{li}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center gap-6">
                        <div className="h-[250px] w-full rounded-[2rem] overflow-hidden shadow-lg">
                            <img src="/assets/academy-inclusion.png" alt="Diverse Tech Community" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-black mb-4 italic leading-tight">Inclusivity & Accessibility</h2>
                            <p className="text-lg leading-relaxed opacity-90 mb-4">
                                BITZ Academy is committed to democratizing access to tech education. We offer scholarships and flexible options for all.
                            </p>
                            <p className="text-purple-500 font-bold uppercase tracking-tighter text-sm">Women in Tech prioritized.</p>
                        </div>
                    </div>
                </section>

                {/* Impact */}
                <section className="mb-20">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black mb-4">Global Tech Ecosystem Impact</h2>
                        <p className="opacity-70">Graduates are pioneers, not just employees.</p>
                    </div>
                    <div className="w-full h-[500px] rounded-[3.5rem] overflow-hidden shadow-2xl mb-12">
                        <img src="/assets/academy-future.png" alt="Impact on Future" className="w-full h-full object-cover" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center italic font-bold">
                        <div className="p-6 border-b-4 border-purple-500">Launch Startups</div>
                        <div className="p-6 border-b-4 border-purple-500">Digital Transformation</div>
                        <div className="p-6 border-b-4 border-purple-500">Knowledge Sharing</div>
                    </div>
                </section>

                {/* Conclusion */}
                <section className={`p-12 rounded-[3.5rem] relative overflow-hidden text-center ${darkMode ? 'bg-zinc-900' : 'bg-purple-900 text-white'}`}>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-black mb-8 italic italic italic">Conclusion</h2>
                        <p className="text-lg leading-relaxed mb-10 opacity-90 max-w-2xl mx-auto">
                            BITZ Academy stands as a testament to the transformative power of education in technology. It is more than a training institution—it is a launchpad for dreams, a hub for innovation, and a catalyst for change.
                        </p>
                        <button className="px-10 py-4 bg-white text-purple-900 font-black rounded-full hover:scale-105 transition-transform">
                            Apply to Academy
                        </button>
                    </div>
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 blur-3xl rounded-full"></div>
                </section>
            </main>

            {/* Footer space */}
            <footer className="py-20 text-center opacity-40 text-sm">
                © 2026 BITZ ACADEMY | Training the Builders of Tomorrow.
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

export default Academy;

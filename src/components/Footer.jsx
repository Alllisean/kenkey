import React from 'react';

const Footer = ({ t }) => {
    if (!t) return null;

    return (
        <footer className="bg-purple-950 text-white pt-24 pb-12 px-6 rounded-t-[4rem] md:rounded-t-[6rem] shadow-[0_-20px_50px_-12px_rgba(0,0,0,0.3)]">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                <div className="col-span-1 md:col-span-1">
                    <div className="flex items-center space-x-2 mb-8 group/logo cursor-pointer">
                        <div className="w-[18px] h-6 flex items-center justify-center">
                            <svg viewBox="0 0 24 32" className="w-full h-full drop-shadow-sm transition-transform duration-500 group-hover/logo:scale-110" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 32C12 32 0 20.8 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 20.8 12 32 12 32Z" fill="#7E22CE" />
                            </svg>
                        </div>
                        <span className="text-3xl font-black bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent tracking-tighter">BITZ 2.0</span>
                    </div>
                    <p className="text-purple-300/80 text-sm leading-relaxed max-w-xs mb-8">{t.bio}</p>
                    <div className="flex gap-4">
                        {/* Social items */}
                        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-purple-950 transition-all cursor-pointer">𝕏</div>
                        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-purple-950 transition-all cursor-pointer">in</div>
                        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-purple-950 transition-all cursor-pointer">📸</div>
                    </div>
                </div>

                <div className="md:ml-auto">
                    <h4 className="font-bold text-xs uppercase tracking-widest text-purple-400 mb-8">{t.columns?.platform || "Platform"}</h4>
                    <ul className="space-y-4 text-purple-100 text-sm font-medium">
                        <li className="hover:text-white cursor-pointer transition-colors opacity-80 hover:opacity-100">Academy</li>
                        <li className="hover:text-white cursor-pointer transition-colors opacity-80 hover:opacity-100">Enterprise</li>
                        <li className="hover:text-white cursor-pointer transition-colors opacity-80 hover:opacity-100">Spaces</li>
                        <li className="hover:text-white cursor-pointer transition-colors opacity-80 hover:opacity-100">Ventures</li>
                    </ul>
                </div>

                <div className="md:ml-auto">
                    <h4 className="font-bold text-xs uppercase tracking-widest text-purple-400 mb-8">{t.columns?.community || "Community"}</h4>
                    <ul className="space-y-4 text-purple-100 text-sm font-medium">
                        <li className="hover:text-white cursor-pointer transition-colors opacity-80 hover:opacity-100">Champions</li>
                        <li className="hover:text-white cursor-pointer transition-colors opacity-80 hover:opacity-100">Alumni</li>
                        <li className="hover:text-white cursor-pointer transition-colors opacity-80 hover:opacity-100">Mentors</li>
                        <li className="hover:text-white cursor-pointer transition-colors opacity-80 hover:opacity-100">Sponsors</li>
                    </ul>
                </div>

                <div className="md:ml-auto">
                    <h4 className="font-bold text-xs uppercase tracking-widest text-purple-400 mb-8">{t.columns?.connect || "Connect"}</h4>
                    <div className="flex flex-col gap-6">
                        <div className="p-1 pr-1 pl-6 bg-white/5 border border-white/10 rounded-full flex items-center focus-within:border-white/30 transition-all">
                            <input
                                type="email"
                                placeholder={t.newsletter?.placeholder || "Email..."}
                                className="bg-transparent border-none text-sm w-full outline-hidden text-white placeholder:text-purple-400/50"
                            />
                            <button className="bg-white text-purple-950 px-6 py-3 rounded-full text-xs font-black hover:scale-105 transition-all active:scale-95">
                                {t.newsletter?.button || "JOIN"}
                            </button>
                        </div>
                        <p className="text-[10px] text-purple-400 italic">Stay ahead of the curve with our weekly digest.</p>
                    </div>
                </div>
            </div>

            <div className="max-w-screen-xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-purple-500 font-bold uppercase tracking-widest">
                <p>{t.bottom?.rights || "© 2026 BITZ 2.0 Global."}</p>
                <div className="flex gap-8 mt-6 md:mt-0">
                    <a href="#" className="hover:text-white transition-colors">{t.bottom?.privacy || "Privacy"}</a>
                    <a href="#" className="hover:text-white transition-colors">{t.bottom?.terms || "Terms"}</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

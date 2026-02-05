import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const useIsVisible = (ref) => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        });
        if (ref.current) observer.observe(ref.current);
        return () => { if (ref.current) observer.unobserve(ref.current); };
    }, [ref]);
    return isVisible;
};

// SECTION 1: Platform Spotlight
export const PlatformSection = ({ t, darkMode, highlightedActivity, setHighlightedActivity }) => {
    const ref = useRef(null);
    const isVisible = useIsVisible(ref);
    const [activeHighlight, setActiveHighlight] = useState(null);

    useEffect(() => {
        if (highlightedActivity) {
            // 1. Scroll to section
            ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // 2. Set active highlight for the card
            setActiveHighlight(highlightedActivity);

            // 3. Clear highlight after animation
            const timer = setTimeout(() => {
                setActiveHighlight(null);
                setHighlightedActivity(null);
            }, 4000);

            return () => clearTimeout(timer);
        }
    }, [highlightedActivity, setHighlightedActivity]);

    if (!t) return null;

    const platforms = [
        {
            name: t.nav.bitz.academy,
            icon: "🎓",
            desc: "Training the next generation of builders.",
            img: "/assets/academy-learning.png"
        },
        {
            name: t.nav.bitz.enterprise,
            icon: "🏢",
            desc: "Scaling solutions for modern business.",
            img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
        },
        {
            name: t.nav.bitz.spaces,
            icon: "🛰️",
            desc: "Infrastructure for decentralized growth.",
            img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
        },
        {
            name: t.nav.bitz.ventures,
            icon: "🚀",
            desc: "Funding Africa's most ambitious ideas.",
            img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80"
        },
        {
            name: t.nav.bitz.kids,
            icon: "🎨",
            desc: "Inspiring the next generation of digital creators.",
            img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <section ref={ref} className={`py-24 transition-colors duration-500 ${darkMode ? 'bg-black' : 'bg-zinc-50'}`}>
            <div className="max-w-6xl mx-auto px-6">
                <h2 className={`text-4xl font-bold text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${darkMode ? 'text-white' : 'text-purple-900'}`}>
                    {t.nav?.activities || "Our Activities"}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                    {platforms.map((p, i) => {
                        const isAcademy = p.name === t.nav.bitz.academy;
                        const isEnterprise = p.name === t.nav.bitz.enterprise;
                        const isSpaces = p.name === t.nav.bitz.spaces;
                        const isVentures = p.name === t.nav.bitz.ventures;
                        const isKids = p.name === t.nav.bitz.kids;
                        const isActive = activeHighlight === 'ALL' || activeHighlight === p.name;

                        const CardContent = (
                            <div
                                className={`h-[300px] relative rounded-[2rem] bg-zinc-200 overflow-hidden group shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${isVisible ? 'animate-pop-up' : 'opacity-0'} ${isActive ? 'animate-pulse-glow z-10' : ''}`}
                                style={{ animationDelay: `${i * 0.1}s` }}
                            >
                                {/* Interactive Image Placeholder */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                                    style={{ backgroundImage: `url(${p.img})` }}
                                >
                                    {/* Fallback color if image fails */}
                                    <div className="absolute inset-0 bg-zinc-900/10"></div>
                                </div>

                                {/* Hover Overlay: CLEAR Light Purple Translucent Hue */}
                                <div className={`absolute inset-0 bg-purple-600/30 backdrop-blur-md transition-all duration-500 flex flex-col items-center justify-center p-6 text-center ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                                    {/* Content revealed only on hover or active */}
                                    <div className={`text-4xl mb-4 transition-transform duration-500 ${isActive ? 'translate-y-0' : 'translate-y-4 group-hover:translate-y-0'}`}>{p.icon}</div>
                                    <h3 className={`text-lg font-black text-white mb-2 transition-transform duration-500 delay-75 ${isActive ? 'translate-y-0' : 'translate-y-4 group-hover:translate-y-0'}`}>{p.name}</h3>
                                    <p className={`text-purple-100 font-bold text-[10px] leading-relaxed transition-transform duration-500 delay-100 italic ${isActive ? 'translate-y-0' : 'translate-y-4 group-hover:translate-y-0'}`}>
                                        {p.desc}
                                    </p>
                                    {(isAcademy || isEnterprise || isSpaces || isVentures || isKids) && (
                                        <div className={`mt-4 px-4 py-1 bg-white text-purple-900 text-[10px] font-black rounded-full transition-transform duration-500 delay-150 ${isActive ? 'translate-y-0' : 'translate-y-4 group-hover:translate-y-0'}`}>
                                            {isAcademy ? 'VIEW PROGRAM' : isEnterprise ? 'VIEW PARTNERSHIP' : isSpaces ? 'EXPLORE SPACES' : isVentures ? 'EXPLORE VENTURES' : 'LEARN MORE'}
                                        </div>
                                    )}
                                </div>
                            </div>
                        );

                        if (isAcademy || isEnterprise || isSpaces || isVentures || isKids) {
                            return (
                                <Link key={i} to={isAcademy ? "/academy" : isEnterprise ? "/enterprise" : isSpaces ? "/spaces" : isVentures ? "/ventures" : "/kidz"} className="block outline-none">
                                    {CardContent}
                                </Link>
                            );
                        }

                        return <div key={i}>{CardContent}</div>;
                    })}
                </div>
            </div>
        </section>
    );
};

const AnimatedCounter = ({ value, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !hasStarted) {
                setHasStarted(true);
            }
        });
        if (countRef.current) observer.observe(countRef.current);
        return () => { if (countRef.current) observer.unobserve(countRef.current); };
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;

        let startTime;
        const endValue = parseFloat(value.replace(/[^0-9.]/g, ''));
        const suffix = value.replace(/[0-9.]/g, '');

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const currentCount = progress * endValue;

            if (endValue % 1 === 0) {
                setCount(Math.floor(currentCount) + suffix);
            } else {
                setCount(currentCount.toFixed(1) + suffix);
            }

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [hasStarted, value, duration]);

    return <span ref={countRef}>{count}</span>;
};

// SECTION 2: Impact
export const ImpactSection = ({ t, darkMode }) => {
    const ref = useRef(null);
    const isVisible = useIsVisible(ref);
    const [isImpactActive, setIsImpactActive] = useState(false); // Mobile tap state

    if (!t) return null;

    const icons = {
        countries: "🌍",
        youth: "🤝",
        spaces: "📍",
        funding: "💰",
        startups: "💡",
        employment: "📈",
        hubs: "🏗️",
        users: "📱"
    };

    const stats = [
        { key: 'countries', value: '54' },
        { key: 'youth', value: '1.2M' },
        { key: 'spaces', value: '450' },
        { key: 'funding', value: '$2.5B' }
    ];

    return (
        <section ref={ref} className={`py-24 transition-colors duration-500 overflow-hidden ${darkMode ? 'bg-black' : 'bg-zinc-50'}`}>
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="flex flex-col gap-12 text-left">
                    {/* Top aligned header/intro */}
                    <div className="max-w-2xl">
                        <h2 className={`text-4xl md:text-5xl font-extrabold mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} ${darkMode ? 'text-white' : 'text-purple-900'}`}>
                            {t.title}
                        </h2>
                        <p className={`leading-relaxed transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} ${darkMode ? 'text-purple-300' : 'text-purple-600/70'}`}>
                            We are committed to building the digital infrastructure that empowers the next generation of African innovators.
                        </p>
                    </div>

                    {/* Main Content Area: Cards + Image Area */}
                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        {/* Stacked Cards on the extreme left */}
                        <div className="flex flex-col gap-6 items-start w-full lg:w-1/2">
                            {stats.map((stat, i) => (
                                <div
                                    key={stat.key}
                                    className={`w-full max-w-md p-6 rounded-3xl transition-all duration-500 cursor-default flex items-center gap-6 shadow-sm hover:shadow-xl hover:-translate-y-1 ${isVisible ? 'animate-pop-up' : 'opacity-0'} ${darkMode ? 'bg-zinc-900 group hover:bg-purple-900' : 'bg-purple-50 group hover:bg-purple-900'}`}
                                    style={{ animationDelay: `${i * 0.1}s` }}
                                >
                                    <div className={`text-3xl w-14 h-14 flex items-center justify-center rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-500 ${darkMode ? 'bg-zinc-800' : 'bg-white'}`}>
                                        {icons[stat.key]}
                                    </div>
                                    <div>
                                        <div className={`text-3xl font-black transition-colors ${darkMode ? 'text-white' : 'text-purple-950 group-hover:text-white'}`}>
                                            <AnimatedCounter value={stat.value} />
                                        </div>
                                        <div className={`font-bold text-[10px] uppercase tracking-[0.2em] transition-colors ${darkMode ? 'text-purple-400 group-hover:text-purple-200' : 'text-purple-400 group-hover:text-purple-200'}`}>
                                            {t.stats[stat.key]}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Vertical Image / Impact Visual */}
                        <div
                            onClick={() => setIsImpactActive(!isImpactActive)}
                            className={`hidden lg:flex flex-1 w-full h-[580px] rounded-[3rem] relative overflow-hidden group transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                        >
                            {/* Professional Background Image - High Res + Zoom + Blur on hover */}
                            <div
                                className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 group-hover:scale-110 group-hover:blur-sm ${isImpactActive ? 'scale-110 blur-sm' : ''}`}
                                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=2000&q=90")' }}
                            >
                                <div className={`absolute inset-0 bg-black/10 transition-opacity duration-700 group-hover:opacity-0 ${isImpactActive ? 'opacity-0' : ''}`}></div>
                            </div>

                            {/* Hover Overlay Content */}
                            <div className={`absolute inset-0 transition-all duration-500 flex flex-col items-center justify-center p-12 text-center bg-purple-900/20 backdrop-blur-md ${isImpactActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                                <div className={`bg-white/10 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/20 transition-all duration-500 ${isImpactActive ? 'translate-y-0' : 'transform translate-y-8 group-hover:translate-y-0'}`}>
                                    <div className="text-4xl mb-6">🌍</div>
                                    <h3 className="text-xl font-black text-white mb-2 uppercase tracking-widest leading-none">
                                        Empowering <br /> Innovation
                                    </h3>
                                    <p className="text-purple-100 text-[10px] font-bold uppercase tracking-[0.2em] mt-2">
                                        Across Africa
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// SECTION 3: Partners
export const PartnerSection = ({ t, darkMode }) => {
    if (!t) return null;
    return (
        <section className={`py-20 transition-colors duration-500 ${darkMode ? 'bg-black' : 'bg-zinc-50'}`}>
            <div className="max-w-screen-xl mx-auto px-6 text-center">
                <h3 className={`font-black mb-12 uppercase tracking-[0.4em] text-[10px] ${darkMode ? 'text-purple-400/50' : 'text-purple-200'}`}>{t.title}</h3>
                <div className={`flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 transition-all duration-700 ${darkMode ? 'grayscale-0' : 'grayscale-0 lg:grayscale lg:hover:grayscale-0'}`}>
                    <div className={`text-2xl font-black ${darkMode ? 'text-white' : 'text-purple-900'}`}>GOOGLE</div>
                    <div className={`text-2xl font-black ${darkMode ? 'text-white' : 'text-purple-900'}`}>MICROSOFT</div>
                    <div className={`text-2xl font-black ${darkMode ? 'text-white' : 'text-purple-900'}`}>AWS</div>
                    <div className={`text-2xl font-black ${darkMode ? 'text-white' : 'text-purple-900'}`}>META</div>
                </div>
            </div>
        </section>
    );
};

// SECTION 4: Testimonials
export const TestimonialSection = ({ t, darkMode }) => {
    const ref = useRef(null);
    const isVisible = useIsVisible(ref);
    if (!t) return null;

    return (
        <section ref={ref} className={`py-32 flex items-center justify-center overflow-hidden transition-colors duration-500 ${darkMode ? 'bg-black' : 'bg-zinc-50'}`}>
            <div className="max-w-4xl mx-auto px-6 text-center relative">
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-serif leading-none select-none z-0 transition-colors duration-500 ${darkMode ? 'text-zinc-900' : 'text-purple-100'}`}>“</div>
                <div className="relative z-10">
                    <h2 className={`font-bold text-xs uppercase tracking-widest mb-12 ${darkMode ? 'text-purple-400' : 'text-purple-400'}`}>{t.title}</h2>
                    <blockquote className={`text-3xl md:text-4xl italic leading-tight mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} ${darkMode ? 'text-white' : 'text-purple-950'}`}>
                        “{t.quote}”
                    </blockquote>
                    <cite className={`font-black not-italic text-sm uppercase tracking-tighter ${darkMode ? 'text-purple-300' : 'text-purple-900'}`}>— {t.position}</cite>
                </div>
            </div>
        </section>
    );
};

// SECTION 5: FAQ
export const FAQSection = ({ t, darkMode }) => {
    if (!t) return null;
    return (
        <section className={`py-24 transition-colors duration-500 ${darkMode ? 'bg-black' : 'bg-zinc-50'}`}>
            <div className="max-w-3xl mx-auto px-6">
                <h2 className={`text-4xl font-bold mb-16 text-center ${darkMode ? 'text-white' : 'text-purple-900'}`}>{t.title}</h2>
                <div className="space-y-4">
                    {t.questions.map((q, i) => (
                        <details key={i} className={`group rounded-2xl border overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 ${darkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-purple-100'}`}>
                            <summary className={`list-none p-6 flex justify-between items-center text-lg font-bold transition-all duration-300 ${darkMode ? 'text-white hover:text-purple-400' : 'text-purple-950 hover:text-purple-700'}`}>
                                {q.q}
                                <span className={`transition-all duration-300 group-open:rotate-45 text-2xl ${darkMode ? 'text-zinc-500 group-hover:text-purple-400' : 'text-purple-300 group-hover:text-purple-600'}`}>+</span>
                            </summary>
                            <div className={`px-6 pb-6 font-semibold leading-relaxed text-sm duration-300 ${darkMode ? 'text-zinc-400' : 'text-black'}`}>
                                {q.a}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};

// SECTION 6: Final CTA
export const ContactSection = ({ t, darkMode }) => {
    const ref = useRef(null);
    const isVisible = useIsVisible(ref);
    if (!t) return null;

    return (
        <section ref={ref} className={`py-32 transition-colors duration-500 ${darkMode ? 'bg-black' : 'bg-zinc-50'}`}>
            <div className="max-w-5xl mx-auto px-6">
                <div className={`rounded-[3rem] p-12 md:p-20 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} ${darkMode ? 'bg-zinc-900' : 'bg-zinc-100'}`}>
                    <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-purple-950'}`}>{t.title}</h2>
                    <p className={`text-lg mb-12 max-w-2xl mx-auto leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-purple-600'}`}>{t.text}</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-purple-900 text-white px-10 py-4 rounded-full font-black hover:bg-purple-800 transition-all shadow-xl shadow-purple-900/10">
                            {t.cta1}
                        </button>
                        <button className={`border-2 px-10 py-4 rounded-full font-black transition-all ${darkMode ? 'border-purple-400 text-purple-400 hover:bg-purple-400/10' : 'border-purple-900 text-purple-900 hover:bg-zinc-50'}`}>
                            {t.cta2}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

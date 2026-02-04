import React from 'react';

const TickerRow = ({ items, speedClass }) => (
    <div className="flex overflow-hidden py-1 border-b border-white/5 last:border-0">
        <div className={`flex whitespace-nowrap ${speedClass}`}>
            {[...items, ...items].map((item, index) => (
                <span
                    key={index}
                    className="text-zinc-400 text-sm font-bold mx-4 uppercase hover:text-white transition-colors cursor-default"
                >
                    {item}
                </span>
            ))}
        </div>
    </div>
);

const CountryTicker = ({ t }) => {
    if (!t) return null;

    return (
        <div className="bg-transparent backdrop-blur-xl border-t border-white/10 overflow-hidden select-none py-2">
            <TickerRow items={t.list1} speedClass="animate-scroll-left" />
            <TickerRow items={t.list2} speedClass="animate-scroll-right" />
            <TickerRow items={t.list3} speedClass="animate-scroll-left" />
        </div>
    );
};

export default CountryTicker;

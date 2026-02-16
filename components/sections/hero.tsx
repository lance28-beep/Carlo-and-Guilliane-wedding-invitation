/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import { siteConfig } from '@/content/site';
import { Monogram } from '@/components/Monogram';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const ceremonyVenue = siteConfig.ceremony.location;
  const ceremonyAddress = siteConfig.ceremony.location;
  const receptionVenue = siteConfig.reception.location;
  const receptionAddress = siteConfig.reception.location;
  const weddingDate = new Date('2026-03-21T09:30:00+08:00');
  const dayNumber = String(weddingDate.getDate());
  const yearNumber = String(weddingDate.getFullYear());

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Corner Decorations */}
      {/* {[
        { key: 'tl', className: 'top-0 left-0 scale-x-[-1]' },
        { key: 'tr', className: 'top-0 right-0' },
        { key: 'bl', className: 'bottom-0 left-0 scale-x-[-1] scale-y-[-1]' },
        { key: 'br', className: 'bottom-0 right-0 scale-y-[-1]' },
      ].map((corner) => (
        <div
          key={corner.key}
          className={`absolute ${corner.className} z-[1] pointer-events-none`}
        >
          <img
            src="/decoration/top-right-corner-automleaves.png"
            alt=""
            aria-hidden="true"
            className="w-44 sm:w-52 md:w-60 lg:w-72 xl:w-80 2xl:w-96 h-auto opacity-80"
          />
        </div>
      ))} */}

      <div className="relative z-10 w-full container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col items-center justify-center min-h-screen py-16 sm:py-20">
        {/* Elegant Card Container */}
        <div
          className={[
            'w-full max-w-3xl',
            'rounded-xl sm:rounded-2xl',
            'p-7 sm:p-10 md:p-12 lg:p-14',
            'text-center',
            'space-y-5 sm:space-y-7 md:space-y-9',
            'transition-all duration-1000 ease-out',
            'premium-shadow',
            'border-2 border-[#800A06]/25',
            'bg-[#EFCA93]',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ].join(' ')}
        >
          {/* Monogram - Center */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
              <Monogram
                className="w-full h-full"
                label={`${siteConfig.couple.groomNickname} & ${siteConfig.couple.brideNickname} Monogram`}
              />
            </div>
          </div>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#9F8650] to-transparent" />
          </div>

          {/* Opening Text */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-[family-name:var(--font-cinzel)] font-normal text-[#9B4719] tracking-wide px-4">
            Together with our families, we,
          </p>

          {/* Names (single H1 for better semantics) */}
          <h1 className="px-2">
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-[family-name:var(--font-cinzel)] font-normal text-[#9B4719] uppercase tracking-[0.12em] sm:tracking-[0.15em] leading-tight elegant-text-shadow">
              {siteConfig.couple.groom.toUpperCase()}
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-dialtones)] font-normal text-[#9F8650] my-3 sm:my-5 md:my-7">
              and
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-[family-name:var(--font-cinzel)] font-normal text-[#9B4719] uppercase tracking-[0.12em] sm:tracking-[0.15em] leading-tight elegant-text-shadow">
              {siteConfig.couple.bride.toUpperCase()}
            </span>
          </h1>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#9F8650] to-transparent" />
          </div>

          {/* Request Text */}
          <p className="text-xs sm:text-sm md:text-base font-[family-name:var(--font-cinzel)] font-normal text-[#9B4719] tracking-wide max-w-xl mx-auto px-6 sm:px-8 leading-relaxed">
            request the honor of your presence as we are unified in marriage before our Lord God.
          </p>

          {/* Date Display with elegant earth tone accents */}
          <div className="space-y-3 pt-4 sm:pt-6 px-4">
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <div className="h-[1px] w-12 sm:w-16 md:w-20 bg-gradient-to-r from-transparent via-[#9F8650] to-[#9F8650]" />
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-[family-name:var(--font-cinzel)] font-normal text-[#9F8650] tracking-wider uppercase">
                March
              </p>
              <div className="h-[1px] w-12 sm:w-16 md:w-20 bg-gradient-to-l from-transparent via-[#9F8650] to-[#9F8650]" />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 text-[#9B4719]">
              <span className="text-xs sm:text-sm md:text-base font-[family-name:var(--font-crimson)] font-light uppercase tracking-wider text-[#9F8650]">
                {siteConfig.ceremony.day.toUpperCase()}
              </span>
              <span className="text-6xl sm:text-7xl md:text-8xl font-[family-name:var(--font-crimson)] font-light my-2 sm:my-0 elegant-text-shadow">
                {dayNumber}
              </span>
              <span className="text-xs sm:text-sm md:text-base font-[family-name:var(--font-crimson)] font-light uppercase tracking-wider text-[#9F8650]">
                {siteConfig.ceremony.time}
              </span>
            </div>

            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-crimson)] font-light text-[#9B4719]">
              {yearNumber}
            </p>
          </div>

          {/* Ceremony with warm gold accent */}
          <div className="pt-4 sm:pt-6">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#9F8650] to-transparent" />
            </div>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-dialtones)] font-normal text-[#9F8650] px-4">
              Ceremony
            </p>
            <div className="flex items-center justify-center gap-3 mt-3">
              <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#9F8650] to-transparent" />
            </div>
          </div>

          {/* Venue Details */}
          <div className="space-y-4 pb-4 sm:pb-6 px-4">
            <div className="space-y-1.5">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-[family-name:var(--font-cinzel)] font-normal text-[#9F8650] uppercase tracking-wider">
                {ceremonyVenue}
              </p>
  
            </div>

            <div className="flex items-center justify-center gap-2">
              <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent via-[#9F8650]/60 to-transparent" />
              <span className="w-1 h-1 rounded-full bg-[#9F8650]/70" />
              <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent via-[#9F8650]/60 to-transparent" />
            </div>

            <div className="space-y-1.5">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-[family-name:var(--font-cinzel)] font-normal text-[#9B4719] uppercase tracking-wider">
                {receptionVenue}
              </p>

            </div>
          </div>

          {/* Elegant CTA Button with earth tone gradient */}
          <div className="pt-6 sm:pt-8">
            <a
              href="#guest-list"
              className="inline-flex items-center gap-2 sm:gap-3 px-8 sm:px-10 md:px-12 lg:px-14 py-3 sm:py-3.5 md:py-4 font-[family-name:var(--font-cinzel)] font-normal text-sm sm:text-base md:text-lg text-[#EFCA93] bg-[#6A1F08] hover:bg-[#6A1F08]/90 transition-all duration-300 tracking-wider uppercase border-2 border-[#6A1F08] hover:border-[#6A1F08]/80 hover:scale-[1.03] hover:shadow-[0_10px_30px_rgba(106,31,8,0.35)] active:scale-100 premium-shadow rounded-sm relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
              <Heart
                size={16}
                className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover:scale-110 transition-transform duration-300"
              />
              <span className="relative z-10">RSVP</span>
            </a>
          </div>

          {/* Bottom decorative line */}
          <div className="flex items-center justify-center gap-3 pt-6">
            <div className="h-[1px] w-24 sm:w-32 bg-gradient-to-r from-transparent via-[#9F8650] to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
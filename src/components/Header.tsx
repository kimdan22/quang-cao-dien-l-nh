import React from 'react';
import { Phone, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

export const Header: React.FC = () => {
  return (
    <header
      id="header"
      className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
        {/* Left: Brand name & quick commitment */}
        <a href="#hero" className="flex flex-col justify-center group focus:outline-none">
          <span className="text-lg sm:text-xl font-extrabold tracking-tight text-blue-900 group-hover:text-blue-700 transition-colors uppercase">
            {CONTACT_INFO.brandName}
          </span>
          <span className="flex items-center gap-1 text-xs text-slate-500 font-medium">
            <Clock className="w-3 h-3 text-blue-600 shrink-0" />
            <span>{CONTACT_INFO.subBrand}</span>
          </span>
        </a>

        {/* Right Desktop: Hotline number + CTA button */}
        <div className="hidden md:flex items-center gap-4">
          <div className="text-right">
            <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
              Hotline hỗ trợ tại Hà Nội
            </span>
            <a
              href={CONTACT_INFO.hotlineTel}
              className="text-base font-extrabold text-blue-950 hover:text-blue-700 tracking-tight transition-colors"
            >
              {CONTACT_INFO.hotline}
            </a>
          </div>

          <a
            id="header-call-btn"
            href={CONTACT_INFO.hotlineTel}
            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold px-4 py-2 rounded-lg text-sm shadow-sm hover:shadow transition-all active:scale-95 whitespace-nowrap"
          >
            <Phone className="w-4 h-4 shrink-0 fill-current" />
            <span>GỌI NGAY</span>
          </a>
        </div>

        {/* Right Mobile: Compact Quick Call CTA */}
        <div className="flex md:hidden items-center">
          <a
            id="header-call-btn-mobile"
            href={CONTACT_INFO.hotlineTel}
            className="inline-flex items-center gap-1.5 bg-orange-600 hover:bg-orange-700 text-white font-bold px-3 py-1.5 rounded-lg text-xs shadow-sm active:scale-95 whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 shrink-0 fill-current" />
            <span>GỌI NGAY</span>
          </a>
        </div>
      </div>
    </header>
  );
};

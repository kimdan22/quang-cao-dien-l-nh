import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

export const BottomCTA: React.FC = () => {
  return (
    <section id="cta-banner" className="py-12 sm:py-16 bg-gradient-to-r from-blue-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight mb-4 text-white leading-tight">
          MÁY GIẶT CÓ MÙI? GIẶT KHÔNG SẠCH? KHÔNG VẮT?
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-blue-200 mb-8 max-w-2xl mx-auto font-medium">
          Liên hệ Điện Lạnh Quang Cảnh để được tư vấn về tình trạng máy giặt.
        </p>

        {/* 2 Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-5">
          <a
            id="bottom-banner-call-btn"
            href={CONTACT_INFO.hotlineTel}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-orange-600 hover:bg-orange-700 text-white font-extrabold px-6 py-3.5 rounded-xl text-base shadow-lg transition-all active:scale-95 whitespace-nowrap"
          >
            <Phone className="w-5 h-5 shrink-0 fill-current" />
            <span>GỌI {CONTACT_INFO.hotline}</span>
          </a>

          <a
            id="bottom-banner-zalo-btn"
            href={CONTACT_INFO.zaloUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold px-6 py-3.5 rounded-xl text-base shadow-lg transition-all active:scale-95 whitespace-nowrap"
          >
            <MessageCircle className="w-5 h-5 shrink-0 fill-current" />
            <span>ZALO {CONTACT_INFO.zalo}</span>
          </a>
        </div>

        {/* Dòng nhỏ */}
        <p className="text-xs sm:text-sm text-blue-300 font-medium">
          Vệ sinh & sửa chữa máy giặt tại nhà Hà Nội
        </p>
      </div>
    </section>
  );
};

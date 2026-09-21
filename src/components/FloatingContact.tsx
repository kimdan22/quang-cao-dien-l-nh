import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

export const FloatingContact: React.FC = () => {
  return (
    <>
      {/* =========================================================================
          DESKTOP FLOATING BUTTONS (Fixed bottom-right corner)
          - Button 1: GỌI NGAY 096 577 5972 (tel:0965775972)
          - Button 2: ZALO 032 990 1465 (https://zalo.me/0329901465)
         ========================================================================= */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col gap-3 items-end">
        {/* Zalo Desktop Floating Button */}
        <a
          id="desktop-float-zalo"
          href={CONTACT_INFO.zaloUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white pl-4 pr-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 border-2 border-white/80"
          aria-label="Nhắn Zalo 032 990 1465"
        >
          <div className="w-8 h-8 rounded-full bg-white text-blue-600 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform">
            <MessageCircle className="w-5 h-5 fill-current" />
          </div>
          <div className="text-left">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-blue-100 leading-none">
              💬 ZALO
            </span>
            <span className="text-sm font-black tracking-tight leading-tight">
              {CONTACT_INFO.zalo}
            </span>
          </div>
        </a>

        {/* Hotline Call Desktop Floating Button */}
        <a
          id="desktop-float-call"
          href={CONTACT_INFO.hotlineTel}
          className="group flex items-center gap-3 bg-orange-600 hover:bg-orange-700 text-white pl-4 pr-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 border-2 border-white/80 pulse-ring"
          aria-label="Gọi ngay 096 577 5972"
        >
          <div className="w-8 h-8 rounded-full bg-white text-orange-600 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform">
            <Phone className="w-5 h-5 fill-current" />
          </div>
          <div className="text-left">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-orange-100 leading-none">
              📞 GỌI NGAY
            </span>
            <span className="text-sm font-black tracking-tight leading-tight">
              {CONTACT_INFO.hotline}
            </span>
          </div>
        </a>
      </div>

      {/* =========================================================================
          MOBILE FIXED BOTTOM CTA BAR
          - Always visible on mobile screens
          - Divided into 2 large, finger-friendly buttons
          - High contrast, doesn't overlap text awkwardly
         ========================================================================= */}
      <div
        id="mobile-bottom-cta-bar"
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] p-2.5 px-3 safe-area-pb"
      >
        <div className="grid grid-cols-2 gap-2.5">
          {/* Mobile Call Button */}
          <a
            id="mobile-bar-call-btn"
            href={CONTACT_INFO.hotlineTel}
            className="flex items-center justify-center gap-2 bg-orange-600 active:bg-orange-700 text-white font-bold py-3 px-2 rounded-xl text-center shadow-sm active:scale-98 transition-all whitespace-nowrap"
          >
            <Phone className="w-4 h-4 fill-current shrink-0" />
            <div className="text-left leading-tight">
              <span className="block text-[10px] uppercase font-bold tracking-wider text-orange-100">
                GỌI NGAY
              </span>
              <span className="text-xs font-black tracking-tight">
                {CONTACT_INFO.hotline}
              </span>
            </div>
          </a>

          {/* Mobile Zalo Button */}
          <a
            id="mobile-bar-zalo-btn"
            href={CONTACT_INFO.zaloUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-blue-600 active:bg-blue-700 text-white font-bold py-3 px-2 rounded-xl text-center shadow-sm active:scale-98 transition-all whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-current shrink-0" />
            <div className="text-left leading-tight">
              <span className="block text-[10px] uppercase font-bold tracking-wider text-blue-100">
                NHẮN ZALO
              </span>
              <span className="text-xs font-black tracking-tight">
                {CONTACT_INFO.zalo}
              </span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

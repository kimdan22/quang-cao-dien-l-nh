import React from 'react';
import { MapPin } from 'lucide-react';

export const TrustBar: React.FC = () => {
  return (
    <section id="trust-bar" className="bg-blue-900 text-white py-4 shadow-sm border-b border-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          {/* Main Services Summary with clear priority */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-6 text-sm sm:text-base font-semibold">
            <span className="text-blue-200 uppercase tracking-wider text-xs font-bold block w-full sm:w-auto">
              Dịch vụ hỗ trợ:
            </span>
            <div className="inline-flex items-center gap-1.5 bg-blue-800/80 px-3 py-1.5 rounded-lg border border-blue-700/60">
              <span className="text-lg">🧼</span>
              <span className="text-amber-300 font-bold">VỆ SINH & SỬA MÁY GIẶT</span>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-blue-800/50 px-2.5 py-1.5 rounded-lg border border-blue-700/40 text-blue-100">
              <span className="text-base">❄️</span>
              <span>ĐIỀU HÒA</span>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-blue-800/50 px-2.5 py-1.5 rounded-lg border border-blue-700/40 text-blue-100">
              <span className="text-base">♨️</span>
              <span>BÌNH NÓNG LẠNH</span>
            </div>
          </div>

          {/* Location note */}
          <div className="flex items-center gap-1.5 text-xs sm:text-sm text-blue-200 font-medium">
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Hỗ trợ khách hàng tại Hà Nội</span>
          </div>
        </div>
      </div>
    </section>
  );
};

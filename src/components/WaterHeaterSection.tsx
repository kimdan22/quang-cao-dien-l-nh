import React from 'react';
import { Phone, AlertCircle } from 'lucide-react';
import { WATER_HEATER_ISSUES, CONTACT_INFO, IMAGES } from '../data/content';

export const WaterHeaterSection: React.FC = () => {
  return (
    <section id="binh-nong-lanh" className="py-8 sm:py-10 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* 1 Water heater image (Compact) */}
            <div className="md:col-span-4">
              <div className="overflow-hidden rounded-lg border border-slate-200">
                <img
                  src={IMAGES.waterHeaterRepair}
                  alt="Kỹ thuật viên kiểm tra sửa chữa bình nóng lạnh tại Hà Nội"
                  className="w-full h-44 object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content & 4 Small Boxes */}
            <div className="md:col-span-8">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1 block">
                Dịch vụ phụ
              </span>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 uppercase mb-2">
                SỬA CHỮA BÌNH NÓNG LẠNH
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-4">
                Hỗ trợ kiểm tra và sửa chữa các sự cố thường gặp của bình nóng lạnh tại khu vực phục vụ.
              </p>

              {/* 4 small boxes */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
                {WATER_HEATER_ISSUES.map((issue) => (
                  <div
                    key={issue.title}
                    className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-center"
                  >
                    <div className="flex items-center justify-center gap-1 text-xs font-bold text-slate-800">
                      <AlertCircle className="w-3 h-3 text-orange-500 shrink-0" />
                      <span>{issue.title}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div>
                <a
                  id="water-heater-call-btn"
                  href={CONTACT_INFO.hotlineTel}
                  className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold px-4 py-2 rounded-lg text-xs sm:text-sm shadow-xs transition-all active:scale-95 whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5 shrink-0 fill-current" />
                  <span>GỌI TƯ VẤN</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

export const ServiceArea: React.FC = () => {
  return (
    <section id="khu-vuc-phuc-vu" className="py-12 sm:py-14 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-700 mb-4">
          <MapPin className="w-6 h-6" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase tracking-tight mb-3">
          HỖ TRỢ TẠI HÀ NỘI
        </h2>

        <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-3 font-medium">
          Điện Lạnh Quang Cảnh hỗ trợ vệ sinh và sửa chữa máy giặt, điều hòa và bình nóng lạnh tại Hà Nội.
        </p>

        {/* Microcopy strictly as requested */}
        <p className="text-xs sm:text-sm text-slate-500 italic mb-6">
          Vui lòng liên hệ để xác nhận khu vực hỗ trợ và tình trạng thiết bị.
        </p>

        {/* CTA */}
        <div>
          <a
            id="service-area-call-btn"
            href={CONTACT_INFO.hotlineTel}
            className="inline-flex items-center gap-2.5 bg-orange-600 hover:bg-orange-700 text-white font-extrabold px-6 py-3 rounded-xl text-base shadow-sm hover:shadow transition-all active:scale-95 whitespace-nowrap"
          >
            <Phone className="w-5 h-5 shrink-0 fill-current" />
            <span>GỌI {CONTACT_INFO.hotline}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { AC_PROBLEMS, CONTACT_INFO, IMAGES } from '../data/content';

export const AirConditionerSection: React.FC = () => {
  return (
    <section id="dieu-hoa" className="py-10 sm:py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Service 2, concise */}
        <div className="max-w-3xl mb-8">
          <span className="inline-block text-xs font-bold tracking-wider uppercase text-slate-500 bg-slate-100 px-3 py-1 rounded-full mb-2">
            Dịch vụ bổ sung
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
            VỆ SINH & SỬA CHỮA ĐIỀU HÒA TẠI HÀ NỘI
          </h2>
          <p className="mt-1.5 text-slate-600 text-sm sm:text-base">
            Hỗ trợ kiểm tra, vệ sinh và xử lý các tình trạng điều hòa hoạt động không bình thường.
          </p>
        </div>

        {/* Layout: AC Image (1 image) + Problems list (ĐIỀU HÒA KÉM MÁT on top) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* 1 AC Image */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
              <img
                src={IMAGES.acMaintenance}
                alt="Kỹ thuật viên vệ sinh bảo dưỡng điều hòa tại Hà Nội"
                className="w-full h-auto object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="p-3 bg-slate-800 text-white text-xs flex justify-between items-center">
                <span>Vệ sinh xịt rửa dàn lạnh & dàn nóng</span>
                <span className="text-blue-300 font-semibold">Tận nhà Hà Nội</span>
              </div>
            </div>
          </div>

          {/* AC Issues List - Kém mát on top */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              {AC_PROBLEMS.map((item, idx) => (
                <div
                  key={item.title}
                  className={`p-3.5 rounded-lg border text-left transition-colors ${
                    idx === 0
                      ? 'bg-blue-50/90 border-blue-200 ring-1 ring-blue-300/60'
                      : 'bg-slate-50/70 border-slate-200/90 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-1">
                    <span className="text-lg">{item.icon}</span>
                    <span className={idx === 0 ? 'text-blue-900' : 'text-slate-800'}>
                      {item.title}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-normal pl-7">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs + Microcopy */}
            <div className="pt-2 border-t border-slate-100">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <a
                  id="ac-call-btn"
                  href={CONTACT_INFO.hotlineTel}
                  className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold px-4 py-2 rounded-lg text-sm shadow-xs transition-all active:scale-95 whitespace-nowrap"
                >
                  <Phone className="w-4 h-4 shrink-0 fill-current" />
                  <span>GỌI TƯ VẤN</span>
                </a>
                <a
                  id="ac-zalo-btn"
                  href={CONTACT_INFO.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-lg text-sm shadow-xs transition-all active:scale-95 whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 shrink-0 fill-current" />
                  <span>ZALO {CONTACT_INFO.zalo}</span>
                </a>
              </div>
              <p className="text-xs text-slate-500 italic">
                Gửi hình ảnh hoặc mô tả tình trạng điều hòa qua Zalo để được tư vấn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

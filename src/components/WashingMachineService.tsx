import React from 'react';
import { Phone, MessageCircle, CheckCircle, Sparkles, Layers } from 'lucide-react';
import {
  WASHING_MACHINE_TYPES,
  SUPPORTED_BRANDS,
  CONTACT_INFO,
  IMAGES,
} from '../data/content';

export const WashingMachineService: React.FC = () => {
  return (
    <section id="ve-sinh-sua-may-giat" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag & Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dịch vụ chủ lực</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-950 uppercase tracking-tight">
            VỆ SINH & SỬA CHỮA MÁY GIẶT TẠI NHÀ
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Quy trình tháo lồng vệ sinh sạch sẽ tận đáy, xử lý triệt để mùi hôi, cặn bẩn và mọi hư hỏng kỹ thuật.
          </p>
        </div>

        {/* Main Showcase: Drum Cleaning Image & Service Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          {/* Drum Cleaning Image (Image 2 of Washing Machine) */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-xl border border-slate-200 shadow-md">
              <img
                src={IMAGES.drumCleaning}
                alt="Tháo lồng giặt xịt rửa vệ sinh sạch sẽ tận nơi tại Hà Nội"
                className="w-full h-auto object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="p-3 bg-slate-900 text-slate-200 text-xs sm:text-sm flex items-center justify-between">
                <span className="font-semibold text-white">Vệ sinh tháo lồng chuyên nghiệp</span>
                <span className="text-emerald-400 font-bold">Sạch cặn bẩn 100%</span>
              </div>
            </div>
          </div>

          {/* Service Breakdown Details */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">
              Cam kết dịch vụ máy giặt Điện Lạnh Quang Cảnh
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5">
              Máy giặt sau thời gian dài sử dụng thường tích tụ nhiều cặn bẩn, nấm mốc và vi khuẩn gây mùi bám vào quần áo. Đội ngũ kỹ thuật viên lành nghề sẽ trực tiếp kiểm tra, tháo rời lồng giặt và bảo dưỡng tỉ mỉ ngay tại nhà bạn.
            </p>

            <ul className="space-y-3 mb-6 text-sm sm:text-base text-slate-700 font-medium">
              <li className="flex items-center gap-2.5">
                <CheckCircle className="w-5 h-5 text-blue-600 shrink-0" />
                <span>Tháo mâm giặt, lồng giặt xịt rửa chuyên dụng áp lực cao</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle className="w-5 h-5 text-blue-600 shrink-0" />
                <span>Khử mùi hôi, diệt khuẩn lồng giặt và vệ sinh zoăng cửa sạch bóng</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle className="w-5 h-5 text-blue-600 shrink-0" />
                <span>Khắc phục lỗi không vắt, kêu to, rung lắc, không cấp xả nước</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle className="w-5 h-5 text-blue-600 shrink-0" />
                <span>Kiểm tra báo giá minh bạch trước khi thực hiện</span>
              </li>
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                id="wm-section-call-btn"
                href={CONTACT_INFO.hotlineTel}
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm sm:text-base shadow-sm hover:shadow transition-all active:scale-95 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 shrink-0 fill-current" />
                <span>GỌI NGAY</span>
              </a>
              <a
                id="wm-section-zalo-btn"
                href={CONTACT_INFO.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm sm:text-base shadow-sm hover:shadow transition-all active:scale-95 whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 shrink-0 fill-current" />
                <span>GỬI TÌNH TRẠNG QUA ZALO</span>
              </a>
            </div>
          </div>
        </div>

        {/* 3 Cards: NHẬN VỆ SINH & SỬA NHIỀU DÒNG MÁY GIẶT (Text đơn giản) */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Layers className="w-5 h-5 text-blue-700 shrink-0" />
            <h3 className="text-base sm:text-lg font-extrabold text-blue-950 uppercase tracking-wide">
              NHẬN VỆ SINH & SỬA NHIỀU DÒNG MÁY GIẶT
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {WASHING_MACHINE_TYPES.map((type) => (
              <div
                key={type.title}
                className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-blue-300 transition-colors"
              >
                <h4 className="font-extrabold text-blue-900 text-base mb-1.5 uppercase">
                  {type.title}
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm">
                  {type.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* HỖ TRỢ NHIỀU THƯƠNG HIỆU MÁY GIẶT (Text đơn giản) */}
        <div className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200 shadow-xs">
          <h3 className="text-sm sm:text-base font-extrabold text-blue-950 uppercase tracking-wide mb-3">
            HỖ TRỢ NHIỀU THƯƠNG HIỆU MÁY GIẶT
          </h3>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {SUPPORTED_BRANDS.map((brand) => (
              <span
                key={brand}
                className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-slate-100 text-slate-800 font-bold text-sm border border-slate-200/80 hover:bg-blue-50 hover:text-blue-800 transition-colors"
              >
                {brand}
              </span>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-3 italic">
            Hỗ trợ đầy đủ linh kiện chính hãng và dụng cụ chuyên dụng cho từng thương hiệu.
          </p>
        </div>
      </div>
    </section>
  );
};

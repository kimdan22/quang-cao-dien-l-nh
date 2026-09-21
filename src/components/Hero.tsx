import React from 'react';
import { Phone, MessageCircle, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { CONTACT_INFO, IMAGES } from '../data/content';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative bg-gradient-to-b from-blue-50/70 via-white to-white py-8 sm:py-12 lg:py-16 border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, Subtitle 4 Highlights, CTAs & Microcopy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Location Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/90 text-blue-800 text-xs sm:text-sm font-semibold w-fit mb-4">
              <MapPin className="w-3.5 h-3.5 text-blue-700 shrink-0" />
              <span>Phục vụ tận nhà nhanh chóng toàn khu vực Hà Nội</span>
            </div>

            {/* Main H1 */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight uppercase mb-5">
              VỆ SINH & SỬA CHỮA MÁY GIẶT, ĐIỀU HÒA, BÌNH NÓNG LẠNH TẠI NHÀ HÀ NỘI
            </h1>

            {/* 4 Highlights Box */}
            <div className="bg-white rounded-xl p-4 sm:p-5 border border-blue-100 shadow-sm mb-6">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-900 mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                <span>4 ĐIỂM NỔI BẬT</span>
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-slate-700 text-sm font-medium">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Báo giá rõ ràng trước khi sửa</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Nhân viên giàu kinh nghiệm, tỉ mỉ và cẩn thận</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Kiểm tra kỹ tình trạng trước khi xử lý</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Hỗ trợ tận nhà tại Hà Nội</span>
                </li>
              </ul>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-3">
              {/* Primary CTA: Hotline Call */}
              <a
                id="hero-primary-call-cta"
                href={CONTACT_INFO.hotlineTel}
                className="flex items-center justify-center gap-2.5 bg-orange-600 hover:bg-orange-700 text-white font-extrabold px-6 py-3.5 rounded-xl text-base sm:text-lg shadow-md hover:shadow-lg transition-all active:scale-98 text-center pulse-ring whitespace-nowrap"
              >
                <Phone className="w-5 h-5 shrink-0 fill-current" />
                <span>GỌI NGAY {CONTACT_INFO.hotline}</span>
              </a>

              {/* Secondary CTA: Zalo */}
              <a
                id="hero-secondary-zalo-cta"
                href={CONTACT_INFO.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-xl text-base sm:text-lg shadow-md hover:shadow-lg transition-all active:scale-98 text-center whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5 shrink-0 fill-current" />
                <span>NHẮN ZALO {CONTACT_INFO.zalo}</span>
              </a>
            </div>

            {/* Microcopy */}
            <p className="text-xs sm:text-sm text-slate-500 italic flex items-center gap-1.5">
              <span>💬</span>
              <span className="font-bold">Có thể gửi ảnh, video hoặc mã lỗi qua Zalo để mô tả tình trạng thiết bị.</span>
            </p>
          </div>

          {/* Right Column: Hero Image (Washing machine technician at home) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none flex justify-center">
              {/* Subtle background glow */}
              <div className="absolute -inset-2 bg-blue-200/40 rounded-2xl blur-lg -z-10" />
              
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl bg-white w-fit mx-auto">
                <img
                  src={IMAGES.heroWashingMachine}
                  alt="Kỹ thuật viên Điện Lạnh Quang Cảnh đang kiểm tra và vệ sinh máy giặt tại nhà"
                  style={{ width: '326px', height: '218.5px' }}
                  className="w-[326px] h-[218.5px] max-w-full object-cover block"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                
                {/* Image caption badge */}
                <div className="p-3 bg-slate-900/90 text-white flex items-center justify-between text-xs">
                  <span className="font-semibold">Kỹ thuật viên kiểm tra máy giặt tận nơi</span>
                  <span className="text-amber-400 font-bold">Chu đáo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

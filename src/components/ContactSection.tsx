import React from 'react';
import { Phone, MessageCircle, Camera, AlertTriangle } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

export const ContactSection: React.FC = () => {
  return (
    <section id="lien-he" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Liên hệ nhanh</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
            MÁY GIẶT ĐANG CÓ VẤN ĐỀ?
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Gọi điện hoặc nhắn Zalo để mô tả tình trạng thiết bị.
          </p>
        </div>

        {/* 2 Clear Distinct Cards for Hotline & Zalo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Hotline Box */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm text-center flex flex-col justify-between hover:border-orange-300 transition-all">
            <div>
              <div className="w-14 h-14 mx-auto rounded-full bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
                <Phone className="w-7 h-7 fill-current" />
              </div>
              <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                HOTLINE GỌI TRỰC TIẾP
              </span>
              <p className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
                {CONTACT_INFO.hotline}
              </p>
              <p className="text-xs text-slate-500 mb-6">
                Hỗ trợ kỹ thuật viên tư vấn và kiểm tra tại nhà ở Hà Nội
              </p>
            </div>

            <a
              id="contact-box-call-btn"
              href={CONTACT_INFO.hotlineTel}
              className="w-full inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-extrabold py-3.5 px-6 rounded-xl text-base shadow-sm hover:shadow active:scale-98 transition-all whitespace-nowrap"
            >
              <Phone className="w-5 h-5 shrink-0 fill-current" />
              <span>GỌI NGAY</span>
            </a>
          </div>

          {/* Zalo Box */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm text-center flex flex-col justify-between hover:border-blue-300 transition-all">
            <div>
              <div className="w-14 h-14 mx-auto rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <MessageCircle className="w-7 h-7 fill-current" />
              </div>
              <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                TƯ VẤN QUA ZALO
              </span>
              <p className="text-2xl sm:text-3xl font-black text-blue-900 tracking-tight mb-2">
                {CONTACT_INFO.zalo}
              </p>
              <p className="text-xs text-slate-500 mb-6">
                Thuận tiện gửi ảnh, video quay sự cố hoặc hình chụp mã lỗi
              </p>
            </div>

            <a
              id="contact-box-zalo-btn"
              href={CONTACT_INFO.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-3.5 px-6 rounded-xl text-base shadow-sm hover:shadow active:scale-98 transition-all whitespace-nowrap"
            >
              <MessageCircle className="w-5 h-5 shrink-0 fill-current" />
              <span>NHẮN ZALO</span>
            </a>
          </div>
        </div>

        {/* Microcopy note */}
        <div className="text-center p-4 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center justify-center gap-2 text-xs sm:text-sm text-blue-900 font-medium">
          <Camera className="w-4 h-4 text-blue-600 shrink-0" />
          <span>Bạn có thể gửi ảnh, video hoặc mã lỗi qua Zalo để mô tả tình trạng máy.</span>
        </div>
      </div>
    </section>
  );
};

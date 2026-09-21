import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-slate-900 text-slate-300 py-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-8">
          {/* Brand & info */}
          <div className="lg:col-span-6">
            <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">
              {CONTACT_INFO.brandName}
            </h3>
            <p className="text-sm text-slate-400 mb-4 max-w-md">
              Vệ sinh & sửa chữa máy giặt, điều hòa, bình nóng lạnh tại Hà Nội
            </p>
            <div className="space-y-1.5 text-sm">
              <p className="flex items-center gap-2">
                <span className="text-slate-400">Hotline:</span>
                <a
                  href={CONTACT_INFO.hotlineTel}
                  className="font-bold text-orange-400 hover:text-orange-300 transition-colors"
                >
                  {CONTACT_INFO.hotline}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-slate-400">Zalo:</span>
                <a
                  href={CONTACT_INFO.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {CONTACT_INFO.zalo}
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Liên kết nhanh
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="#ve-sinh-sua-may-giat" className="hover:text-white transition-colors">
                  Vệ sinh & sửa máy giặt
                </a>
              </li>
              <li>
                <a href="#dieu-hoa" className="hover:text-white transition-colors">
                  Điều hòa
                </a>
              </li>
              <li>
                <a href="#binh-nong-lanh" className="hover:text-white transition-colors">
                  Bình nóng lạnh
                </a>
              </li>
              <li>
                <a href="#lien-he" className="hover:text-white transition-colors">
                  Liên hệ
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Chính sách bảo mật
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright note */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <p>© {new Date().getFullYear()} {CONTACT_INFO.brandName}. Tất cả các quyền được bảo lưu.</p>
          <div className="flex items-center gap-3">
            <a href={CONTACT_INFO.hotlineTel} className="inline-flex items-center gap-1 hover:text-slate-300">
              <Phone className="w-3 h-3" />
              <span>{CONTACT_INFO.hotline}</span>
            </a>
            <span>•</span>
            <a href={CONTACT_INFO.zaloUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-slate-300">
              <MessageCircle className="w-3 h-3" />
              <span>Zalo {CONTACT_INFO.zalo}</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { WASHING_MACHINE_PROBLEMS, CONTACT_INFO } from '../data/content';

export const WashingMachineProblems: React.FC = () => {
  return (
    <section id="may-giat-van-de" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block text-xs sm:text-sm font-bold tracking-wider uppercase text-blue-700 bg-blue-50 px-3 py-1 rounded-full mb-3">
            Chẩn đoán nhanh sự cố máy giặt
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight uppercase">
            MÁY GIẶT CỦA BẠN ĐANG GẶP VẤN ĐỀ GÌ?
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Nhận biết đúng tình trạng giúp xác định hướng kiểm tra và xử lý phù hợp.
          </p>
        </div>

        {/* 8 Problem Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {WASHING_MACHINE_PROBLEMS.map((problem) => (
            <div
              key={problem.title}
              className={`flex flex-col justify-between p-5 rounded-xl border transition-all duration-200 ${
                problem.highlight
                  ? 'bg-amber-50/70 border-amber-300 shadow-sm ring-1 ring-amber-300/60'
                  : 'bg-slate-50/80 hover:bg-white border-slate-200/90 hover:border-blue-300 hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="text-2xl p-2 bg-white rounded-lg shadow-2xs border border-slate-100 flex items-center justify-center shrink-0">
                    {problem.icon}
                  </span>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                    {problem.title}
                  </h3>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3">
                  {problem.desc}
                </p>
              </div>

              {problem.highlight && (
                <div className="mt-2 pt-2.5 border-t border-amber-200">
                  <p className="text-xs font-semibold text-amber-800 mb-2 flex items-center gap-1">
                    <span>💡</span>
                    <span>{problem.highlight}</span>
                  </p>
                  <a
                    href={CONTACT_INFO.zaloUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Nhắn Zalo kiểm tra mã lỗi ngay</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

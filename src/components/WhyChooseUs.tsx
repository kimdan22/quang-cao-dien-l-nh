import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/content';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="vi-sao-chon-chung-toi" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-blue-700 bg-blue-50 px-3 py-1 rounded-full mb-3 inline-block">
            Uy tín & Trách nhiệm
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
            VÌ SAO NHIỀU KHÁCH HÀNG LỰA CHỌN?
          </h2>
        </div>

        {/* 4 simple points in a balanced grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={item}
              className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-white transition-all flex flex-col justify-between"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                  {item}
                </span>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span>Cam kết {idx + 1}</span>
                <span>Điện Lạnh Quang Cảnh</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

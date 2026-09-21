import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { WashingMachineProblems } from './components/WashingMachineProblems';
import { WashingMachineService } from './components/WashingMachineService';
import { AirConditionerSection } from './components/AirConditionerSection';
import { WaterHeaterSection } from './components/WaterHeaterSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ServiceArea } from './components/ServiceArea';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { BottomCTA } from './components/BottomCTA';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* 01. Header */}
      <Header />

      <main className="flex-grow">
        {/* 02. Hero – Vệ sinh & sửa máy giặt tại nhà */}
        <Hero />

        {/* 03. Trust Bar */}
        <TrustBar />

        {/* 04. Máy giặt đang gặp vấn đề gì? */}
        <WashingMachineProblems />

        {/* 05. Vệ sinh & sửa chữa máy giặt – SECTION CHÍNH, Các loại máy giặt, Thương hiệu máy giặt */}
        <WashingMachineService />

        {/* 06. Điều hòa – SECTION PHỤ */}
        <AirConditionerSection />

        {/* 07. Bình nóng lạnh – SECTION NHỎ */}
        <WaterHeaterSection />

        {/* 08. Vì sao liên hệ Điện Lạnh Quang Cảnh? */}
        <WhyChooseUs />

        {/* 09. Khu vực phục vụ Hà Nội */}
        <ServiceArea />

        {/* 10. FAQ */}
        <FAQSection />

        {/* 11. Liên hệ */}
        <ContactSection />

        {/* 12. CTA cuối trang */}
        <BottomCTA />
      </main>

      {/* 13. Footer */}
      <Footer />

      {/* 14. Floating Call + Zalo (Desktop right floating + Mobile fixed bottom bar) */}
      <FloatingContact />
    </div>
  );
}

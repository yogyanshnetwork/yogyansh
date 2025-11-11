import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/home/HomePage';
import StartupIndiaCertificate from './pages/services/StartupIndiaCertificate';
import MsmeCertificate from './pages/services/MsmeCertificate';
import StartupIndiaSeedFund from './pages/services/StartupIndiaSeedFund';
import IsoCertificate from './pages/services/IsoCertificate';
import MakeInIndiaCertificate from './pages/services/MakeInIndiaCertificate';
import TrademarkCertificate from './pages/services/TrademarkCertificate';
import FssaiCertificate from './pages/services/FssaiCertificate';
import IstartRajasthanFunding from './pages/services/IstartRajasthanFunding';
import CompanyIncorporation from './pages/services/CompanyIncorporation';
import GstCertificate from './pages/services/GstCertificate';
import StickyButtons from './components/ui/StickyButtons';
import WebsiteDevelopment from './pages/services/WebsiteDevelopment';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/startup-india-certificate" element={<StartupIndiaCertificate />} />
          <Route path="/services/msme-certificate" element={<MsmeCertificate />} />
          <Route path="/services/startup-india-seed-fund" element={<StartupIndiaSeedFund />} />
          <Route path="/services/iso-certificate" element={<IsoCertificate />} />
          <Route path="/services/make-in-india-certificate" element={<MakeInIndiaCertificate />} />
          <Route path="/services/trademark-certificate" element={<TrademarkCertificate />} />
          <Route path="/services/fssai-certificate" element={<FssaiCertificate />} />
          <Route path="/services/istart-rajasthan-funding" element={<IstartRajasthanFunding />} />
          <Route path="/services/company-incorporation" element={<CompanyIncorporation />} />
          <Route path="/services/gst-certificate" element={<GstCertificate />} />
          <Route path="/services/website-development" element={<WebsiteDevelopment />} />
        </Routes>
      </main>
      <Footer />
      <StickyButtons />
      <SpeedInsights />
    </div>
  );
}

export default App;

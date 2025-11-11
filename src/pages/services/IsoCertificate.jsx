import React from 'react';

const IsoCertificate = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">ISO Certification</h1>
        <p className="text-lg text-gray-600 mb-8">Achieve global standards of quality and excellence with an ISO certification, enhancing your brand's credibility and market access.</p>

        <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What is ISO Certification?</h2>
          <p className="text-gray-700">ISO (International Organization for Standardization) certification demonstrates that your company's products, services, and processes meet world-class standards for quality, safety, and efficiency. It is a hallmark of trust and reliability for your customers and partners.</p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Popular ISO Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">_ISO 9001:2015_ (Quality Management)</div>
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">_ISO 27001:2013_ (Information Security)</div>
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">_ISO 14001:2015_ (Environmental Management)</div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Certification Process</h2>
          <ol className="list-decimal list-inside space-y-4 max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg border border-gray-200">
            <li><span className="font-semibold">Gap Analysis:</span> We perform a thorough analysis of your existing processes against ISO standards.</li>
            <li><span className="font-semibold">Implementation:</span> We assist in implementing the necessary changes and documentation.</li>
            <li><span className="font-semibold">Internal Audit:</span> We conduct an internal audit to ensure readiness for the certification body.</li>
            <li><span className="font-semibold">Certification:</span> We facilitate the final audit by an accredited certification body.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default IsoCertificate;

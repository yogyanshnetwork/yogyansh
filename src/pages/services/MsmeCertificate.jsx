import React from 'react';

const MsmeCertificate = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">MSME Certificate (Udyam Registration)</h1>
        <p className="text-lg text-gray-600 mb-8">Register your business as a Micro, Small, or Medium Enterprise (MSME) to unlock a wide range of government benefits and schemes.</p>

        <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Register as an MSME?</h2>
          <p className="text-gray-700">Udyam Registration is a simple yet powerful tool for small businesses in India. It provides your business with a unique identity and access to benefits like priority sector lending, protection against delayed payments, and eligibility for various government tenders.</p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">_Collateral-free loans_ from banks.</div>
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">_Subsidy on patent registration_ and industrial promotion.</div>
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">_Protection against delayed payments_ from buyers.</div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Process</h2>
          <ol className="list-decimal list-inside space-y-4 max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg border border-gray-200">
            <li><span className="font-semibold">Consultation:</span> We determine your eligibility and explain the benefits.</li>
            <li><span className="font-semibold">Data Collection:</span> We collect the necessary information like your Aadhaar and PAN details.</li>
            <li><span className="font-semibold">Online Registration:</span> We complete the Udyam Registration process on the official portal.</li>
            <li><span className="font-semibold">Certificate Issuance:</span> You receive your MSME certificate instantly upon successful registration.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default MsmeCertificate;

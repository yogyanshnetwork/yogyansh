import React from 'react';

const StartupIndiaSeedFund = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">Startup India Seed Fund Scheme</h1>
        <p className="text-lg text-gray-600 mb-8">Secure the critical early-stage capital your startup needs to transform an idea into a market-ready product.</p>

        <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Fuel Your Innovation</h2>
          <p className="text-gray-700">The Startup India Seed Fund Scheme (SISFS) provides financial assistance to startups for proof of concept, prototype development, product trials, market entry, and commercialization. It's designed to support startups at the most vulnerable stage of their lifecycle.</p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Funding Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">Up to _₹20 Lakhs_ as a grant for proof of concept.</div>
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">Up to _₹50 Lakhs_ through convertible debentures or debt-linked instruments.</div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Role</h2>
          <ol className="list-decimal list-inside space-y-4 max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg border border-gray-200">
            <li><span className="font-semibold">Incubator Connect:</span> We connect you with eligible incubators registered under the scheme.</li>
            <li><span className="font-semibold">Pitch Deck & Application:</span> We help you create a compelling application and pitch deck.</li>
            <li><span className="font-semibold">Presentation Coaching:</span> We prepare you for the Incubator Seed Management Committee (ISMC) presentation.</li>
            <li><span className="font-semibold">Funding Assistance:</span> We guide you through the due diligence and fund disbursal process.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default StartupIndiaSeedFund;

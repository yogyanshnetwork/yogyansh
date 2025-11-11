import React from 'react';

const IstartRajasthanFunding = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">iStart Rajasthan Funding</h1>
        <p className="text-lg text-gray-600 mb-8">Leverage Rajasthan's flagship program to get your startup recognized, incubated, and funded in one of India's most vibrant startup ecosystems.</p>

        <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The Gateway to Rajasthan's Startup Ecosystem</h2>
          <p className="text-gray-700">iStart Rajasthan is a comprehensive platform designed to support and nurture startups in the state. From initial idea validation to securing funding, iStart provides a complete support system, and we are here to help you navigate it.</p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Funding Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">_Sustenance Allowance_ of up to ₹20,000 per month.</div>
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">_Seed Funding_ of up to ₹20 Lakhs.</div>
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">_Scale-up Funding_ for growth-stage startups.</div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Support Model</h2>
          <ol className="list-decimal list-inside space-y-4 max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg border border-gray-200">
            <li><span className="font-semibold">iStart Registration:</span> We get your startup registered on the iStart portal.</li>
            <li><span className="font-semibold">QRate Assessment:</span> We help you prepare for the QRate assessment to determine your startup's potential.</li>
            <li><span className="font-semibold">Incubator & Mentor Connect:</span> We connect you with the right incubators and mentors in the network.</li>
            <li><span className="font-semibold">Funding Application:</span> We assist in preparing and submitting applications for various funding schemes.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default IstartRajasthanFunding;

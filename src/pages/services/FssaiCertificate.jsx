import React from 'react';

const FssaiCertificate = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">FSSAI Registration & License</h1>
        <p className="text-lg text-gray-600 mb-8">Ensure your food business operates legally and builds trust with customers by obtaining the mandatory FSSAI food license.</p>

        <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Compliance for Food Businesses</h2>
          <p className="text-gray-700">The Food Safety and Standards Authority of India (FSSAI) is the regulatory body for all food businesses in India. Whether you're a small food vendor, a restaurant, or a large-scale food manufacturer, obtaining an FSSAI license is a legal requirement to ensure the safety and quality of your products.</p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Types of FSSAI Licenses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">_Basic Registration_ for small businesses and startups.</div>
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">_State License_ for mid-sized businesses.</div>
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">_Central License_ for large businesses and importers/exporters.</div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Licensing Process</h2>
          <ol className="list-decimal list-inside space-y-4 max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg border border-gray-200">
            <li><span className="font-semibold">Consultation:</span> We help you determine the correct license type for your business.</li>
            <li><span className="font-semibold">Documentation:</span> We assist in preparing all the necessary documents and declarations.</li>
            <li><span className="font-semibold">Application Submission:</span> We file your application on the FoSCoS portal.</li>
            <li><span className="font-semibold">License Approval:</span> We follow up with the FSSAI department to ensure your license is issued promptly.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default FssaiCertificate;

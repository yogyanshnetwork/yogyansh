import React from 'react';

const GstCertificate = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">GST Registration & Filing</h1>
        <p className="text-lg text-gray-600 mb-8">Become a tax-compliant business by registering for the Goods and Services Tax (GST) and stay ahead with our expert filing services.</p>

        <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding GST</h2>
          <p className="text-gray-700">GST is a comprehensive indirect tax levied on the supply of goods and services in India. Any business with an annual turnover exceeding the threshold limit must register for GST. It simplifies the tax structure and allows businesses to claim input tax credit, reducing the overall cost.</p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our GST Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">_GST Registration_ for new businesses.</div>
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">_Monthly & Quarterly Filings_ (GSTR-1, GSTR-3B).</div>
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">_Annual Returns_ & GST Audit support.</div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Process</h2>
          <ol className="list-decimal list-inside space-y-4 max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg border border-gray-200">
            <li><span className="font-semibold">Eligibility & Documents:</span> We assess your need for GST registration and compile the required documents.</li>
            <li><span className="font-semibold">Application Filing:</span> We submit your GST registration application (GST REG-01) online.</li>
            <li><span className="font-semibold">ARN Generation:</span> We provide you with the Application Reference Number (ARN) for tracking.</li>
            <li><span className="font-semibold">GSTIN Allotment:</span> We ensure you receive your GST Identification Number (GSTIN) and certificate.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default GstCertificate;

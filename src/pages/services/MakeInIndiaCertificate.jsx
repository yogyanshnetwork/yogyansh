import React from 'react';

const MakeInIndiaCertificate = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">Make in India Certification</h1>
        <p className="text-lg text-gray-600 mb-8">Align your business with the national mission of indigenous manufacturing and gain preference in public procurement.</p>

        <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join the National Movement</h2>
          <p className="text-gray-700">The 'Make in India' initiative aims to transform India into a global design and manufacturing hub. Certification under this program provides your products with a distinct edge, especially in government tenders and contracts, by certifying your local value addition.</p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Key Advantages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">_Preference in Public Procurement_ under the PPP-MII Order.</div>
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">_Enhanced Brand Image_ by showcasing commitment to local production.</div>
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">_Eligibility for Government Incentives_ and schemes.</div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Certification Support</h2>
          <ol className="list-decimal list-inside space-y-4 max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg border border-gray-200">
            <li><span className="font-semibold">Local Content Calculation:</span> We help you accurately calculate the local content of your products.</li>
            <li><span className="font-semibold">Documentation & Application:</span> We prepare and file the application with the relevant authorities.</li>
            <li><span className="font-semibold">Technical Assistance:</span> We provide guidance on meeting the minimum local content requirements.</li>
            <li><span className="font-semibold">Certification & Compliance:</span> We ensure you receive the certification and understand ongoing compliance.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default MakeInIndiaCertificate;

import React from 'react';

const TrademarkCertificate = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">Trademark Registration</h1>
        <p className="text-lg text-gray-600 mb-8">Protect your brand's most valuable asset—its identity. Secure your brand name, logo, and slogan with a registered trademark.</p>

        <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why is a Trademark Crucial?</h2>
          <p className="text-gray-700">A trademark provides you with the exclusive right to use your brand identity for the goods and services you offer. It prevents competitors from using a similar mark, protects your reputation, and builds brand value over time. It's a legal shield for your brand in the marketplace.</p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">_Exclusive Legal Rights_ to use the mark nationwide.</div>
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">_Protects Against Infringement_ and unfair competition.</div>
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">_Creates a Valuable Asset_ that can be sold, licensed, or franchised.</div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Registration Process</h2>
          <ol className="list-decimal list-inside space-y-4 max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg border border-gray-200">
            <li><span className="font-semibold">Trademark Search:</span> We conduct a thorough search to check for the availability of your proposed mark.</li>
            <li><span className="font-semibold">Application Filing:</span> We prepare and file your trademark application with the appropriate class.</li>
            <li><span className="font-semibold">Responding to Objections:</span> We handle any objections or oppositions from the Trademark Registry.</li>
            <li><span className="font-semibold">Registration & Renewal:</span> We ensure your trademark is registered and remind you of renewals.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default TrademarkCertificate;

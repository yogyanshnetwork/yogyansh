import React from 'react';

const CompanyIncorporation = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">Company Incorporation</h1>
        <p className="text-lg text-gray-600 mb-8">Formalize your business vision by registering it as a legal entity. We provide seamless incorporation services for all types of companies.</p>

        <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Choosing the Right Structure</h2>
          <p className="text-gray-700">The legal structure of your company has long-term implications for liability, taxation, and fundraising. We help you make the right choice based on your vision and business plan, whether it's a Private Limited Company, a Limited Liability Partnership (LLP), or a One Person Company (OPC).</p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Common Business Structures</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">_Private Limited Company_ (Pvt Ltd)</div>
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">_Limited Liability Partnership_ (LLP)</div>
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">_One Person Company_ (OPC)</div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Incorporation Package</h2>
          <ol className="list-decimal list-inside space-y-4 max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg border border-gray-200">
            <li><span className="font-semibold">Name Approval (RUN):</span> We help you choose and reserve a unique name for your company.</li>
            <li><span className="font-semibold">Director Identification Number (DIN):</span> We procure DIN for all proposed directors.</li>
            <li><span className="font-semibold">Drafting MoA & AoA:</span> We draft the essential constitutional documents of your company.</li>
            <li><span className="font-semibold">Filing & Certificate:</span> We file all forms with the MCA and provide you with the Certificate of Incorporation.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default CompanyIncorporation;

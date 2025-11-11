import React from 'react';

const StartupIndiaCertificate = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">Startup India Certificate</h1>
        <p className="text-lg text-gray-600 mb-8">Unlock the full potential of your startup with official recognition from the Department for Promotion of Industry and Internal Trade (DPIIT).</p>

        <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What is the Startup India Certificate?</h2>
          <p className="text-gray-700">The Startup India Certificate is an official recognition that provides startups with access to a host of tax benefits, easier compliance, IPR fast-tracking, and networking opportunities. It's a crucial step for any innovative venture looking to scale in India.</p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">_Tax Exemption_ for 3 consecutive years.</div>
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">_Easy Access to Funds_ including the Fund of Funds for Startups.</div>
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">_Simplified Compliance_ via self-certification.</div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Process</h2>
          <ol className="list-decimal list-inside space-y-4 max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg border border-gray-200">
            <li><span className="font-semibold">Eligibility Check:</span> We assess your business to ensure it meets all DPIIT criteria.</li>
            <li><span className="font-semibold">Documentation:</span> We help you prepare and organize all required documents.</li>
            <li><span className="font-semibold">Application Filing:</span> We file the application accurately and efficiently on your behalf.</li>
            <li><span className="font-semibold">Follow-up & Approval:</span> We manage all communications with the department until your certificate is issued.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default StartupIndiaCertificate;

import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../../data/services';

const HomePage = () => {
  return (
    <div className="bg-white text-gray-800">
      <section className="bg-gray-50 py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 leading-tight">Innovate. Comply. Grow.</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">We are the architects of your entrepreneurial journey, providing the legal and financial framework for your success.</p>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link to={service.path} key={service.title} className="block bg-white p-8 rounded-lg border border-gray-200 shadow-md hover:shadow-xl hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center mb-4">
                    <Icon className="text-blue-600 mr-4" size={40} />
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <span className="text-blue-600 font-semibold hover:underline">Explore &rarr;</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="text-3xl font-bold text-blue-600">YOGYANSH NETWORK</Link>
            <p className="mt-4">Architects of your entrepreneurial journey.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/startup-india-certificate" className="hover:text-blue-600">Startup India</Link></li>
              <li><Link to="/services/msme-certificate" className="hover:text-blue-600">MSME</Link></li>
              <li><Link to="/services/gst-certificate" className="hover:text-blue-600">GST</Link></li>
              <li><Link to="/services/company-incorporation" className="hover:text-blue-600">Incorporation</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-blue-600">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
              <li><Link to="/" className="hover:text-blue-600">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect</h3>
            <p>Email: yogyanshnetwork@gmail.com</p>
            {/* <p>Phone: (123) 456-7890</p> */}
          </div>
        </div>
        <div className="text-center text-gray-500 mt-12 border-t border-gray-200 pt-8">
          &copy; {new Date().getFullYear()} YOGYANSH NETWORK. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

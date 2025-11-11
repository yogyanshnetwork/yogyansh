import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const homeElement = document.getElementById(id);
        if (homeElement) {
          homeElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // wait for navigation
    } else {
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 text-gray-800 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-blue-600">YOGYANSH NETWORK</Link>
        <nav>
          <ul className="flex space-x-6 items-center">
            <li><Link to="/" className="hover:text-blue-600 transition-colors duration-300">Home</Link></li>
            <li><a href="#services" onClick={(e) => handleScroll(e, 'services')} className="hover:text-blue-600 transition-colors duration-300">Services</a></li>
            <li><Link to="/about" className="hover:text-blue-600 transition-colors duration-300">About</Link></li>
            {/* <li><Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">Contact Us</Link></li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

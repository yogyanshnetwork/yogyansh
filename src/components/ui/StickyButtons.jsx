import React from 'react';
import { Phone, Mail } from 'lucide-react';

const StickyButtons = () => {
  return (
    <div className="fixed bottom-4 right-4 space-y-2">
      <a href="mailto:yogyanshnetwork@gmail.com" className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-colors duration-300 flex items-center justify-center">
        <Mail size={24} />
      </a>
    </div>
  );
};

export default StickyButtons;

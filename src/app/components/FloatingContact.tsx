'use client';

import { FaWhatsapp, FaEnvelope, FaPhone, FaComments } from 'react-icons/fa';
import { useState } from 'react';

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* الأيقونات التي ستظهر وتختفي بسلاسة */}
      <div className={`flex flex-col items-end space-y-2 mb-2 transition-all duration-500 ease-out ${open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        <a
          href="tel:+201234567890"
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-110"
        >
          <FaPhone />
        </a>
        <a
          href="mailto:example@email.com"
          className="bg-red-500 text-white p-3 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-110"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://wa.me/201234567890"
          target="_blank"
          className="bg-green-500 text-white p-3 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-110"
        >
          <FaWhatsapp />
        </a>
      </div>

      {/* الزر العائم الرئيسي */}
      <button
        onClick={() => setOpen(!open)}
        className={`bg-gray-800 text-white p-4 rounded-full shadow-lg transition-all duration-500 ease-in-out transform ${open ? 'rotate-45 scale-105' : 'scale-100'} hover:cursor-pointer`}
      >
        <FaComments />
      </button>
    </div>
  );
}

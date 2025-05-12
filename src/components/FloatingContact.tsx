"use client";

import { useState } from "react";
import { FaWhatsapp, FaPhone, FaComments } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { gmail, Phone, whatsApp } from "@/lib/data";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* أيقونات التواصل */}
      <div
        className={`absolute bottom-16 right-0 flex flex-col items-center space-y-2 transition-all duration-500 ease-out ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-5 pointer-events-none"
        }`}
      >
        <a
          href={`tel:+${Phone}`}
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-110"
        >
          <FaPhone className="text-xl" />
        </a>
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${gmail}.com&su=استفسار&body=السلام%20عليكم%20ورحمة%20الله%20وبركاته`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-500 text-white p-3 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-110"
        >
          <BiLogoGmail className="text-xl" />
        </a>
        <a
          href={`https://wa.me/${whatsApp}?text=السلام%20عليكم%20ورحمة%20الله%20وبركاته`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-110"
        >
          <FaWhatsapp className="text-xl" />
        </a>
      </div>

      {/* زر فتح / إغلاق */}
      <button
        onClick={() => setOpen(!open)}
        className={`bg-primary text-secondary p-4 rounded-full shadow-lg transition-all duration-500 ease-in-out transform hover:bg-primary/80 ${
          open ? "rotate-360 scale-105" : "scale-100"
        } hover:cursor-pointer`}
      >
        <FaComments />
      </button>
    </div>
  );
}

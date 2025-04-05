'use client';

import { FaFacebookF, FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800/90 text-white py-6 mt-10">
      <div className="container mx-auto flex justify-center items-center gap-6">
        <SocialIcon
          icon={<FaFacebookF />}
          link="https://facebook.com"
          color="#1877F2" // لون فيسبوك
        />
        <SocialIcon
          icon={<FaWhatsapp />}
          link="https://wa.me/201234567890"
          color="#25D366" // لون واتساب
        />
        <SocialIcon
          icon={<FaInstagram />}
          link="https://instagram.com"
          color="#E1306C" // لون انستجرام
        />
      </div>
      <p className="text-center text-sm mt-4 text-gray-400">كل الحقوق محفوظة © {new Date().getFullYear()} لأكادمية المراغي </p>
    </footer>
  );
}

function SocialIcon({
  icon,
  link,
  color,
}: {
  icon: React.ReactNode;
  link: string;
  color: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white text-xl transition-all duration-300 hover:scale-110"
      style={{ transitionProperty: 'transform, color' }}
    >
      <div
        className="p-2 rounded-full hover:bg-opacity-10"
        style={{
          color: 'white',
          fontSize: "25px",
          transition: 'color 0.3s ease, transform 0.3s ease',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.color = color;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.color = 'white';
        }}
      >
        {icon}
      </div>
    </a>
  );
}

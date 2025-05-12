import { facebookLink, instaLink, tickTockLick, youTubeLink } from "@/lib/data";
import { Copyright } from "lucide-react";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-400 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 border-t border-gray-200 dark:border-gray-800 py-6 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-gray-900 dark:text-purple-100 font-semibold text-lg">
          <span className="tracking-wide">
            {" "}
            El Maragy for Teaching the Qur’an
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-around gap-5 rounded-2xl p-5 font-semibold w-90">
            <a href={instaLink} target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl text-pink-600 hover:scale-120 transition duration-300" />
            </a>
            <a href={youTubeLink} target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-2xl text-red-600 hover:scale-120 transition duration-300" />
            </a>
            <a href={facebookLink} target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl text-blue-600 hover:scale-120 transition duration-300" />
            </a>
            <a href={tickTockLick} target="_blank" rel="noopener noreferrer">
              <FaTiktok className="text-2xl text-rose-800 hover:scale-120 transition duration-300" />
            </a>
          </div>
        </div>
        <div className="flex items-center text-xs gap-1">
          <Copyright className="w-4 h-4" />
          <span className="text-sm">
            {new Date().getFullYear()} All rights reserved —{" "}
            <a
              href="https://www.linkedin.com/in/abdelraheem-elhlwany-505211352"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Elhlwany
            </a>
          </span>{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { facebookLink, gmail, instaLink, tickTockLick, whatsApp, youTubeLink } from "@/lib/data";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";

export const metadata = {
  title: 'El-Maragy - Contact Us',
  description:"Contact Al Bayan Academy",
}

const ContactPage = () => {
  return (
<>
<div className="min-h-[65vh] flex items-center justify-center bg-background-secondary container m-auto rounded-3xl my-3">
      <div className="flex items-center justify-around gap-10 flex-wrap">
        <a
          href={`https://wa.me/${whatsApp}?text=السلام%20عليكم%20ورحمة%20الله%20وبركاته`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-around gap-5 bg-background rounded-2xl p-5 font-semibold shadow-lg animate-float hover:scale-105 transition duration-300 w-90"
        >
          <FaWhatsapp className="text-2xl text-green-600 " />
          <h5 className="animate-shine ">{whatsApp}</h5>
        </a>

        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${gmail}.com&su=استفسار&body=السلام%20عليكم%20ورحمة%20الله%20وبركاته`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-around gap-5 bg-background rounded-2xl p-5 font-semibold shadow-lg animate-float hover:scale-105 transition duration-300 w-90"
        >
          <BiLogoGmail className="text-2xl text-red-600" />
          <h5 className="animate-shine">{gmail}</h5>
        </a>

        <div className="flex items-center justify-around gap-5 bg-background rounded-2xl p-5 font-semibold shadow-lg animate-float hover:scale-105 transition duration-300 w-90">
          <a href={instaLink}>
            <FaInstagram className="text-2xl text-pink-600 hover:scale-120 transition duration-300" />
          </a>
          <a href={youTubeLink}>
            <FaYoutube className="text-2xl text-red-600 hover:scale-120 transition duration-300" />
          </a>
          <a href={facebookLink}>
            <FaFacebook className="text-2xl text-blue-600 hover:scale-120 transition duration-300" />
          </a>
          <a href={tickTockLick}>
            <FaTiktok className="text-2xl text-rose-800 hover:scale-120 transition duration-300" />
          </a>
        </div>
      </div>
    </div>
</>
  );
};

export default ContactPage;

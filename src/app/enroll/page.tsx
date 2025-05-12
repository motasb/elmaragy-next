import { ContactForm } from "@/components/ContactForm";
import { Card } from "@/components/ui/card";
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Image from "next/image";
import { gmail, whatsApp } from "@/lib/data";

export const metadata = {
  title: 'El-Maragy - Enroll',
  description:"Register with Al Bayan Academy now"
}

const EnrollPage = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-start justify-around gap-12">
        <div className="hidden lg:flex flex-col items-center text-center lg:text-left space-y-6 max-w-md bg-background-secondary">
          <Image
            src={"/images/enroll.webp"}
            width={500}
            height={500}
            alt="enroll"
            className="rounded-lg shadow-lg"
          />

          <div className="space-y-4 w-full">
            <div className="flex items-center gap-3 ">
              <FaWhatsapp className="text-2xl text-green-800 dark:text-green-600" />
              <a
                href={`https://wa.me/${whatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-medium hover:underline text-primary"
              >
                {whatsApp}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <BiLogoGmail className="text-xl text-red-800 dark:text-red-600" />
              <a
                href={`mailto:${gmail}`}
                className="text-base font-medium hover:underline text-primary"
              >
                {gmail}
              </a>
            </div>
          </div>
        </div>
        <Card className="w-full max-w-4xl shadow-lg p-6 bg-background">
          <ContactForm />
        </Card>
      </div>
    </section>
  );
};

export default EnrollPage;

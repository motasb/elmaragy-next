import Image from "next/image";
import MainTitle from "./MainTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fqa } from "@/lib/data";
import Link from "next/link";

const Faq = () => {


  return (
    <section className="bg-background-secondary py-16 rounded-3xl relative overflow-hidden container m-auto">
      <MainTitle
        badge="FAQ"
        title="Frequently asked questions"
        subtitle="Browse through these FAQs to find answers to commonly asked questions."
      />
      <div className="flex items-center justify-around">
        <div className="md:block hidden">
          <Image src={"/images/man.webp"} alt="man" width={300} height={300} />
        </div>

        <div className="w-9/12 md:w-5/12">
          <Accordion type="single" collapsible className="space-y-3 mb-6">
            {fqa.map((q) => (
              <AccordionItem key={q.id} value={`item-${q.id}`} className="bg-background rounded-2xl px-3" >
                <AccordionTrigger >{q.question}</AccordionTrigger>
                <AccordionContent>{q.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Link className="py-3 px-4 text-primary-foreground bg-primary rounded-2xl" href={"/contact"}>Contact US</Link>
        </div>
      </div>
    </section>
  );
};

export default Faq;

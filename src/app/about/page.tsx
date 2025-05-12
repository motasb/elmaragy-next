import Features from "@/components/Features";
import MainTitle from "@/components/MainTitle";
import Image from "next/image";

export const metadata = {
  title: 'El-Maragy - About Us',
  description:"Learn more about our mission and values."
}

const AboutPage = () => {
  return (
    <section className="bg-background-secondary py-2 px-4">
      <MainTitle title="About Us"/>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="flex-shrink-0 w-full md:w-1/2">
          <Image
            src="/images/About-us.webp"
            alt="about us"
            width={600}
            height={600}
            className="rounded-2xl shadow-md w-full h-auto object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 leading-relaxed text-justify space-y-4 bg-background/85 m-2 p-1 rounded-2xl">
          <p>
            We strive to inspire our students to have a strong connection with
            the Holy Quran through its recitation, memorisation and
            understanding. Therefore they are able to implement what they learn
            in their own life.
          </p>
          <p>
            The Holy Quran is the word of Allah. Beautiful recitation of the
            Quran is something many of us wish to achieve. The starting point to
            beautifying recitation is to recite with the correct rules of
            recitation, known as Tajweed. Helping the students to achieve that
            is one of our aims.
          </p>
          <p>
            The essential qualities of a good teacher are that they love the
            Quran and have the qualifications to teach the Quran with Tajweed.
            They work hard to transmit this love to his student and help the
            student to improve their recitation.
          </p>
          <p>
            Our aim is to help the seeker of knowledge (our students) to achieve
            the best through their journey with the Quran, asking Allah to make
            this path of knowledge a path to paradise (Jannah).
          </p>
          <p className="italic text-sm text-primary border-l-4 border-primary pl-4 ">
            The Messenger of Allah (ﷺ) said: “Whoever takes the path hoping for
            knowledge, Allah makes easy for him the path to Paradise. Verily,
            the angels lower their wings for the seeker of knowledge out of
            pleasure of what he is doing. Verily all in the heavens and earth
            seek forgiveness for the knowledgeable, even the fish in the water...”
            <br />
            <span className="block mt-2 text-right pb-4">[Abu Dawood, Ibn Maajah, and Ibn Hibbaan]</span>
          </p>
        </div>
      </div>
      <Features/>
    </section>
  );
};

export default AboutPage;

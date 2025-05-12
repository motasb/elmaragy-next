import Courses from "./_components/Courses";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import MySwiperComponent from "@/components/Swiper";
import Testimonials from "@/app/_components/Testimonials";
import YouTubeGallery from "@/components/YouTubeGallery";

const HomePage = () => {
  return (
    <div>
      <MySwiperComponent />
      <Features />
      <Testimonials />
      <Courses />
      <Faq />
      <YouTubeGallery />
    </div>
  );
};

export default HomePage;

import About from "./components/About";
import Contact from "./components/Contact";
import Courses from "./components/Courses";
import Swiper from "./components/Swiper";


const HomePage = () => {
  return (
    <div className="home">
      <Swiper/>
      <Courses/>
      <About/>
      <Contact/>
    </div>
  );
};

export default HomePage;

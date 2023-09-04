import ScrollToTop from "react-scroll-to-top";
import Navbar from "../shared/Navbar";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Projects from "./Projects";
import Services from "./Services";
import Skills from "./Skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Blog from "./Blog";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Services />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
      <ScrollToTop
        component={
          <FontAwesomeIcon
            icon={faArrowUp}
            className=" hover:-translate-y-1 duration-300 hover:duration-300"
          />
        }
        style={{
          backgroundColor: "#FF6B00",
          color: "white",
          borderRadius: "50px",
        }}
        smooth
      />
    </div>
  );
};

export default Home;

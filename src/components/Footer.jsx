import { Link } from "react-scroll";
import { fb, github, linkedin } from "../utilities/image";
import { facebook_url, github_url, linkedin_url } from "../utilities/constant";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer bg-orangeBlur text-chiniseBlack footer-center p-10">
      <h1 className="text-xl sm:text-3xl font-semibold">Ami Hasan</h1>
      <div className="grid grid-flow-col gap-4">
        <ul className="menu-horizontal px-1">
          <li className="mx-2 hover:underline cursor-pointer  hover:scale-105 duration-300 hover:duration-300">
            <Link
              to="header"
              spy={true}
              smooth={true}
              offset={30}
              duration={500}
            >
              Home
            </Link>
          </li>

          <li className="mx-2 hover:underline  cursor-pointer  hover:scale-105 duration-300 hover:duration-300">
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={30}
              duration={500}
            >
              Services
            </Link>
          </li>
          <li className="mx-2 hover:underline  cursor-pointer  hover:scale-105 duration-300 hover:duration-300">
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={30}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="mx-2 hover:underline  cursor-pointer  hover:scale-105 duration-300 hover:duration-300">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={30}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className="mx-2 hover:underline  cursor-pointer  hover:scale-105 duration-300 hover:duration-300">
            <Link to="blog" spy={true} smooth={true} offset={30} duration={500}>
              Blog
            </Link>
          </li>
          <li className="mx-2 hover:underline  cursor-pointer  hover:scale-105 duration-300 hover:duration-300">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={30}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <a href={facebook_url} target={"_blank"} rel="noopener noreferrer">
              <img src={fb} className="w-8" alt="fb" />
            </a>
            <a href={linkedin_url} target="_blank" rel="noopener noreferrer">
              <img src={linkedin} className="w-8" alt="fb" />
            </a>
            <a href={github_url} target="_blank" rel="noopener noreferrer">
              <img src={github} className="w-8" alt="fb" />
            </a>
          </div>
        </div>
      </div>
      <div>
        <p>© Copyright {year} Ami Hasan | All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";
import { fullstack_resume } from "../utilities/constant";

const Navbar = () => {
  return (
    <div className="max-w-screen-2xl mx-auto py-3 lg:py-5">
      <div className="navbar  ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-orange"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu-compact dropdown-content w-52 bg-white shadow z-10"
            >
              <li className="my-2 p-1 pl-3 hover:bg-orange hover:text-white cursor-pointer">
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
              <li className="my-2 p-1 pl-3 hover:bg-orange hover:text-white cursor-pointer">
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
              <li className="my-2 p-1 pl-3 hover:bg-orange hover:text-white cursor-pointer">
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
              <li className="my-2 p-1 pl-3 hover:bg-orange hover:text-white cursor-pointer">
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
              <li className="my-2 p-1 pl-3 hover:bg-orange hover:text-white cursor-pointer">
                <Link
                  to="blog"
                  spy={true}
                  smooth={true}
                  offset={30}
                  duration={500}
                >
                  Blog
                </Link>
              </li>
              <li className="my-2 p-1 pl-3 hover:bg-orange hover:text-white cursor-pointer">
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
          <h1 className="text-xl sm:text-3xl font-semibold special-color">
            Ami Hasan
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu-horizontal px-1 text-orange">
            <li className="mr-6  hover:text-orange cursor-pointer hover:font-bold hover:scale-105 duration-300 hover:duration-300">
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
            <li className="mr-6  hover:text-orange cursor-pointer hover:font-bold hover:scale-105 duration-300 hover:duration-300">
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
            <li className="mr-6  hover:text-orange cursor-pointer hover:font-bold hover:scale-105 duration-300 hover:duration-300">
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
            <li className="mr-6  hover:text-orange cursor-pointer hover:font-bold hover:scale-105 duration-300 hover:duration-300">
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
            <li className="mr-6  hover:text-orange cursor-pointer hover:font-bold hover:scale-105 duration-300 hover:duration-300">
              <Link
                to="blog"
                spy={true}
                smooth={true}
                offset={30}
                duration={500}
              >
                Blog
              </Link>
            </li>
            <li className="mr-6  hover:text-orange cursor-pointer hover:font-bold hover:scale-105 duration-300 hover:duration-300">
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
        <div className="navbar-end">
          <a href={fullstack_resume} target="_blank" rel="noreferrer">
            <button className="bg-orange px-4 py-3 rounded text-white  gap-2 hover:bg-chiniseBlack hover:text-orange duration-300 flex items-center">
              <span>Resume</span>
              <FontAwesomeIcon
                className="hover:-translate-y-2 duration-300 hover:duration-300"
                icon={faArrowDown}
              />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

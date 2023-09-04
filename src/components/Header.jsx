import Typewriter from "typewriter-effect";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  amihasan_3,
  amihasan_profile,
  bg_shape,
  fb,
  figma,
  github,
  linkedin,
  discord,
} from "../utilities/image";
import {
  facebook_url,
  figma_url,
  github_url,
  linkedin_url,
} from "../utilities/constant";

const Header = () => {
  return (
    <div className="bg-orangeBlur" id="header">
      <div className="grid grid-cols-1 md:grid-cols-2 px-3 lg:px-0 lg:grid-cols-2 max-w-screen-2xl mx-auto min-h-[90vh]">
        <div
          className="col-span-1 flex px-3 lg:px-10 items-center"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div className="text-center md:text-left lg:text-left mt-28 lg:mt-0">
            <h1 className="text-xl md:text-2xl lg:text-3xl text-[#303030]">
              Hello! I'm Ami Hasan
            </h1>
            <h1 className="text-3xl md:text-6xl lg:text-8xl py-2 font-extrabold mb-3 mt-1 typeWriter-color">
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer",
                    "Front End Developer",
                    "Back End Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className=" font-normal my-3 mb-6 text-[#303030]">
              A Full Stack Developer with a passion for creating efficient and
              user-friendly web applications with a strong foundation in modern
              technologies. Dedicated to continuous learning and staying
              up-to-date with industry trends.
            </p>
            <a href={linkedin_url} target="_blank" rel="noreferrer">
              <button className="bg-orange px-14 py-3 rounded text-white hover:bg-chiniseBlack hover:text-orange duration-300 ">
                <span className="flex items-center gap-2">
                  HIRE ME <FontAwesomeIcon icon={faAngleRight} />
                </span>
              </button>
            </a>

            <div className="flex gap-28 lg:gap-40 mt-16 lg:mt-10">
              <div>
                <h1 className="text-left">Find With Me</h1>
                <div className="flex items-center gap-5 mt-5">
                  <a
                    href={facebook_url}
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <img
                      src={fb}
                      className="w-12 p-2 rounded bg-white"
                      alt="fb"
                    />
                  </a>
                  <a
                    href="https://discord.com/channels/@amiihasan"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <img
                      src={discord}
                      className="w-12 p-2 rounded bg-white"
                      alt="fb"
                    />
                  </a>
                  <a
                    href={linkedin_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={linkedin}
                      className="w-12 p-2 rounded bg-white"
                      alt="fb"
                    />
                  </a>
                </div>
              </div>
              <div>
                <h1>Best Skill On</h1>
                <div className="flex items-center gap-5 mt-5">
                  <a
                    href={github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={github}
                      className="w-12 p-2 rounded bg-white"
                      alt="fb"
                    />
                  </a>
                  <a href={figma_url} target="_blank" rel="noopener noreferrer">
                    {" "}
                    <img
                      src={figma}
                      className="w-12 p-2 rounded bg-white"
                      alt="fb"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 grid place-items-center relative">
          <img
            src={bg_shape}
            alt=""
            className="absolute top-25 bg_shadow_animation"
          />
          <img
            src={amihasan_3}
            alt="amihasan_profile"
            className="w-3/4 h-full object-contain pointer-events-none z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

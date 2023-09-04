import {
  faArrowRight,
  faEye,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import useProjects from "../hooks/useProjects";

const Projects = () => {
  const [projects] = useProjects();

  return (
    <div className="max-w-screen-2xl mx-auto my-32" id="projects">
      <h1 className="text-3xl lg:text-5xl text-center font-bold my-32">
        My <span className="special-color ">Project</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 p-3">
        {projects.slice(0, 3).map((e, index) => (
          <div
            key={index}
            className="border bg-base-200  rounded-lg overflow-hidden hover:shadow-2xl duration-300 hover:duration-300"
          >
            <div className="relative h-72 photo overflow-hidden">
              <img
                src={e?.image}
                className="w-full h-full object-cover"
                alt=""
              />
              <div className="photo-album  z-10 border border-pink-800 ">
                <div className=" grid place-items-center bg-black bg-opacity-50  absolute bottom-0 top-0 left-0 right-0">
                  <div className="text-center w-full text-white py-5 bg-[#3E4CA0] bg-opacity-40">
                    <h1>{e?.project}</h1>
                    <a href={e?.live} target="_blank" rel="noreferrer">
                      <button
                        title="Go live"
                        className="border w-8 h-8 rounded-full mx-2 mt-3"
                      >
                        <FontAwesomeIcon icon={faGlobe} />
                      </button>
                    </a>
                    <Link to={`/project-details/${e.project}`}>
                      <button
                        title="View details"
                        className="border w-8 h-8 rounded-full mx-2 mt-3"
                      >
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center p-5">
              <h1>{e?.project}</h1>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center my-5">
        <Link to="all-projects">
          <button className="bg-orange px-4 py-2 text-white flex items-center mx-auto hover:scale-105 hover:shadow-2xl duration-300 hover:duration-300 rounded">
            <p className="">View All</p>
            <p>
              <FontAwesomeIcon
                className="text-xl mx-2  hover:translate-x-2 duration-300 hover:duration-300"
                icon={faArrowRight}
              />
            </p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;

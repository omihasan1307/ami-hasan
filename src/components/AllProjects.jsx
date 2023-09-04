import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faGlobe } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import useProjects from "../hooks/useProjects";
import { Bounce } from "react-awesome-reveal";

const AllProjects = () => {
  const [projects] = useProjects();

  return (
    <div className=" bg-white" id="skills">
      <div className="lg:px-32 mb-20">
        <h1 className="text-3xl lg:text-5xl text-center font-bold py-16">
          My <span className="special-color ">All Projects</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 p-3">
          {projects.map((e, index) => (
            <Bounce key={index}>
              <div className="shadow rounded-lg  hover:shadow-2xl duration-300 hover:duration-300">
                <div className="h-72 photo overflow-hidden">
                  <img
                    src={e?.image}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="flex justify-between items-center p-5">
                  <div className="w-full">
                    <h1>{e?.project}</h1>
                  </div>
                  <div className="flex space-x-5">
                    <a href={e?.live} target="_blank" rel="noreferrer">
                      <button className="border w-8 h-8 rounded-full">
                        <FontAwesomeIcon icon={faGlobe} />
                      </button>
                    </a>
                    <Link to={`/project-details/${e.project}`}>
                      <button className="border w-8 h-8 rounded-full">
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </Bounce>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllProjects;

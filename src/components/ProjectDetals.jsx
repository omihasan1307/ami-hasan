import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAsterisk,
  faGlobe,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectDetals = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("../../projects.json")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setDetails(data?.find((e) => e.project === id));
      });
  }, [id]);

  return (
    <>
      {loading ? (
        <div className="min-h-screen grid place-items-center">
          <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-10 mb-8 rounded-xl max-w-screen-2xl mx-auto my-20">
          <div className="col-span-1 ">
            <img
              src={details?.image}
              className="h-full w-full object-contain rounded-lg shadow-lg"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              alt="sss"
            />
          </div>
          <div
            className="lg:col-span-2  p-3"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h1 className="text-2xl font-semibold mb-2 text-orange">
              {details.project}
            </h1>
            <h1 className="">{details.overview}</h1>
            <div className="mt-3 mb-5">
              {details?.features.map((f, index) => (
                <ul key={index}>
                  <li className="mb-1 ml-5">
                    <FontAwesomeIcon
                      icon={faAsterisk}
                      className="mr-3 text-orange"
                    />
                    {f.feature}
                  </li>
                </ul>
              ))}
            </div>
            {details?.technology?.map((t, index) => (
              <button
                key={index}
                className="px-4 py-2 mb-4 bg-orange mr-3 text-white rounded-md"
              >
                {t.name}
              </button>
            ))}
            <div>
              <button className="px-4 py-2 bg-slate-200 mr-3 rounded-md">
                <a href={details.links.live} target="_blank ">
                  <FontAwesomeIcon
                    icon={faGlobe}
                    className="text-orange mr-1"
                  />{" "}
                  Live site
                </a>
              </button>

              <button className="px-4 py-2 bg-slate-200 mr-3 rounded-md">
                <a href={details.links.client} target="_blank ">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-orange mr-1"
                  />{" "}
                  Client Side
                </a>
              </button>
              {details.links.server && (
                <button className="px-4 py-2 bg-slate-200 mr-3 rounded-md">
                  <a href={details.links.server} target="_blank ">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="text-orange mr-1"
                    />{" "}
                    Live server
                  </a>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectDetals;

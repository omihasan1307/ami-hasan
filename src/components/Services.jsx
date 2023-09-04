import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDesktop,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div className="lg:px-32 bg-base-100 my-32" id="services">
      <h1 className="text-5xl text-center font-bold my-32">
        My <span className="special-color ">Services</span>
      </h1>

      <VerticalTimeline lineColor="#ffb580">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Front-End Developement"
          iconStyle={{
            background: "#FF6B00",
            color: "#fff",
          }}
          contentStyle={{
            background: "#fff",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          icon={<FontAwesomeIcon icon={faDesktop} />}
        >
          <h3 className="vertical-timeline-element-title text-xl font-semibold">
            Front-End Developement
          </h3>
          <p className="text-gray-500">
            I am able to creating Front End using HTML, CSS, SASS, CSS
            Framework, Vanila JS, React JS, Next JS, TypeScript.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Back-End Developement"
          iconStyle={{ background: "#FF6B00", color: "#fff" }}
          contentStyle={{
            background: "#fff",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          icon={<FontAwesomeIcon icon={faCode} />}
        >
          <h3 className="vertical-timeline-element-title text-xl font-semibold">
            Back-End Developement
          </h3>
          <p className="text-gray-500 ">
            I am able to creating Back End server using Node JS, Express JS,
            MongoDB, Also I'm able to connectivity with database such as
            MongoDB.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="UI/UX Design"
          iconStyle={{ background: "#FF6B00", color: "#fff" }}
          contentStyle={{
            background: "#fff",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          icon={<FontAwesomeIcon icon={faPalette} />}
        >
          <h3 className="vertical-timeline-element-title text-xl font-semibold">
            UI/UX DESIGN
          </h3>
          <p className="text-gray-500">
            Creating basic UI/UX design using figma. I'm also able to create
            prototype in figma. Proficient in Figma and usability testing.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Services;

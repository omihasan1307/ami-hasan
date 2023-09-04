import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const blogs = [
  {
    title: "Become a UX/UI Designer With Career Foundry.",
    image: "https://credesign.vercel.app/onePage/onePageOne/img/blogOne.png",
    publish: "20 January 2023",
  },
  {
    title: "The Best App Development For Your Business Plan.",
    image: "https://credesign.vercel.app/onePage/onePageOne/img/blogTwo.png",
    publish: "25 January 2023",
  },
  {
    title: "The Best Portfolio For Agency Design Thinking",
    image: "https://credesign.vercel.app/onePage/onePageOne/img/blogThree.png",
    publish: "30 January 2023",
  },
];

const Blog = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-3 lg:px-0">
      <h1 className="text-5xl text-center font-bold my-32">
        Latest <span className="special-color ">Blogs</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 p-3">
        {blogs.map((e, index) => (
          <div
            key={index}
            className="col-span-1 shadow rounded overflow-hidden"
          >
            <div className="h-64 overflow-hidden">
              <img
                src={e.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3">
              <p className="my-3">{e.publish}</p>
              <h1 className="text-xl font-bold my-3">{e.title}</h1>
              <button className="text-orange font-semibold">
                Read More <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

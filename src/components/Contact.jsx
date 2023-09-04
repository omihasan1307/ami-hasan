import {
  faEnvelope,
  faLocationDot,
  faPaperPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.EMAIL_SERVICE,
        import.meta.env.EMAIL_TEMPLATE,
        form.current,
        import.meta.env.EMAIL_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="bg-base-100">
      <div className="max-w-screen-2xl mx-auto my-32 px-3 lg:px-0" id="contact">
        <h1 className="text-5xl text-center font-bold">
          Frequently asked <br />{" "}
        </h1>
        <h1 className="special-color text-5xl text-center font-bold pt-3 mb-5">
          any questions
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center">
          <div
            className="col-span-1 px-10"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="mb-12 text-2xl text-gray-700">
              <p>
                Feel free to contact me. I am always open to discussing new
                projects, creative ideas, or opportunities to be a part of your
                vision
              </p>
            </div>
            <div className="text-gray-700">
              <div className="flex items-center gap-3 ">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-orange h-5 w-4"
                />{" "}
                <h1> 1400 Narayanganj, Bangladesh</h1>
              </div>
              <div className="flex items-center gap-3 my-5">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-orange h-4 "
                />
                <h1>amihasan130@gmail.com</h1>
              </div>
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faPhone} className="text-orange h-4" />
                <h1> +880 1862-404050</h1>
              </div>
            </div>
          </div>
          <div
            className="col-span-1"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="w-full mt-8 lg:w-2/3 lg:ml-32 bg-base-100 rounded shadow-2xl px-10 py-16 mb-12 "
            >
              <input
                type="text"
                name="name"
                className="w-full mx-auto my-2 py-2 border border-t-0 border-x-0 
               border-b-orange outline-none"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                className="w-full mx-auto my-2 py-2 border border-t-0 border-x-0 
              border-b-orange outline-none"
                placeholder="Mail Address"
                required
              />
              <input
                type="text"
                name="subject"
                className="w-full mx-auto my-2 py-2 border border-t-0 border-x-0 
             border-b-orange outline-none "
                placeholder="Subject"
                required
              />
              <textarea
                placeholder="Message"
                name="message"
                rows={1}
                className="w-full mx-auto my-2 py-2 border border-t-0  border-x-0 
             border-b-orange outline-none"
              ></textarea>

              <div className="flex justify-end mt-2 ">
                <button className="bg-orange space-x-2  px-8 py-3 rounded text-white hover:bg-chiniseBlack hover:text-orange duration-300 ">
                  <input type="submit" value="Submit" />
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

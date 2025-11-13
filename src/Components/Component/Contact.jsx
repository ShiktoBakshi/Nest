import { FaMapMarkedAlt } from "react-icons/fa";

import Banner from "./Banner";




const Contact = () => {
  return (
    <div className="px-6 md:px-16  py-12 text-gray-800">
      {/* Header Section */}
        
     
      <h1 className="text-[#3BB77E] text-lg">How can help you ?</h1>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-15 justify-center items-center  ">
        <div>

          <h1 className="text-5xl  font-bold py-5 ">Let us know how
            we can help you</h1>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In eveniet excepturi architecto sed ut ab inventore. Sapiente, quo numquam doloremque adipisci, perspiciatis tenetur, amet exercitationem harum a in quam. Asperiores facere quisquam distinctio? Aperiam saepe ex earum vitae aspernatur odit!</p>



        </div>
        <div>
          <div className="flex py-5 gap-5">
            <div>
              <h3 className="text-lg font-bold">01. Visit Feedback</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, accusantium.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold">02. Employer Services</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, accusantium.</p>
            </div>

          </div>
          <div className="flex py-5 gap-5">
            <div>
              <h3 className="text-[#3BB77E] text-lg font-bold">03. Billing Inquiries</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, accusantium.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold">04.General Inquiries</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, accusantium.</p>
            </div>
          </div>
        </div>

      </section>
      {/* {/* Help Topics */}
      <div className="grid grid-cols-1 mx-auto justify-center  lg:grid-cols-3 md:grid-cols-2 py-20 ">
        <div>
          <h3 className="text-lg font-semibold text-[#3BB77E]">Office</h3>
          <p>205 North Michigan Avenue, Suite 810</p>
          <p>Chicago, 60601, USA</p>
          <p>
            <span className="font-medium">Phone:</span> (123) 456-7890
          </p>
          <p>
            <span className="font-medium">Email:</span>{" "}
            <a
              href="mailto:contact@Evara.com"
              className="text-[#3BB77E] hover:underline"
            >
              contact@Evara.com
            </a>
          </p>

          <button className="mt-3 flex items-center gap-2 bg-[#3BB77E] text-white px-5 py-2 rounded-lg hover:bg-[#2e9e67] transition-all">
            <FaMapMarkedAlt />
            View map
          </button>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#3BB77E]">Studio</h3>
          <p>205 North Michigan Avenue, Suite 810</p>
          <p>Chicago, 60601, USA</p>
          <p>
            <span className="font-medium">Phone:</span> (123) 456-7890
          </p>
          <p>
            <span className="font-medium">Email:</span>{" "}
            <a
              href="mailto:contact@Evara.com"
              className="text-[#3BB77E] hover:underline"
            >
              contact@Evara.com
            </a>
          </p>

          <button className="mt-3 flex items-center gap-2 bg-[#3BB77E] text-white px-5 py-2 rounded-lg hover:bg-[#2e9e67] transition-all">
            <FaMapMarkedAlt />
            View map
          </button>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#3BB77E]">Shop</h3>
          <p>205 North Michigan Avenue, Suite 810</p>
          <p>Chicago, 60601, USA</p>
          <p>
            <span className="font-medium">Phone:</span> (123) 456-7890
          </p>
          <p>
            <span className="font-medium">Email:</span>{" "}
            <a
              href="mailto:contact@Evara.com"
              className="text-[#3BB77E] hover:underline"
            >
              contact@Evara.com
            </a>
          </p>

          <button className="mt-3 flex items-center gap-2 bg-[#3BB77E] text-white px-5 py-2 rounded-lg hover:bg-[#2e9e67] transition-all">
            <FaMapMarkedAlt />
            View map
          </button>
        </div>
      </div>




      {/* Contact Form Section */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h4 className="text-[#3bb77e] font-semibold text-lg">Contact form</h4>
          <h2 className="text-3xl font-bold mt-2 mb-4">Drop Us a Line</h2>
          <p className="text-gray-500 text-sm mb-6">
            Your email address will not be published. Required fields are marked *
          </p>

          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border rounded-lg w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border rounded-lg w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Phone"
                className="border rounded-lg w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="text"
                placeholder="Subject"
                className="border rounded-lg w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <textarea
              rows="4"
              placeholder="Your Message"
              className="border rounded-lg w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            ></textarea>
            <button
              type="submit"
              className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
            >
              Send message
            </button>
          </form>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="https://i.ibb.co.com/chLwm2dv/460.png"
            alt="Contact"
            className="rounded-2xl shadow-md w-full max-w-sm object-cover"
          />
        </div>
      </div>
      <Banner></Banner>
    </div>
  );
};

export default Contact;
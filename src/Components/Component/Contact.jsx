import Banner from "./Banner";




const Contact = () => {
  return (
    <div className="px-6 md:px-16 py-12 text-gray-800">
      {/* Header Section */}
      {/* <div className="text-center mb-12">
        <h4 className="text-[#3bb77e] font-semibold text-lg">How can help you ?</h4>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Let us know how <br /> we can help you
        </h2>
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>

      {/* Help Topics */}
      {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 text-left">
        <div>
          <h5 className="font-semibold text-[#3bb77e]">01. Visit Feedback</h5>
          <p className="text-gray-500 text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div>
          <h5 className="font-semibold text-[#3bb77e]">02. Employer Services</h5>
          <p className="text-gray-500 text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div>
          <h5 className="font-semibold text-[#3bb77e]">03. Billing Inquiries</h5>
          <p className="text-gray-500 text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div>
          <h5 className="font-semibold text-[#3bb77e]">04. General Inquiries</h5>
          <p className="text-gray-500 text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>  */}

      {/* Office Information */}
      {/* <div className="grid md:grid-cols-3 gap-6 mb-16">
        {[
          { title: "Office" },
          { title: "Studio" },
          { title: "Shop" },
        ].map((loc, i) => (
          <div key={i} className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h4 className="font-semibold text-lg mb-3">{loc.title}</h4>
            <p className="text-gray-500 text-sm">
              205 North Michigan Avenue, Suite 910 <br />
              Chicago, 60601, USA <br />
              Phone: (123) 456-7890 <br />
              Email: contact@byrva.com
            </p>
            <button className="mt-4 bg-[#3bb77e] text-white px-4 py-2 rounded-lg text-sm">
              View map
            </button>
          </div>
        ))}
      </div> */}

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
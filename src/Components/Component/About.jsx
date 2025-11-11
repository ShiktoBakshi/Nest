import  banner from "../../assets/banner.png"

const About = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* About Intro Section */}
      <section className="grid md:grid-cols-2 gap-10 items-center py-16 px-6 md:px-16 bg-white">
        <div>
          <img
            src="https://i.ibb.co.com/kCRkGNp/106-2.png"
            alt="Cooking"
            className="rounded-2xl shadow-lg w-full"
          />
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Welcome to Nest
          </h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            eleifend lorem. Cras condimentum, quam non ultrices euismod, sapien
            dolor placerat purus, a ullamcorper urna velit non enim.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <img
              src="https://i.ibb.co.com/DHWGS8qs/about-1.png"
              alt="Dish 1"
              className="rounded-lg"
            />
            <img
              src="https://i.ibb.co.com/B2pDBKtG/about-2.png"
              alt="Dish 2"
              className="rounded-lg"
            />
            <img
              src="https://i.ibb.co.com/fdKqWwKs/about-3.png"
              alt="Dish 3"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* What We Provide Section */}
      {/* <section className="bg-gray-50 py-16 px-6 md:px-16 text-center">
        <h2 className="text-3xl font-bold mb-10">What We Provide?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Best Prices & Offers",
            "Wide Assortment",
            "Free Delivery",
            "Easy Returns",
            "100% Satisfaction",
            "Great Daily Deal",
          ].map((title, idx) => (
            <div
              key={idx}
              className="bg-white shadow-sm rounded-2xl p-8 hover:shadow-md transition"
            >
              <div className=" text-4xl mb-4"><img src="https://i.ibb.co.com/1GLfMRgW/icon-1.png" alt="" srcset="" /></div>
              <h3 className="font-semibold text-xl mb-2">{title}</h3>
              <p className="text-gray-500 mb-3">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
              <a href="#" className="text-[#3bb77e] font-semibold">
                Read more 
              </a>
            </div>
          ))}
        </div>
      </section> */}

      {/* Partner / Performance Section */}
      <section className="py-16 px-6 md:px-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="">
          <img
            src="https://i.ibb.co.com/q33WN0Gg/about-5.png"
            alt="Team work"
            className="rounded-lg"
          />
         
        </div>
        <div>
          <h3 className="text-green-500 uppercase font-medium mb-2">
            Our performance
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Partner for e-commerce grocery solution
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Quis ex perspiciatis autem nobis, laboriosam similique magnam
            eveniet voluptatum quos. Maxime voluptate, vero laborum adipisci
            accusamus architecto pariatur cum!
          </p>
        
        </div>
      </section>
        <div className="grid sm:grid-cols-3 gap-6 justify-center text-center">
            <div>
              <h4 className="font-semibold mb-1">Who we are</h4>
              <p className="text-gray-500 text-sm">
                Voluptatem deleniti minima eveniet!
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Our history</h4>
              <p className="text-gray-500 text-sm">
                Nostrum debitis officia tenetur.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Our mission</h4>
              <p className="text-gray-500 text-sm">
                Ullam alias dolorem obcaecati.
              </p>
            </div>
          </div>

     {/* Our Team Section */}
<section className="py-16 px-6 md:px-16 bg-white">
  <div className="grid md:grid-cols-2 gap-10 items-center">
    {/* Left Text Section */}
    <div>
      <h5 className="text-green-500 font-semibold mb-2">Our Team</h5>
      <h2 className="text-4xl font-bold mb-6 leading-tight">
        Meet Our Expert Team
      </h2>
      <p className="text-gray-600 mb-4 leading-relaxed">
        Proin ullamcorper pretium orci. Donec necscle risus leo. Nam massa
        dolor imperdiet necnon sequata congue idsem. Maecenas malesuada
        faucibus finibus.
      </p>
      <p className="text-gray-600 mb-8 leading-relaxed">
        Proin ullamcorper pretium orci. Donec necscle risus leo. Nam massa
        dolor imperdiet necnon sequata congue idsem. Maecenas malesuada
        faucibus finibus.
      </p>
      <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-md">
        View All Members
      </button>
    </div>

    {/* Right Team Cards */}
    <div className="flex flex-wrap justify-center gap-8">
      {/* Member 1 */}
      <div className="w-64 bg-white rounded-2xl shadow hover:shadow-lg transition">
        <div className="overflow-hidden rounded-t-2xl">
          <img
            src="https://i.ibb.co.com/ZRb83RmP/Main.png"
            alt="H. Merinda"
            className="w-full h-64 object-cover transform hover:scale-105 transition duration-500"
          />
        </div>
        <div className="text-center p-5">
          <h4 className="font-semibold text-lg">H. Merinda</h4>
          <p className="text-gray-500 text-sm mb-4">CEO & Co-Founder</p>
          <div className="flex justify-center space-x-4 text-green-600">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>

      {/* Member 2 */}
      <div className="w-64 bg-white rounded-2xl shadow hover:shadow-lg transition">
        <div className="overflow-hidden rounded-t-2xl">
          <img
            src="https://i.ibb.co.com/Lznj28kK/Main-1.png"
            className="w-full h-64 object-cover transform hover:scale-105 transition duration-500"
          />
        </div>
        <div className="text-center p-5">
          <h4 className="font-semibold text-lg">Dilan Spector</h4>
          <p className="text-gray-500 text-sm mb-4">Head Engineer</p>
          <div className="flex justify-center space-x-4 text-green-600">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
       <img className="w-11/12 mx-auto mt-2"
           src={banner}
           />
    </div>
  );
};

export default About;
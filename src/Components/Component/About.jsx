import  banner from "../../assets/banner.png"
import icon from "../../assets/icon-1.png"
import icon_2 from "../../assets/icon-2.png"
import icon_3 from "../../assets/icon-3.png"
import icon_4 from "../../assets/icon-4.png"
import icon_5 from "../../assets/icon-5.png"
import icon_6 from "../../assets/icon-6.png"
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
        <div >
         <div className="py-20">
           <h1 className="text-3xl md:text-4xl font-bold mb-4 py-5">
            Welcome to Nest
          </h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            eleifend lorem. Cras condimentum, quam non ultrices euismod, sapien
            dolor placerat purus, a ullamcorper urna velit non enim.
          </p>
         </div>
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

   




 <section className="max-w-7xl mx-auto px-6 py-16"> <header className="text-center mb-10"> <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">What We Provide?</h2> <div className="mx-auto mt-3 w-28 h-1 bg-emerald-200 rounded-full" /> </header>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Card 1 */}
    <article className="bg-white border-none rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-center mb-6">
      
       <img src={icon} alt="" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-3">Best Prices &amp; Offers</h3>
      <p className="text-sm text-gray-400 mb-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
      <a className="text-sm font-medium text-emerald-500 hover:underline" href="#">Read more</a>
    </article>

    {/* Card 2 */}
    <article className="bg-white border-none rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-center mb-6">
        
       <img src={icon_2} alt="" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-3">Wide Assortment</h3>
      <p className="text-sm text-gray-400 mb-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
      <a className="text-sm font-medium text-emerald-500 hover:underline" href="#">Read more</a>
    </article>

    {/* Card 3 */}
    <article className="bg-white border-none rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-center mb-6">
     
        <img src={icon_3} alt="" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-3">Free Delivery</h3>
      <p className="text-sm text-gray-400 mb-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
      <a className="text-sm font-medium text-emerald-500 hover:underline" href="#">Read more</a>
    </article>

    {/* Card 4 */}
    <article className="bg-white border-none rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-center mb-6">
        
        <img src={icon_4} alt="" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-3">Easy Returns</h3>
      <p className="text-sm text-gray-400 mb-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
      <a className="text-sm font-medium text-emerald-500 hover:underline" href="#">Read more</a>
    </article>

    {/* Card 5 */}
    <article className="bg-white border-none rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-center mb-6">
       
       <img src={icon_5} alt="" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-3">100% Satisfaction</h3>
      <p className="text-sm text-gray-400 mb-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
      <a className="text-sm font-medium text-emerald-500 hover:underline" href="#">Read more</a>
    </article>

    {/* Card 6 */}
    <article className="bg-white border-none rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-center mb-6">
        
        <img src={icon_6} alt="" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-3">Great Daily Deal</h3>
      <p className="text-sm text-gray-400 mb-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
      <a className="text-sm font-medium text-emerald-500 hover:underline" href="#">Read more</a>
    </article>
  </div>
</section>















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
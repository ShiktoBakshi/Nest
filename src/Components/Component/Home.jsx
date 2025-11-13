import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Slider from "./Slider";
import Featured from "./Featured";
import { IoCartOutline } from "react-icons/io5";
import Card from "./Card";

const Home = () => {

  const products = useLoaderData();

  const visibleProducts = products.slice(0, 9);


  return (
    <div className="p-6">
      <Banner></Banner>
      <Featured></Featured>
      <Slider></Slider>
      <Card></Card>
   
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 ">

        {visibleProducts.map((product, index) => (

          <li key={index} className="border-none  p-4 rounded-lg shadow-2xl hover:shadow-[#3BB77E]  relative translate hover:scale-105">
            <div className="flex justify-center">
              <img src={product.image} alt="" />
            </div>
            <h3 className="text-gray-400">{product.category} </h3>
            <h3 className="bg-[#3BB77E] p-2 absolute top-0 left-0 rounded-tl-lg rounded-br-lg "> Save:{product.discount} </h3>

            <h2 className="font-semibold py-2">{product.name}</h2>
            <h4> Brand:{product.brand} </h4>
            <div className="lg:flex justify-between py-2">
              <div className="lg:flex gap-2 py-2  ">
                <p className="text-[#3BB77E] underline font-bold">Price: ${product.price}</p>
                <p className="text-gray-400 line-through ">Old_Price:{product.old_price} </p>

              </div>

              <div>
                <button className="flex justify-center items-center gap-2 text-[#3BB77E] font-bold bg-[#b1efd2] h-7 w-20 hover:text-black">
                  <IoCartOutline />
                  <h5> Add</h5>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

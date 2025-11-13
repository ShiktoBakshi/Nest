import { FaArrowRight } from "react-icons/fa";

const Card = () => {
    return (
        <div className="flex flex-col lg:flex-row md:flex-row gap-5 ">


            <div className="bg-[url('/alt.png')]  w-full bg-contain bg-no-repeat bg-center rounded-xl flex flex-col justify-center items-start my-5 p-10 lg:p6" >
                <div  className="p-1">
                   <div className="w-[80%] ">
                     <h1 className="lg:text-3xl text-start py-3">Everyday Fresh & 
                        Clean with Our 
                        Products</h1>
                   </div>
                    <button className="text-white bg-[#3BB77E] flex justify-center items-center gap-1 w-[50%] rounded-xl hover:text-black ">Shop Now <FaArrowRight /> </button>

                </div>

            </div>


            <div className="bg-[url('/alt_2.png')]  w-full bg-contain bg-no-repeat bg-center rounded-xl flex flex-col justify-center items-start my-5  p-10 lg:p6" >
                <div className="p-1" >
                    <div className="w-[80%] ">
                        <h1 className="lg:text-3xl text-start py-3 ">Make your  Breakfast
                        Healthy and Easy</h1>
                    </div>
                    <button className="text-white bg-[#3BB77E] flex justify-center items-center gap-1 w-[50%] rounded-xl hover:text-black ">Shop Now <FaArrowRight /> </button>

                </div>

            </div>


            <div className="bg-[url('/alt_3.png')]  w-full bg-contain bg-no-repeat bg-center rounded-xl flex flex-col justify-center items-start my-5 p-10 lg:p6" >
                <div className="p-1" >
                   <div className="w-[80%] ">
                     <h1 className="lg:text-3xl text-start py-3">The best Organic
                        Products Online</h1>
                   </div>
                    <button className="text-white bg-[#3BB77E] flex justify-center items-center gap-1 w-[50%] rounded-xl hover:text-black ">Shop Now <FaArrowRight /> </button>

                </div>

            </div>








        </div>
    );
};

export default Card;
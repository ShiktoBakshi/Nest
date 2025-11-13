import { IoCartOutline } from "react-icons/io5"

const Cards = ({Card}) => {
    return (
        <div>
         <div className="border-none  p-4 rounded-lg shadow-2xl hover:shadow-[#3BB77E]  relative translate hover:scale-105">
            <div className="flex justify-center">
              <img src={Card.image} alt="" />
            </div>
            <h3 className="text-gray-400">{Card.category} </h3>
            <h3 className="bg-[#3BB77E] p-2 absolute top-0 left-0 rounded-tl-lg rounded-br-lg "> Save:{Card.discount} </h3>

            <h2 className="font-semibold py-2">{Card.name}</h2>
            <h4> Brand:{Card.brand} </h4>
            <div className="lg:flex justify-between py-2">
              <div className="lg:flex gap-2 py-2  ">
                <p className="text-[#3BB77E] underline font-bold">Price: ${Card.price}</p>
                <p className="text-gray-400 line-through ">Old_Price:{Card.old_price} </p>

              </div>

              <div>
                <button className="flex justify-center items-center gap-2 text-[#3BB77E] font-bold bg-[#b1efd2] h-7 w-20 hover:text-black">
                  <IoCartOutline />
                  <h5> Add</h5>
                </button>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Cards ;
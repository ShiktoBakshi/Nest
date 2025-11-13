import { FaArrowDown, FaArrowsAltV, FaRegEye } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import icon from "../../assets/391.png"
import { BiBorderAll } from "react-icons/bi";
import { TbSortAscending2 } from "react-icons/tb";

const Blog = () => {

    const Blogs=useLoaderData ()
  
    return (
        <div>
            <div className="flex w-11/12 mx-auto justify-between py-10">
      <div className="flex items-center gap-2 ">
        <img src={icon} alt="" />
        <h1 className="text-xl"> Recips Articles</h1>
      </div>
      <div className="flex gap-5">
        <div className="flex items-center  p-3 rounded-xl"><BiBorderAll /> Show :50 <FaArrowDown /></div>
      <div className="flex items-center "><TbSortAscending2 /> Sort :Featured <FaArrowDown /> </div>
      </div>
      
     </div>

            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 w-11/12 mx-auto ">
           
                   {Blogs.map((blog, index) => (
           
                     <li key={index} className="border-none  p-4   gap-5  translate hover:scale-105">
                       <div className="flex justify-center">
                         <img src={blog.image} alt="" />
                       </div>
                       <h3 className="text-gray-400 text-center">{blog.category} </h3>
                      
           
                       <h2 className="font-semibold py-2 text-center">{blog.name}</h2>
                       <div className="flex items-center justify-around">
                        <h2 className=" text-center flex items-center"><MdOutlineDateRange/>   {blog.date}</h2>
                        <h2 className=" py-2 text-center flex items-center"><FaRegEye />  {blog.views}</h2>
                        <h2 className=" py-2 text-center flex items-center"> <IoTimeOutline />   {blog.minutes}</h2>
                       </div>
                      
                      
                     </li>
                   ))}
                 </ul>
        </div>
    );
};

export default Blog;
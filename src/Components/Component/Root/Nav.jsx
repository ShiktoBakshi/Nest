



import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png"
import { MdOutlineLocalFireDepartment } from "react-icons/md";


const Nav = () => {



    return (
        <>
            <div className="navbar  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm backdrop-blur-xl dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow">

                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? "text-[#3BB77E] font-semibold border-b-2 border-[#3BB77E]" : "text-gray-700"
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        isActive ? "text-[#3BB77E] font-semibold border-b-2 border-[#3BB77E]" : "text-gray-700"
                                    }
                                >
                                    About
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/mega"
                                    className={({ isActive }) =>
                                        isActive ? "text-[#3BB77E] font-semibold border-b-2 border-[#3BB77E]" : "text-gray-700"
                                    }
                                >
                                    Mega Menu
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/blog"
                                    className={({ isActive }) =>
                                        isActive ? "text-[#3BB77E] font-semibold border-b-2 border-[#3BB77E]" : "text-gray-700"
                                    }
                                >
                                    Blog
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        isActive ? "text-[#3BB77E] font-semibold border-b-2 border-[#3BB77E]" : "text-gray-700"
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                    <div className=" justify-center items-center flex gap-2">
                        <div>
                            <img src={logo} alt="logo" />
                        </div>
                        <div>
                            <div className="text-center mr-10">
                                <h1 className="lg:text-4xl text-2xl text-[#3bb77e] " > Nest</h1>
                                <p className="text-[5px] lg:text-[10px] ">MART & GROCERY</p>
                            </div>


                        </div>
                    </div>
                    <a className="btn btn-ghost text-md"><MdOutlineLocalFireDepartment className="text-xl  text-[#3bb77e] " /> Hot Deals</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal gap-10">
                         <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? "text-[#3BB77E] font-semibold border-b-2 border-[#3BB77E]" : "text-gray-700"
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        isActive ? "text-[#3BB77E] font-semibold border-b-2 border-[#3BB77E]" : "text-gray-700"
                                    }
                                >
                                    About
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/mega"
                                    className={({ isActive }) =>
                                        isActive ? "text-[#3BB77E] font-semibold border-b-2 border-[#3BB77E]" : "text-gray-700"
                                    }
                                >
                                    Mega Menu
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/blog"
                                    className={({ isActive }) =>
                                        isActive ? "text-[#3BB77E] font-semibold border-b-2 border-[#3BB77E]" : "text-gray-700"
                                    }
                                >
                                    Blog
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        isActive ? "text-[#3BB77E] font-semibold border-b-2 border-[#3BB77E]" : "text-gray-700"
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-[#3BB77E] ">Login</a>
                </div>
            </div>
        </>
    );
};

export default Nav;
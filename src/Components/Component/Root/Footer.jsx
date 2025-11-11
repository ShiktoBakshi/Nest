
import { FaPhoneAlt, FaEnvelope, FaClock, FaMapMarkerAlt, FaCcAmex } from "react-icons/fa";
import { BsGooglePlay, BsApple } from "react-icons/bs";
import logo from "../../../assets/logo.png"
import { FaCcMastercard } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import { FaCcPaypal } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-50 text-gray-700 py-12 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 sm:grid-cols-2 gap-8">
                {/* Company Info */}
                <div>
                    <div className="flex items-center mb-4">
                        <img src={logo} alt="Nest Logo" className="w-10 h-10 mr-2" />
                       <div>
                         <h1 className="lg:text-4xl text-2xl text-[#3bb77e] " > Nest</h1>
                        <p className="text-[5px] lg:text-[10px] ">MART & GROCERY</p>
                       </div>
                    </div>
                    <p className="text-sm mb-4">
                        Awesome grocery store website template
                    </p>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-green-600" />
                            5171 W Campbell Ave, Kent, Utah 53127, USA
                        </li>
                        <li className="flex items-center gap-2">
                            <FaPhoneAlt className="text-green-600" />
                            +1 (540) 025-124553
                        </li>
                        <li className="flex items-center gap-2">
                            <FaEnvelope className="text-green-600" />
                            sale@Nest.com
                        </li>
                        <li className="flex items-center gap-2">
                            <FaClock className="text-green-600" />
                            10:00 - 18:00, Mon - Sat
                        </li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Delivery Information</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Support Center</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>

                {/* Account */}
                <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Account</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#">Sign In</a></li>
                        <li><a href="#">View Cart</a></li>
                        <li><a href="#">My Wishlist</a></li>
                        <li><a href="#">Track My Order</a></li>
                        <li><a href="#">Help Ticket</a></li>
                        <li><a href="#">Shipping Details</a></li>
                        <li><a href="#">Compare Products</a></li>
                    </ul>
                </div>

                {/* Corporate */}
                <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Corporate</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#">Become a Vendor</a></li>
                        <li><a href="#">Affiliate Program</a></li>
                        <li><a href="#">Farm Business</a></li>
                        <li><a href="#">Farm Careers</a></li>
                        <li><a href="#">Our Suppliers</a></li>
                        <li><a href="#">Accessibility</a></li>
                        <li><a href="#">Promotions</a></li>
                    </ul>
                </div>

                {/* Popular / Install App */}
                <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Install App</h3>
                    <p className="text-sm mb-4">From App Store or Google Play</p>
                    <div className="flex gap-2 mb-4">
                        <button className="flex items-center bg-black text-white px-3 py-2 rounded-lg text-sm">
                            <BsGooglePlay className="text-lg mr-2" /> Google Play
                        </button>
                        <button className="flex items-center bg-black text-white px-3 py-2 rounded-lg text-sm">
                            <BsApple className="text-lg mr-2" /> App Store
                        </button>
                    </div>
                    <p className="text-sm mb-2">Secured Payment Gateways</p>
                    <div className="flex gap-2">
                        <RiVisaLine className="text-5xl"/>
                        <FaCcMastercard className="text-5xl" />
                       <FaCcPaypal className="text-5xl"/>
                       <FaCcAmex  className="text-5xl"/>
                    </div>
                </div>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-4 text-center text-sm text-gray-500">
                © 2025 Nest Mart & Grocery. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className=" text-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Logo */}
        <div className="text-2xl font-semibold tracking-wide">
          <img src={logo} className="w-30 h-20" />
        </div>

        {/* Contact Info */}
        <div className="text-sm leading-tight text-center sm:text-right">
          <div>
            {/* Address */}
            <div className="flex gap-1 justify-center sm:justify-end items-center">
              <FaLocationDot className="text-base" />
              <p className="font-medium">
                Shri Ram Enterprises, Near Gas Agency, Chandia
              </p>
            </div>

            {/* Phone */}
            <div className="flex gap-1 justify-center sm:justify-end items-center mt-0.5">
              <IoCall className="text-base" />
              <p className="opacity-90 font-medium">+91 96177 72741</p>
            </div>
          </div>
          <img  />
        </div>
      </div>
    </header>
  );
};

export default Header;

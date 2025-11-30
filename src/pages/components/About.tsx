import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

import logo from "../../assets/logo.png";
import shop from "../../assets/shopimg.jpeg";

const About = () => {
  return (
    <section className="sm:w-[98%] md:w-[90%] mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-6 text-amber-700">About</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div className="bg-amber-50 border border-amber-200 p-5 rounded-xl shadow-sm flex flex-col justify-center items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-90 h-40 object-fill mb-3"
          />
          <h2 className="text-xl font-semibold text-amber-700">
            Shri Ram Enterprises
          </h2>
        </div>

        <div className="bg-amber-50 border border-amber-200 p-5 rounded-xl shadow-sm flex flex-col items-center">
          <img
            src={shop}
            alt="Shop"
            className="w-full max-h-96 object-contain rounded-lg"
          />
          <p className="text-center mt-3 font-medium text-amber-700">
            Our Storefront
          </p>
        </div>
      </div>

      <div className="bg-amber-100 border border-amber-200 p-5 rounded-xl shadow-sm mb-6">
        <h2 className="text-lg font-semibold text-amber-800 mb-3">
          Contact Details
        </h2>

        <div className="space-y-2 text-sm sm:text-base text-gray-800">
          <div className="flex items-center gap-2">
            <FaLocationDot className="text-amber-700 text-lg" />
            <p>Shri Ram Enterprises, Near Gas Agency, Chandia</p>
          </div>

          <div className="flex items-center gap-2">
            <IoCall className="text-amber-700 text-lg" />
            <p className="font-medium">+91 96177 72741</p>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="bg-white border border-amber-200 p-5 rounded-xl shadow-sm text-gray-700 leading-relaxed text-sm sm:text-base space-y-4">
        <p>
          <span className="font-semibold">Shri Ram Enterprises</span> is a
          trusted local store located near the Gas Agency in Chandia. We are
          committed to providing quality products, fair pricing, and reliable
          service to our customers.
        </p>

        <p>
          Over the years, we’ve built a reputation for honesty, customer-first
          service, and a wide range of essential household and daily-use
          products. Whether you're visiting for regular supplies or special
          requirements, our team is always ready to help.
        </p>

        <p>
          We believe in serving our community with dedication and maintaining
          long-term relationships with our customers. Your trust is our biggest
          strength, and we continue to work hard to offer a smooth and friendly
          shopping experience.
        </p>

        <p className="font-medium text-amber-700">
          Thank you for choosing Shri Ram Enterprises.
        </p>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import { HeaderItems } from "../../utils/dataAssets";
import { AiOutlineProduct } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  handelFilter: (a: string) => void;
  showInfo: "home" | "about";
}

const HeaderBar: React.FC<HeaderProps> = ({ handelFilter, showInfo }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-amber-100 mt-5">
      {/* 1. Container for centering and max width on Lg/Xl screens */}
      <div className="max-w-screen-xl mx-auto">
        {showInfo === "about" ? (
          <div className="w-full text-amber-700 text-center font-bold h-15 flex justify-center items-center p-1">
            <h1 className="text-2xl">Welcome To Shri Ram Enterprises</h1>
          </div>
        ) : null}
        {showInfo != "about" && (
          <div
            className="
            lg:overflow-x-visible 
            overflow-x-auto 
            min-w-full lg:min-w-0 
            grid grid-cols-6 xs:grid-cols-6 sm:grid-cols-8 md:grid-cols-11 
 p-1 text-center
          "
          >
            <div
              className="
                    flex flex-col items-center text-black cursor-pointer 
                    hover:scale-105 transition-transform duration-200
                     h-15 justify-center m-auto
                  "
              onClick={() => navigate("/home")}
            >
              <AiOutlineProduct size={28} />
              <span className="text-sm font-semibold mt-1 whitespace-nowrap hidden lg:block">
                Show All
              </span>
            </div>

            {HeaderItems &&
              HeaderItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    onClick={() => handelFilter(item.name)}
                    key={item.name}
                    className="
                    flex flex-col items-center text-black cursor-pointer 
                    hover:scale-105 transition-transform duration-200
                     h-15 justify-center m-auto
                  "
                  >
                    <Icon size={28} />
                    <span className="text-sm font-semibold mt-1 whitespace-nowrap hidden lg:block">
                      {item.name}
                    </span>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderBar;

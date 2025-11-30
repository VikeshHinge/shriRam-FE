import { useState } from "react";

import HeaderBar from "./components/HeaderBar";
import Header from "../components/Header";
import ProductShowcase from "./components/ProductShowcase";
import About from "./components/About";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams({ type: "" });
  const [showInfo, setShowInfo] = useState<"home" | "about">("home");

  const handelFilter = (val: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("type", val);
    setSearchParams(params);
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 text-white px-3 py-2 shadow-lg">
        <Header />
        <HeaderBar handelFilter={handelFilter} showInfo={showInfo} />
      </div>
      <div className="flex justify-start items-center gap-5 font-semibold text-amber-600 px-30">
        <button
          onClick={() => setShowInfo("home")}
          className="hover:text-amber-900"
        >
          Home
        </button>
        /
        <button
          onClick={() => setShowInfo("about")}
          className="hover:text-amber-900"
        >
          About
        </button>
      </div>
      <div style={{ display: showInfo === "home" ? "block" : "none" }}>
        <ProductShowcase />
      </div>

      <div style={{ display: showInfo === "home" ? "none" : "block" }}>
        <About />
      </div>
    </div>
  );
};

export default Home;

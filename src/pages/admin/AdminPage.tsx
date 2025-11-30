import { useState } from "react";
import AddProductForm from "./components/AddProductForm";
import UpdateProductForm from "./components/UpdateProductForm";

const AdminPage = () => {
  const [page, setPage] = useState("addproduct");

  const renderPage = () => {
    switch (page) {
      case "addproduct":
        return <AddProductForm />;
      case "updateproduct":
        return <UpdateProductForm />;
    }
  };

  return (
    <div className="w-full h-screen bg-amber-100 flex">
      <div className="h-screen w-[20%] bg-amber-400 flex flex-col items-start p-4 gap-4 shadow-lg">
        <button
          onClick={() => setPage("addproduct")}
          className="w-full bg-white py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Add Product
        </button>
        <button
          onClick={() => setPage("updateproduct")}
          className="w-full bg-white py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Update Product
        </button>
      </div>

      {/* Make content scrollable */}
      <div className="flex-1 p-4 overflow-y-auto h-screen">{renderPage()}</div>
    </div>
  );
};

export default AdminPage;

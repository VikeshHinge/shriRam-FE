import { useEffect, useState, useMemo } from "react";
import type { ProductFormData } from "../../../utils/const.ts";
import { getProductDataAdmin, updateProduct } from "../../../utils/apicall";
import Form from "./Form";
import { ProductCard } from "../../../components/Productcard";
import debounce from "debounce";
import { authanticateRequest } from "../../../utils/services.ts";

const initialValue = {
  _id:"",
  name: "",
  price: 0,
  descriptionHead: "",
  descriptionSub: [""],
  discount: 0,
  image: "",
  addDiscount: true,
  colors: [""],
  type: "",
  category: "",
  warranty: "",
  delete: false,
  reviewImage: [""],
  quantity: 1,
};

const UpdateProductForm = () => {
  const [products, setProducts] = useState<ProductFormData[]>([]);
  const [showForm, setShowForm] = useState(false);
  // const [setQuery] = useState("");
  const [updateData, setUpdateData] = useState<ProductFormData>(initialValue);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const target = e.target;
    const { name } = target;

    let value: string | boolean = target.value;

    // Narrow: only inputs of type checkbox have `checked`
    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      value = target.checked;
    }

    setUpdateData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleArrayChange = (
    key: "descriptionSub" | "colors" | "reviewImage",
    index: number,
    value: string
  ) => {
    const arr = [...updateData[key]];
    arr[index] = value;
    setUpdateData((prev) => ({ ...prev, [key]: arr }));
  };

  const addMoreInput = (key: "colors" | "descriptionSub" | "reviewImage") => {
    setUpdateData((prev) => ({ ...prev, [key]: [...prev[key], ""] }));
  };

  const removeInput = (
    key: "colors" | "descriptionSub" | "reviewImage",
    index: number
  ) => {
    setUpdateData((prev) => ({
      ...prev,
      [key]: prev[key].filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const check = authanticateRequest();
    if (!check) {
      alert("Not Authorised !!");
      return;
    }

    await updateProduct(updateData);
    setUpdateData({ ...updateData });
    setShowForm(false);
    getProduct();
  };

  const getProduct = async () => {
    try {
      const data = await getProductDataAdmin("");
      setProducts(data);
    } catch (err) {
      console.log({ Error: err });
    }
  };

  const handelSetProducts = (item: ProductFormData) => {
    const data = { ...item };
    setUpdateData(data);
    setShowForm(true);
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handelSearch = useMemo(
    () =>
      debounce(async (value: string) => {
        const res = await getProductDataAdmin(value);
        setProducts(res?.data ?? res);
      }, 500),
    []
  );

  return (
    <div className=" mx-auto p-6 bg-white rounded-xl shadow-md">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-4">Update Product :</h2>
        {showForm && (
          <button
            onClick={() => setShowForm(false)}
            className="bg-red-600 px-5 py-1 text-amber-50 font-semibold rounded-md"
          >
            Close
          </button>
        )}
      </div>
      {showForm ? (
        <Form
          handleArrayChange={handleArrayChange}
          data={updateData}
          handleSubmit={handleSubmit}
          addMoreInput={addMoreInput}
          handleChange={handleChange}
          removeInput={removeInput}
        />
      ) : (
        <div>
          <input
            type="text"
            placeholder="Search ..."
            onChange={(e) => {
              // setQuery(e.target.value);
              handelSearch(e.target.value);
            }}
            className="w-full h-10 border-2 border-gray-500 rounded-sm px-2"
          />
          <br />
          <br />
          <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-1">
            {products &&
              products.map((ele) => {
                return (
                  <button
                    key={ele._id}
                    onClick={() => handelSetProducts(ele)}
                    className={"relative"}
                  >
                    <ProductCard
                      product={ele}
                      viewOptn={false}
                      onView={() => null}
                    />

                    {ele?.delete && (
                      <div className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 bg-red-600 p-5 w-full text-amber-50 opacity-85 font-bold">
                        Hidden / Deleted
                      </div>
                    )}
                  </button>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateProductForm;

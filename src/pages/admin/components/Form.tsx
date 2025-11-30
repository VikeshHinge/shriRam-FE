import type React from "react";
import Input from "../../../components/Input";
import { HeaderItems } from "../../../utils/dataAssets";

type KeyType = "descriptionSub" | "colors" | "reviewImage";

 interface AddProductFormProps {
  name: string;
  price: number | "";
  descriptionHead: string;
  descriptionSub: string[];
  discount: number | "";
  image: string;
  addDiscount: boolean;
  colors: string[];
  type: string;
  category: string;
  warranty: string;
  delete?: boolean;
  reviewImage: string[];
  quantity: number;
}


interface FormProps {
  handleSubmit: (e: React.FormEvent) => void;
  data: AddProductFormProps;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  handleArrayChange: (key: KeyType, index: number, value: string) => void;
  addMoreInput: (key: KeyType) => void;
  removeInput: (key: KeyType, index: number) => void;
}

const Form: React.FC<FormProps> = ({
  handleSubmit,
  data,
  handleChange,
  handleArrayChange,
  addMoreInput,
  removeInput,
}) => {
  const categoryOptions = ["Furniture", "Electronics"];

  return (
    <div className="p-5 max-w-3xl mx-auto">
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <Input
          label="Product Name :"
          name="name"
          value={data.name}
          onchange={handleChange}
        />

        {/* Price */}
        <Input
          label="Price :"
          type="number"
          name="price"
          value={data.price}
          onchange={handleChange}
        />

        {/* Description Head */}
        <Input
          label="Description Head :"
          name="descriptionHead"
          value={data.descriptionHead}
          onchange={handleChange}
        />

        {/* Description Sub  */}
        <label className="block font-semibold mt-4">Description Points :</label>
        {data.descriptionSub.map((item, index) => (
          <div key={index} className="flex gap-2 items-center mt-1">
            <Input
              type="text"
              value={item}
              onchange={(e) =>
                handleArrayChange("descriptionSub", index, e.target.value)
              }
            />
            <button
              type="button"
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => removeInput("descriptionSub", index)}
            >
              Delete
            </button>
          </div>
        ))}
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-1 rounded mt-2"
          onClick={() => addMoreInput("descriptionSub")}
        >
          Add More Description
        </button>

        {/* Discount */}
        <Input
          label="Discount % :"
          type="number"
          name="discount"
          value={data.discount}
          onchange={handleChange}
        />

        {/* Add Discount Toggle */}
        <div className="mt-3 bg-red-400 p-2">
          <label className="mr-3 font-semibold">Add Discount?</label>
          <input
            type="checkbox"
            name="addDiscount"
            checked={data.addDiscount}
            onChange={handleChange}
          />
        </div>

        {/* Main Image */}
        <Input
          label="Main Image URL :"
          name="image"
          value={data.image}
          onchange={handleChange}
        />

        {/* Colors */}
        <label className="block font-semibold mt-4">
          Add More Images / Colors :
        </label>
        {data.colors.map((item, index) => (
          <div key={index} className="flex gap-2 items-center mt-1">
            <Input
              type="text"
              value={item}
              onchange={(e) =>
                handleArrayChange("colors", index, e.target.value)
              }
            />
            <button
              type="button"
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => removeInput("colors", index)}
            >
              Delete
            </button>
          </div>
        ))}
        <button
          type="button"
          className="bg-yellow-500 text-white px-4 py-1 rounded mt-2"
          onClick={() => addMoreInput("colors")}
        >
          Add More Images
        </button>

        {/* Review Images */}
        <label className="block font-semibold mt-4">Review Images :</label>
        {data.reviewImage.map((item, index) => (
          <div key={index} className="flex gap-2 items-center mt-1">
            <Input
              type="text"
              value={item}
              onchange={(e) =>
                handleArrayChange("reviewImage", index, e.target.value)
              }
            />
            <button
              type="button"
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => removeInput("reviewImage", index)}
            >
              Delete
            </button>
          </div>
        ))}
        <button
          type="button"
          className="bg-green-500 text-white px-4 py-1 rounded mt-2"
          onClick={() => addMoreInput("reviewImage")}
        >
          Add More Review Image
        </button>

        {/* Type */}
        <div className="mt-4">
          <label className="block font-semibold">Type</label>
          <select
            name="type"
            value={data.type}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Type</option>
            {HeaderItems.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* Category */}
        <div className="mt-4">
          <label className="block font-semibold">Category</label>
          <select
            name="category"
            value={data.category}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Category</option>
            {categoryOptions.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Warranty */}
        <Input
          label="Warranty :"
          name="warranty"
          value={data.warranty}
          onchange={handleChange}
        />

        {/* Quantity */}
        <Input
          label="Quantity :"
          name="quantity"
          value={data.quantity}
          onchange={handleChange}
        />

        {/* delete product*/}
        <div className="mt-3 bg-red-500 p-2">
          <label className="mr-3 font-semibold">
            Click to hide this product — it will not be visible to users:{" "}
          </label>
          <input
            type="checkbox"
            name="delete"
            checked={data.delete}
            onChange={handleChange}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-purple-600 text-white mt-5 px-6 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

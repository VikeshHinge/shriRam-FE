import React, { useState } from "react";
import Form from "./Form";
import { addProduct } from "../../../utils/apicall";
import { authanticateRequest } from "../../../utils/services";

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

const AddProductForm = () => {
  const [formData, setFormData] = useState<AddProductFormProps>({
    name: "",
    price: "",
    descriptionHead: "",
    descriptionSub: [""],
    discount: "",
    image: "",
    addDiscount: false,
    colors: [""],
    type: "",
    category: "",
    warranty: "",
    quantity: 0,
    reviewImage: [""],
    delete: false,
  });

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

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleArrayChange = (
    key: "descriptionSub" | "colors" | "reviewImage",
    index: number,
    value: string
  ) => {
    const updated = [...formData[key]];
    updated[index] = value;
    setFormData({ ...formData, [key]: updated });
  };

  const addArrayField = (key: "descriptionSub" | "colors" | "reviewImage") => {
    setFormData((prev) => ({
      ...prev,
      [key]: [...prev[key], ""],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const requiredFields = ["name", "price", "image"] as const;
    for (const field of requiredFields) {
      const value = formData[field];

      if (value === "" || value === undefined || value === null) {
        alert(`${field} is missing`);
        return;
      }
    }
    const check = authanticateRequest();
    if (!check) {
      alert("Not Authorised !!");
      return;
    }
    try {
      const res = await addProduct(formData);
      if (res) {
        setFormData({
          name: "",
          price: "",
          descriptionHead: "",
          descriptionSub: [""],
          discount: "",
          image: "",
          addDiscount: false,
          colors: [""],
          type: "",
          category: "",
          warranty: "",
          quantity: 0,
          reviewImage: [""],
          delete: false,
        });
      }
      alert("success !!");
    } catch (err: any) {
      alert(err.message);
    }
  };

  const removeInput = (
    key: "colors" | "descriptionSub" | "reviewImage",
    index: number
  ) => {
    setFormData((prev) => ({
      ...prev,
      [key]: prev[key].filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add Product :</h2>
      <Form
        data={formData}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleArrayChange={handleArrayChange}
        addMoreInput={addArrayField}
        removeInput={removeInput}
      />
    </div>
  );
};

export default AddProductForm;

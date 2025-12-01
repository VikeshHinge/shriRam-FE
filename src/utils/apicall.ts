import axios from "axios";

export const getProductByID = async (id: string) => {
  try {
    const { data } = await axios.get(
      `https://shriram-8mtz.onrender.com/products/${id}`
    );
    return data;
  } catch (err) {
    return err;
  }
};

export const addProduct = async (payload: any) => {
  try {
    const { data } = await axios.post(
      "https://shriram-8mtz.onrender.com/product/add",
      payload
    );
    return data;
  } catch (err) {
    return err;
  }
};

export const searchProduct = async (val: any) => {
  try {
    const { data } = await axios.get(
      `https://shriram-8mtz.onrender.com/product?search=${val}`
    );
    return data;
  } catch (err) {
    return err;
  }
};

export const updateProduct = async (payload: any) => {
  try {
    const res = await axios.patch(
      `https://shriram-8mtz.onrender.com/product/update/${payload._id}`,
      payload
    );
    return res;
  } catch (err) {
    return err;
  }
};

// admin -api --------------------------

export const getProductDataAdmin = async (val: string) => {
  try {
    const { data } = await axios.get(
      `https://shriram-8mtz.onrender.com/product/getproductsadmin?search=${val}`
    );
    return data;
  } catch (err) {
    return err;
  }
};

export const loginAdmin = async (payload: {
  password: string;
  email: string;
}) => {
  const { data } = await axios.post(
    "https://shriram-8mtz.onrender.com/user/login",
    payload
  );
  return data;
};

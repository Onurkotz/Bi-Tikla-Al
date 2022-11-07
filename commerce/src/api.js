import axios from "axios";

export const getAllProducts = async () => {
  const { data } = await axios.get("http://localhost:3000/products");
  return data;
};

export const product = async (product_id) => {
  const { data } = await axios.get(`http://localhost:3000/products/${product_id}`);
  return data;
};

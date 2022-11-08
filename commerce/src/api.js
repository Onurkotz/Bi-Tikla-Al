import axios from "axios";

export const getAllProducts = async ({ pageParam = 0 }) => {
  const { data } = await axios.get(`http://localhost:3000/products?page=${pageParam}`);
  return data;
};

export const product = async (product_id) => {
  const { data } = await axios.get(`http://localhost:3000/products/${product_id}`);
  return data;
};

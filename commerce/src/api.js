import axios from "axios";

export const getAllProducts = async () => {
  const { data } = await axios.get("http://localhost:3000/products");
  return data;
};

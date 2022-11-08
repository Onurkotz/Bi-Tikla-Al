import axios from "axios";

export const getAllProducts = async ({ pageParam = 0 }) => {
  const { data } = await axios.get(
    `http://localhost:4000/products?page=${pageParam}`
  );
  return data;
};

export const product = async (product_id) => {
  const { data } = await axios.get(
    `http://localhost:4000/products/${product_id}`
  );
  return data;
};

export const userRegister = async (input) => {
  const { data } = await axios.post(
    `http://localhost:4000/auth/register`,
    input
  );
  return data;
};

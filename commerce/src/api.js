import axios from "axios";

// Burası tokenı localStorage'den alıp gerekli kontrolleri yapıp kullanıcının olup olmadığını görmek için kullanılır. axiosun altındaki interceptor özelliği
axios.interceptors.request.use(
  function (config) {
    const { origin } = new URL(config.url);
    const allowedOrigins = ["http://localhost:4000"];
    const token = localStorage.getItem("access-token");

    if (allowedOrigins.includes(origin)) {
      config.headers.authorization = token;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

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

export const userIsMe = async (input) => {
  const { data } = await axios.get(`http://localhost:4000/auth/me`);
  return data;
};

export const userLogout = async () => {
  const { data } = await axios.post(`http://localhost:4000/auth/logout`, {
    refresh_token: localStorage.getItem("refresh-token"),
  });
  return data;
  //Burada logout isteğini yolladıktan sonra gerekli işlem için gerekn refresh token 'ı da local storage den yolluyorum. bu fonksiyounu context dosyasına alıp tetikleyici fonk. olan logout içine yazıyorum.
};

export const userLogin = async (input) => {
  const { data } = await axios.post(
    `http://localhost:4000/auth/login`,
    input
  );
  return data;
};

export const userOrder = async (input) => {
  const { data } = await axios.post(
    `http://localhost:4000/order`,
    input
  );
  return data;
};
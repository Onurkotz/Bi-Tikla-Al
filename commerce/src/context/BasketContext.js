import { useState, useContext, createContext, useEffect } from "react";

const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addtoBasket = (data, hasItem) => {
    if (!hasItem) {
      return setItems((prev) => [...prev, data]);
    }

    const filtered = items.filter((item) => item._id !== hasItem._id);
    setItems(filtered);
  };

  const values = {
    items,
    setItems,
    addtoBasket,
  };

  return (
    <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
  );
};

const useBasket = () => useContext(BasketContext);

export { BasketProvider, useBasket };

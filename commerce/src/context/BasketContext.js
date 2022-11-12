import { useState, useContext, createContext, useEffect } from "react";

const BasketContext = createContext();

const defaultBasket = JSON.parse(localStorage.getItem("basket")) || [];

const BasketProvider = ({ children }) => {
  const [items, setItems] = useState(defaultBasket);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(items));
  }, [items]);

  const addtoBasket = (data, hasItem) => {
    if (!hasItem) {
      return setItems((prev) => [...prev, data]);
    }

    const filtered = items.filter((item) => item._id !== hasItem._id);
    setItems(filtered);
  };

  const removeItem = (item_id) => {
    const filtered = items.filter((item) => item._id !== item_id);
    setItems(filtered);
  };

  const toDefaultBasket = () => setItems([]);
  const values = {
    items,
    setItems,
    addtoBasket,
    removeItem,
    toDefaultBasket,
  };

  return (
    <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
  );
};

const useBasket = () => useContext(BasketContext);

export { BasketProvider, useBasket };

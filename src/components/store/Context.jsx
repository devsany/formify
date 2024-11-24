import React, { createContext, useState } from "react";

// Create Context
export const DataContext = createContext();

// Create a Provider Component
export const DataProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [mainFormData, setMainFormData] = useState({});

  const addItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  console.log(items);
  const updateItem = (id, updatedData) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, ...updatedData } : item
      )
    );
  };

  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    console.log(items);
  };
  const submitMainFormData = (value) => {
    setMainFormData(value);
  };
  return (
    <DataContext.Provider
      value={{
        items,
        setItems,
        addItem,
        updateItem,
        removeItem,
        submitMainFormData,
        mainFormData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

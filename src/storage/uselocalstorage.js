import { useState, useEffect } from "react";

const getStorageValue = (key, defaultValue) => {
  // getting stored value
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(key);
    const initial = JSON.parse(saved);
    console.log(initial, defaultValue);
    return initial || defaultValue;
  }
}

const useLocalStorage = (key, defaultValue) => {
   
    const [value, setValue] = useState(() => {
        try {
            if(!defaultValue) 
                throw new Error("useLocalStorage(key, defaultValue) actual and formal argument lists differ in length");
            return getStorageValue(key, defaultValue);
        }
        catch (error) {
            console.error(error);
        }
    });

  useEffect(() => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};



export default useLocalStorage;
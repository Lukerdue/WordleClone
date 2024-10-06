import React, { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue) => {
    // Initialize state from localStorage or use the initialValue
    const [storedValue, setStoredValue] = useState(() => {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue; // Parse or return initialValue
      } catch (error) {
        console.error("Error reading from local storage", error);
        return initialValue; // Return initialValue on error
      }
    });
  
    // Effect to update localStorage whenever storedValue changes
    useEffect(() => {
      try {
        const serializedValue = JSON.stringify(storedValue); // Serialize the value
        localStorage.setItem(key, serializedValue); // Update localStorage
      } catch (error) {
        console.error("Error saving to local storage", error);
      }
    }, [key, storedValue]); // Dependencies: update when key or storedValue changes
  
    // Return the stored value and the setter function
    return [storedValue, setStoredValue];
  };

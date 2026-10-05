import React, { createContext, useState, useEffect } from 'react';

export const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState(() => {
    try {
      const saved = localStorage.getItem('selectedCurrency');
      return saved || 'USD';
    } catch {
      return 'USD';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('selectedCurrency', currency);
    } catch (error) {
      console.error('Failed to save currency preference:', error);
    }
  }, [currency]);

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};
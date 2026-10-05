import { useState, useEffect } from 'react';

export const useCalculatorState = (calculatorName, initialState) => {
  const storageKey = `calculator_${calculatorName}`;

  const [state, setState] = useState(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      return saved ? JSON.parse(saved) : initialState;
    } catch {
      return initialState;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(state));
    } catch (error) {
      console.error('Failed to save calculator state:', error);
    }
  }, [state, storageKey]);

  const resetState = () => {
    setState(initialState);
    localStorage.removeItem(storageKey);
  };

  return [state, setState, resetState];
};
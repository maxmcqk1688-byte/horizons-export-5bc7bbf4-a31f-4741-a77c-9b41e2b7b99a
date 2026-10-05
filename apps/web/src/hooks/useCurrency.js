import { useContext } from 'react';
import { CurrencyContext } from '@/contexts/CurrencyContext.jsx';

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  
  if (!context) {
    throw new Error('useCurrency must be used within CurrencyProvider');
  }

  return context;
};
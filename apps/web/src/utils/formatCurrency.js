export const formatCurrency = (amount, currency = 'USD') => {
  const currencyConfig = {
    USD: { symbol: '$', locale: 'en-US' },
    EUR: { symbol: '€', locale: 'de-DE' },
    GBP: { symbol: '£', locale: 'en-GB' },
    INR: { symbol: '₹', locale: 'en-IN' },
    JPY: { symbol: '¥', locale: 'ja-JP' },
    AUD: { symbol: 'A$', locale: 'en-AU' }
  };

  const config = currencyConfig[currency] || currencyConfig.USD;
  
  return new Intl.NumberFormat(config.locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: currency === 'JPY' ? 0 : 2,
    maximumFractionDigits: currency === 'JPY' ? 0 : 2
  }).format(amount);
};

export const formatNumber = (number) => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(number);
};

export const formatPercentage = (value) => {
  return `${value.toFixed(2)}%`;
};
export const calculateCAGR = (beginningValue, endingValue, years) => {
  const BV = parseFloat(beginningValue) || 0;
  const EV = parseFloat(endingValue) || 0;
  const n = parseFloat(years) || 1;

  if (BV <= 0 || EV <= 0 || n <= 0) {
    return {
      cagr: 0,
      totalGrowth: 0,
      absoluteReturn: 0
    };
  }

  // CAGR Formula: (EV/BV)^(1/n) - 1
  const cagr = (Math.pow(EV / BV, 1 / n) - 1) * 100;
  const totalGrowth = ((EV - BV) / BV) * 100;
  const absoluteReturn = EV - BV;

  // Generate year-by-year projection
  const yearlyData = [];
  for (let year = 0; year <= years; year++) {
    const value = BV * Math.pow(1 + cagr / 100, year);
    yearlyData.push({
      year,
      value
    });
  }

  return {
    cagr,
    totalGrowth,
    absoluteReturn,
    yearlyData
  };
};
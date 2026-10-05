export const calculateSIP = (monthlyInvestment, annualReturn, years) => {
  const P = parseFloat(monthlyInvestment) || 0;
  const r = (parseFloat(annualReturn) || 0) / 100 / 12; // Monthly rate
  const n = years * 12; // Total months

  // SIP Future Value Formula: P × [(1 + r)^n - 1] / r × (1 + r)
  let futureValue = 0;
  if (r > 0) {
    futureValue = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  } else {
    futureValue = P * n;
  }

  const totalInvested = P * n;
  const estimatedReturns = futureValue - totalInvested;

  // Generate monthly breakdown for chart
  const monthlyData = [];
  for (let month = 0; month <= n; month += 3) { // Every quarter for performance
    let monthValue = 0;
    if (r > 0 && month > 0) {
      monthValue = P * ((Math.pow(1 + r, month) - 1) / r) * (1 + r);
    } else {
      monthValue = P * month;
    }
    const monthInvested = P * month;
    const monthReturns = monthValue - monthInvested;

    monthlyData.push({
      month,
      invested: monthInvested,
      returns: monthReturns,
      total: monthValue
    });
  }

  return {
    totalInvested,
    estimatedReturns,
    totalValue: futureValue,
    monthlyData
  };
};
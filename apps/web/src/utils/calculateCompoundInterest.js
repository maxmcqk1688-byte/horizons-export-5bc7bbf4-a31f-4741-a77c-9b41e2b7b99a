export const calculateCompoundInterest = (principal, monthlyContribution, annualRate, years, compoundFrequency) => {
  const frequencyMap = {
    daily: 365,
    monthly: 12,
    quarterly: 4,
    yearly: 1
  };

  const n = frequencyMap[compoundFrequency] || 12;
  const r = annualRate / 100;
  const t = years;
  const P = parseFloat(principal) || 0;
  const PMT = parseFloat(monthlyContribution) || 0;

  // Calculate compound interest with regular contributions
  // Future value of principal: P(1 + r/n)^(nt)
  const principalAmount = P * Math.pow(1 + r / n, n * t);

  // Future value of monthly contributions (annuity)
  // PMT * [((1 + r/n)^(nt) - 1) / (r/n)] * (1 + r/n)
  let contributionsAmount = 0;
  if (PMT > 0) {
    const monthlyRate = r / 12;
    const months = t * 12;
    contributionsAmount = PMT * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
  }

  const totalValue = principalAmount + contributionsAmount;
  const totalContributions = P + (PMT * 12 * t);
  const totalInterest = totalValue - totalContributions;

  // Generate year-by-year breakdown
  const yearlyData = [];
  for (let year = 0; year <= years; year++) {
    const yearPrincipal = P * Math.pow(1 + r / n, n * year);
    let yearContributions = 0;
    if (PMT > 0 && year > 0) {
      const monthlyRate = r / 12;
      const months = year * 12;
      yearContributions = PMT * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
    }
    const yearTotal = yearPrincipal + yearContributions;
    const yearTotalContributed = P + (PMT * 12 * year);
    const yearInterest = yearTotal - yearTotalContributed;

    yearlyData.push({
      year,
      principal: yearTotalContributed,
      interest: yearInterest,
      total: yearTotal
    });
  }

  return {
    finalBalance: totalValue,
    totalContributions,
    totalInterest,
    interestPercentage: (totalInterest / totalContributions) * 100,
    yearlyData
  };
};
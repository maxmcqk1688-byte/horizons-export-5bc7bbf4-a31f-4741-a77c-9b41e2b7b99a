export const calculateRetirement = (currentAge, retirementAge, currentSavings, monthlyInvestment, annualReturn) => {
  const age = parseFloat(currentAge) || 25;
  const retAge = parseFloat(retirementAge) || 60;
  const savings = parseFloat(currentSavings) || 0;
  const monthly = parseFloat(monthlyInvestment) || 0;
  const rate = (parseFloat(annualReturn) || 0) / 100;

  const yearsToRetirement = retAge - age;
  
  if (yearsToRetirement <= 0) {
    return {
      retirementCorpus: savings,
      totalInvested: savings,
      wealthGained: 0,
      yearsUntilRetirement: 0,
      yearlyData: []
    };
  }

  // Future value of current savings
  const savingsFV = savings * Math.pow(1 + rate, yearsToRetirement);

  // Future value of monthly investments (annuity)
  const monthlyRate = rate / 12;
  const months = yearsToRetirement * 12;
  let investmentsFV = 0;
  if (monthlyRate > 0 && monthly > 0) {
    investmentsFV = monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
  } else {
    investmentsFV = monthly * months;
  }

  const retirementCorpus = savingsFV + investmentsFV;
  const totalInvested = savings + (monthly * 12 * yearsToRetirement);
  const wealthGained = retirementCorpus - totalInvested;

  // Generate year-by-year projection
  const yearlyData = [];
  for (let year = 0; year <= yearsToRetirement; year++) {
    const yearSavingsFV = savings * Math.pow(1 + rate, year);
    let yearInvestmentsFV = 0;
    if (year > 0) {
      const yearMonths = year * 12;
      if (monthlyRate > 0 && monthly > 0) {
        yearInvestmentsFV = monthly * ((Math.pow(1 + monthlyRate, yearMonths) - 1) / monthlyRate);
      } else {
        yearInvestmentsFV = monthly * yearMonths;
      }
    }
    const yearTotal = yearSavingsFV + yearInvestmentsFV;
    const yearInvested = savings + (monthly * 12 * year);

    yearlyData.push({
      year,
      age: age + year,
      invested: yearInvested,
      total: yearTotal
    });
  }

  return {
    retirementCorpus,
    totalInvested,
    wealthGained,
    yearsUntilRetirement: yearsToRetirement,
    yearlyData
  };
};
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Download, Share2, RotateCcw } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { useCalculatorState } from '@/hooks/useCalculatorState.js';
import { useCurrency } from '@/hooks/useCurrency.js';
import { formatCurrency } from '@/utils/formatCurrency.js';
import { calculateRetirement } from '@/utils/calculateRetirement.js';
import { downloadCalculationPDF, shareCalculation } from '@/utils/downloadPDF.js';
import { toast } from 'sonner';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const RetirementCalculator = () => {
  const { t } = useTranslation();
  const { currency } = useCurrency();
  const [inputs, setInputs] = useCalculatorState('retirement', {
    currentAge: '30',
    retirementAge: '60',
    currentSavings: '50000',
    monthlyInvestment: '2000',
    annualReturn: '10'
  });

  const [results, setResults] = useState(null);

  useEffect(() => {
    const result = calculateRetirement(
      inputs.currentAge,
      inputs.retirementAge,
      inputs.currentSavings,
      inputs.monthlyInvestment,
      inputs.annualReturn
    );
    setResults(result);
  }, [inputs]);

  const handleInputChange = (field, value) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const handleReset = () => {
    setInputs({
      currentAge: '30',
      retirementAge: '60',
      currentSavings: '50000',
      monthlyInvestment: '2000',
      annualReturn: '10'
    });
  };

  const handleDownload = async () => {
    const success = await downloadCalculationPDF('retirement-results', 'retirement-calculation.pdf');
    if (success) {
      toast.success(t('actions.success', 'PDF downloaded successfully'));
    } else {
      toast.error(t('actions.error', 'Failed to download PDF'));
    }
  };

  const handleShare = async () => {
    const success = await shareCalculation(
      t('calculators.retirement.title', 'Retirement Calculation'),
      `${t('calculators.retirement.corpus', 'Retirement Corpus')}: ${formatCurrency(results?.retirementCorpus || 0, currency)}`,
      window.location.href
    );
    if (success) {
      toast.success(t('actions.success', 'Shared successfully'));
    }
  };

  const chartData = {
    labels: results?.yearlyData?.map(d => `Age ${d.age}`) || [],
    datasets: [
      {
        label: t('calculators.retirement.chartInvested', 'Total Invested'),
        data: results?.yearlyData?.map(d => d.invested) || [],
        borderColor: 'rgb(30, 58, 138)',
        backgroundColor: 'rgba(30, 58, 138, 0.1)',
        fill: true,
        tension: 0.4
      },
      {
        label: t('calculators.retirement.chartCorpus', 'Retirement Corpus'),
        data: results?.yearlyData?.map(d => d.total) || [],
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        fill: true,
        tension: 0.4
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: t('calculators.retirement.chartTitle', 'Retirement Savings Projection')
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${formatCurrency(context.parsed.y, currency)}`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return formatCurrency(value, currency);
          }
        }
      }
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{t('calculators.retirement.title', 'Retirement Calculator')}</CardTitle>
          <CardDescription>{t('calculators.retirement.desc', 'Plan your retirement savings and estimate your corpus')}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Inputs */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="currentAge">{t('calculators.retirement.currentAge', 'Current Age')}</Label>
                <Input
                  id="currentAge"
                  type="number"
                  value={inputs.currentAge}
                  onChange={(e) => handleInputChange('currentAge', e.target.value)}
                  className="text-foreground"
                />
              </div>

              <div>
                <Label htmlFor="retirementAge">{t('calculators.retirement.retirementAge', 'Retirement Age')}</Label>
                <Input
                  id="retirementAge"
                  type="number"
                  value={inputs.retirementAge}
                  onChange={(e) => handleInputChange('retirementAge', e.target.value)}
                  className="text-foreground"
                />
              </div>

              <div>
                <Label htmlFor="currentSavings">{t('calculators.retirement.currentSavings', 'Current Savings')}</Label>
                <Input
                  id="currentSavings"
                  type="number"
                  value={inputs.currentSavings}
                  onChange={(e) => handleInputChange('currentSavings', e.target.value)}
                  className="text-foreground"
                />
              </div>

              <div>
                <Label htmlFor="monthlyInvestment">{t('calculators.retirement.monthlyInvestment', 'Monthly Investment')}</Label>
                <Input
                  id="monthlyInvestment"
                  type="number"
                  value={inputs.monthlyInvestment}
                  onChange={(e) => handleInputChange('monthlyInvestment', e.target.value)}
                  className="text-foreground"
                />
              </div>

              <div>
                <Label htmlFor="annualReturn">{t('calculators.retirement.annualReturn', 'Expected Annual Return (%)')}</Label>
                <Input
                  id="annualReturn"
                  type="number"
                  step="0.1"
                  value={inputs.annualReturn}
                  onChange={(e) => handleInputChange('annualReturn', e.target.value)}
                  className="text-foreground"
                />
              </div>

              <Button onClick={handleReset} variant="outline" className="w-full">
                <RotateCcw className="h-4 w-4 mr-2" />
                {t('calculators.retirement.reset', 'Reset')}
              </Button>
            </div>

            {/* Results */}
            <div id="retirement-results" className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <Card className="bg-primary text-primary-foreground col-span-2">
                  <CardHeader className="pb-2">
                    <CardDescription className="text-primary-foreground/80 text-xs">{t('calculators.retirement.corpus', 'Retirement Corpus')}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold">{formatCurrency(results?.retirementCorpus || 0, currency)}</p>
                  </CardContent>
                </Card>

                <Card className="bg-secondary text-secondary-foreground">
                  <CardHeader className="pb-2">
                    <CardDescription className="text-secondary-foreground/80 text-xs">{t('calculators.retirement.totalInvested', 'Total Invested')}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xl font-bold">{formatCurrency(results?.totalInvested || 0, currency)}</p>
                  </CardContent>
                </Card>

                <Card className="bg-accent text-accent-foreground">
                  <CardHeader className="pb-2">
                    <CardDescription className="text-accent-foreground/80 text-xs">{t('calculators.retirement.wealthGained', 'Wealth Gained')}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xl font-bold">{formatCurrency(results?.wealthGained || 0, currency)}</p>
                  </CardContent>
                </Card>

                <Card className="bg-muted text-muted-foreground col-span-2">
                  <CardHeader className="pb-2">
                    <CardDescription className="text-muted-foreground/80 text-xs">{t('calculators.retirement.yearsUntil', 'Years Until Retirement')}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-foreground">{results?.yearsUntilRetirement || 0}</p>
                  </CardContent>
                </Card>
              </div>

              <div className="h-56">
                {results?.yearlyData && <Line data={chartData} options={chartOptions} />}
              </div>

              <div className="flex space-x-2">
                <Button onClick={handleDownload} variant="outline" className="flex-1">
                  <Download className="h-4 w-4 mr-2" />
                  {t('actions.download', 'Download PDF')}
                </Button>
                <Button onClick={handleShare} variant="outline" className="flex-1">
                  <Share2 className="h-4 w-4 mr-2" />
                  {t('actions.share', 'Share')}
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RetirementCalculator;
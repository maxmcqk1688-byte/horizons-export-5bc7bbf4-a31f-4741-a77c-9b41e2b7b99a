import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Download, Share2, RotateCcw } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { useCalculatorState } from '@/hooks/useCalculatorState.js';
import { useCurrency } from '@/hooks/useCurrency.js';
import { formatCurrency, formatPercentage } from '@/utils/formatCurrency.js';
import { calculateCAGR } from '@/utils/calculateCAGR.js';
import { downloadCalculationPDF, shareCalculation } from '@/utils/downloadPDF.js';
import { toast } from 'sonner';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CAGRCalculator = () => {
  const { t } = useTranslation();
  const { currency } = useCurrency();
  const [inputs, setInputs] = useCalculatorState('cagr', {
    beginningValue: '100000',
    endingValue: '250000',
    years: '5'
  });

  const [results, setResults] = useState(null);

  useEffect(() => {
    const result = calculateCAGR(
      inputs.beginningValue,
      inputs.endingValue,
      inputs.years
    );
    setResults(result);
  }, [inputs]);

  const handleInputChange = (field, value) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const handleReset = () => {
    setInputs({
      beginningValue: '100000',
      endingValue: '250000',
      years: '5'
    });
  };

  const handleDownload = async () => {
    const success = await downloadCalculationPDF('cagr-results', 'cagr-calculation.pdf');
    if (success) {
      toast.success(t('actions.success', 'PDF downloaded successfully'));
    } else {
      toast.error(t('actions.error', 'Failed to download PDF'));
    }
  };

  const handleShare = async () => {
    const success = await shareCalculation(
      t('calculators.cagr.title', 'CAGR Calculation'),
      `${t('calculators.cagr.cagr', 'CAGR')}: ${formatPercentage(results?.cagr || 0)}`,
      window.location.href
    );
    if (success) {
      toast.success(t('actions.success', 'Shared successfully'));
    }
  };

  const chartData = {
    labels: results?.yearlyData?.map(d => `Year ${d.year}`) || [],
    datasets: [
      {
        label: t('calculators.cagr.chartLabel', 'Investment Value'),
        data: results?.yearlyData?.map(d => d.value) || [],
        backgroundColor: 'rgba(30, 58, 138, 0.8)',
        borderColor: 'rgb(30, 58, 138)',
        borderWidth: 1
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: t('calculators.cagr.chartTitle', 'Investment Growth Projection')
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${t('calculators.cagr.chartLabel', 'Value')}: ${formatCurrency(context.parsed.y, currency)}`;
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
          <CardTitle>{t('calculators.cagr.title', 'CAGR Calculator')}</CardTitle>
          <CardDescription>{t('calculators.cagr.desc', 'Calculate Compound Annual Growth Rate')}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Inputs */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="beginningValue">{t('calculators.cagr.beginningValue', 'Beginning Value')}</Label>
                <Input
                  id="beginningValue"
                  type="number"
                  value={inputs.beginningValue}
                  onChange={(e) => handleInputChange('beginningValue', e.target.value)}
                  className="text-foreground"
                />
              </div>

              <div>
                <Label htmlFor="endingValue">{t('calculators.cagr.endingValue', 'Ending Value')}</Label>
                <Input
                  id="endingValue"
                  type="number"
                  value={inputs.endingValue}
                  onChange={(e) => handleInputChange('endingValue', e.target.value)}
                  className="text-foreground"
                />
              </div>

              <div>
                <Label htmlFor="years">{t('calculators.cagr.years', 'Number of Years')}</Label>
                <Input
                  id="years"
                  type="number"
                  value={inputs.years}
                  onChange={(e) => handleInputChange('years', e.target.value)}
                  className="text-foreground"
                />
              </div>

              <Button onClick={handleReset} variant="outline" className="w-full">
                <RotateCcw className="h-4 w-4 mr-2" />
                {t('calculators.cagr.reset', 'Reset')}
              </Button>
            </div>

            {/* Results */}
            <div id="cagr-results" className="space-y-4">
              <div className="space-y-3">
                <Card className="bg-primary text-primary-foreground">
                  <CardHeader className="pb-2">
                    <CardDescription className="text-primary-foreground/80 text-xs">{t('calculators.cagr.cagr', 'CAGR')}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold">{formatPercentage(results?.cagr || 0)}</p>
                  </CardContent>
                </Card>

                <Card className="bg-secondary text-secondary-foreground">
                  <CardHeader className="pb-2">
                    <CardDescription className="text-secondary-foreground/80 text-xs">{t('calculators.cagr.totalGrowth', 'Total Growth')}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">{formatPercentage(results?.totalGrowth || 0)}</p>
                  </CardContent>
                </Card>

                <Card className="bg-accent text-accent-foreground">
                  <CardHeader className="pb-2">
                    <CardDescription className="text-accent-foreground/80 text-xs">{t('calculators.cagr.absoluteReturn', 'Absolute Return')}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">{formatCurrency(results?.absoluteReturn || 0, currency)}</p>
                  </CardContent>
                </Card>
              </div>

              <div className="h-48">
                {results?.yearlyData && <Bar data={chartData} options={chartOptions} />}
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

export default CAGRCalculator;
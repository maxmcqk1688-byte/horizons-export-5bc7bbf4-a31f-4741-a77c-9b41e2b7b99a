import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Download, Share2, RotateCcw } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { useCalculatorState } from '@/hooks/useCalculatorState.js';
import { useCurrency } from '@/hooks/useCurrency.js';
import { formatCurrency } from '@/utils/formatCurrency.js';
import { calculateSIP } from '@/utils/calculateSIP.js';
import { downloadCalculationPDF, shareCalculation } from '@/utils/downloadPDF.js';
import { toast } from 'sonner';

ChartJS.register(ArcElement, Tooltip, Legend);

const SIPCalculator = () => {
  const { t } = useTranslation();
  const { currency } = useCurrency();
  const [inputs, setInputs] = useCalculatorState('sip', {
    monthlyInvestment: '5000',
    annualReturn: '12',
    years: '15'
  });

  const [results, setResults] = useState(null);

  useEffect(() => {
    const result = calculateSIP(
      inputs.monthlyInvestment,
      inputs.annualReturn,
      inputs.years
    );
    setResults(result);
  }, [inputs]);

  const handleInputChange = (field, value) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const handleReset = () => {
    setInputs({
      monthlyInvestment: '5000',
      annualReturn: '12',
      years: '15'
    });
  };

  const handleDownload = async () => {
    const success = await downloadCalculationPDF('sip-results', 'sip-calculation.pdf');
    if (success) {
      toast.success(t('actions.success', 'PDF downloaded successfully'));
    } else {
      toast.error(t('actions.error', 'Failed to download PDF'));
    }
  };

  const handleShare = async () => {
    const success = await shareCalculation(
      t('calculators.sip.title', 'SIP Calculation'),
      `${t('calculators.sip.totalValue', 'Total Value')}: ${formatCurrency(results?.totalValue || 0, currency)}`,
      window.location.href
    );
    if (success) {
      toast.success(t('actions.success', 'Shared successfully'));
    }
  };

  const chartData = {
    labels: [t('calculators.sip.chartInvested', 'Invested Amount'), t('calculators.sip.chartReturns', 'Estimated Returns')],
    datasets: [
      {
        data: [results?.totalInvested || 0, results?.estimatedReturns || 0],
        backgroundColor: [
          'rgba(30, 58, 138, 0.8)',
          'rgba(16, 185, 129, 0.8)'
        ],
        borderColor: [
          'rgb(30, 58, 138)',
          'rgb(16, 185, 129)'
        ],
        borderWidth: 2
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.label}: ${formatCurrency(context.parsed, currency)}`;
          }
        }
      }
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{t('calculators.sip.title', 'SIP Calculator')}</CardTitle>
          <CardDescription>{t('calculators.sip.desc', 'Calculate returns from Systematic Investment Plan')}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Inputs */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="monthlyInvestment">{t('calculators.sip.monthlyInvestment', 'Monthly Investment Amount')}</Label>
                <Input
                  id="monthlyInvestment"
                  type="number"
                  value={inputs.monthlyInvestment}
                  onChange={(e) => handleInputChange('monthlyInvestment', e.target.value)}
                  className="text-foreground"
                />
              </div>

              <div>
                <Label htmlFor="annualReturn">{t('calculators.sip.annualReturn', 'Expected Annual Return (%)')}</Label>
                <Input
                  id="annualReturn"
                  type="number"
                  step="0.1"
                  value={inputs.annualReturn}
                  onChange={(e) => handleInputChange('annualReturn', e.target.value)}
                  className="text-foreground"
                />
              </div>

              <div>
                <Label htmlFor="years">{t('calculators.sip.years', 'Time Period (Years)')}</Label>
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
                {t('calculators.sip.reset', 'Reset')}
              </Button>
            </div>

            {/* Results */}
            <div id="sip-results" className="space-y-4">
              <div className="space-y-3">
                <Card className="bg-primary text-primary-foreground">
                  <CardHeader className="pb-2">
                    <CardDescription className="text-primary-foreground/80 text-xs">{t('calculators.sip.totalValue', 'Total Value')}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">{formatCurrency(results?.totalValue || 0, currency)}</p>
                  </CardContent>
                </Card>

                <Card className="bg-secondary text-secondary-foreground">
                  <CardHeader className="pb-2">
                    <CardDescription className="text-secondary-foreground/80 text-xs">{t('calculators.sip.totalInvested', 'Total Invested')}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">{formatCurrency(results?.totalInvested || 0, currency)}</p>
                  </CardContent>
                </Card>

                <Card className="bg-accent text-accent-foreground">
                  <CardHeader className="pb-2">
                    <CardDescription className="text-accent-foreground/80 text-xs">{t('calculators.sip.estimatedReturns', 'Estimated Returns')}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">{formatCurrency(results?.estimatedReturns || 0, currency)}</p>
                  </CardContent>
                </Card>
              </div>

              <div className="h-64">
                <Pie data={chartData} options={chartOptions} />
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

export default SIPCalculator;
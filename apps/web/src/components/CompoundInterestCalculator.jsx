import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Download, Share2, RotateCcw, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { useCalculatorState } from '@/hooks/useCalculatorState.js';
import { useCurrency } from '@/hooks/useCurrency.js';
import { useChartData } from '@/hooks/useChartData.js';
import { formatCurrency, formatPercentage } from '@/utils/formatCurrency.js';
import { calculateCompoundInterest } from '@/utils/calculateCompoundInterest.js';
import { downloadCalculationPDF, shareCalculation } from '@/utils/downloadPDF.js';
import { toast } from 'sonner';
import CalculationHistory, { saveCalculationToHistory } from './CalculationHistory.jsx';
import SocialShare from './SocialShare.jsx';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const CompoundInterestCalculator = () => {
  const { t } = useTranslation();
  const { currency } = useCurrency();
  const [inputs, setInputs] = useCalculatorState('compound_interest', {
    principal: '10000',
    monthlyContribution: '500',
    annualRate: '8',
    years: '10',
    compoundFrequency: 'monthly'
  });

  const [results, setResults] = useState(null);

  useEffect(() => {
    const result = calculateCompoundInterest(
      inputs.principal,
      inputs.monthlyContribution,
      inputs.annualRate,
      inputs.years,
      inputs.compoundFrequency
    );
    setResults(result);
  }, [inputs]);

  const chartData = useChartData(results?.yearlyData, 'line');

  const handleInputChange = (field, value) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const handleReset = () => {
    setInputs({
      principal: '10000',
      monthlyContribution: '500',
      annualRate: '8',
      years: '10',
      compoundFrequency: 'monthly'
    });
  };

  const handleSave = () => {
    saveCalculationToHistory('compound_interest', inputs, results);
    toast.success(t('actions.success', 'Calculation saved'));
  };

  const handleDownload = async () => {
    const success = await downloadCalculationPDF('compound-interest-report', 'compound-interest-report.pdf');
    if (success) {
      toast.success(t('actions.success', 'PDF downloaded'));
    } else {
      toast.error(t('actions.error', 'Failed to generate PDF'));
    }
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: 'index', intersect: false },
    plugins: {
      legend: { position: 'top' },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${formatCurrency(context.parsed.y, currency)}`;
          }
        }
      }
    },
    scales: {
      y: { beginAtZero: true, ticks: { callback: (value) => formatCurrency(value, currency) } }
    }
  };

  return (
    <div className="space-y-6" id="compound-interest-report">
      <div className="bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-200 rounded-lg p-4 flex gap-3 text-sm">
        <AlertCircle className="h-5 w-5 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
        <div>
          <strong>{t('footer.educationalOnly')}:</strong> {t('calculators.disclaimerBanner')}
        </div>
      </div>

      <Card className="shadow-lg border-border/50">
        <CardHeader>
          <CardTitle className="text-2xl">{t('calculators.compound.title')}</CardTitle>
          <CardDescription>{t('calculators.compound.desc')}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 space-y-5">
              <div className="space-y-2">
                <Label htmlFor="principal">{t('calculators.compound.principal')}</Label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-muted-foreground">{currency === 'USD' ? '$' : currency}</span>
                  <Input id="principal" type="number" min="0" className="pl-12" value={inputs.principal} onChange={(e) => handleInputChange('principal', e.target.value)} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="monthlyContribution">{t('calculators.compound.monthly')}</Label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-muted-foreground">{currency === 'USD' ? '$' : currency}</span>
                  <Input id="monthlyContribution" type="number" min="0" className="pl-12" value={inputs.monthlyContribution} onChange={(e) => handleInputChange('monthlyContribution', e.target.value)} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="annualRate">{t('calculators.compound.rate')}</Label>
                <div className="relative">
                  <Input id="annualRate" type="number" step="0.1" className="pr-8" value={inputs.annualRate} onChange={(e) => handleInputChange('annualRate', e.target.value)} />
                  <span className="absolute right-3 top-2.5 text-muted-foreground">%</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="years">{t('calculators.compound.years')}</Label>
                <Input id="years" type="number" min="1" max="100" value={inputs.years} onChange={(e) => handleInputChange('years', e.target.value)} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="compoundFrequency">{t('calculators.compound.freq')}</Label>
                <Select value={inputs.compoundFrequency} onValueChange={(value) => handleInputChange('compoundFrequency', value)}>
                  <SelectTrigger id="compoundFrequency"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">{t('calculators.compound.freqDaily')}</SelectItem>
                    <SelectItem value="monthly">{t('calculators.compound.freqMonthly')}</SelectItem>
                    <SelectItem value="quarterly">{t('calculators.compound.freqQuarterly')}</SelectItem>
                    <SelectItem value="yearly">{t('calculators.compound.freqYearly')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-2 pt-4">
                <Button onClick={handleReset} variant="outline" className="flex-1">
                  <RotateCcw className="h-4 w-4 mr-2" /> {t('calculators.compound.reset')}
                </Button>
                <Button onClick={handleSave} className="flex-1">{t('calculators.compound.save')}</Button>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-primary text-primary-foreground col-span-2 md:col-span-2 shadow-sm">
                  <p className="text-sm font-medium opacity-80">{t('calculators.compound.futureValue')}</p>
                  <p className="text-3xl font-bold mt-1 tracking-tight">{formatCurrency(results?.finalBalance || 0, currency)}</p>
                </div>
                <div className="p-4 rounded-xl bg-secondary text-secondary-foreground shadow-sm">
                  <p className="text-sm font-medium opacity-80">{t('calculators.compound.totalContributions')}</p>
                  <p className="text-xl font-bold mt-1 tracking-tight">{formatCurrency(results?.totalContributions || 0, currency)}</p>
                </div>
                <div className="p-4 rounded-xl bg-accent text-accent-foreground shadow-sm">
                  <p className="text-sm font-medium opacity-80">{t('calculators.compound.totalInterest')}</p>
                  <p className="text-xl font-bold mt-1 tracking-tight">{formatCurrency(results?.totalInterest || 0, currency)}</p>
                </div>
              </div>

              <div className="h-[300px] w-full border rounded-xl p-4 bg-card">
                {chartData && <Line data={chartData} options={chartOptions} />}
              </div>

              <div className="bg-muted/50 rounded-lg p-5 border text-sm text-muted-foreground leading-relaxed">
                <h4 className="font-semibold text-foreground mb-2">{t('calculators.compound.explanationTitle')}</h4>
                <p>
                  {t('calculators.compound.explanationDesc1', {
                    principal: formatCurrency(inputs.principal, currency),
                    monthly: formatCurrency(inputs.monthlyContribution, currency),
                    years: inputs.years,
                    rate: inputs.annualRate,
                    freq: t(`calculators.compound.freq${inputs.compoundFrequency.charAt(0).toUpperCase() + inputs.compoundFrequency.slice(1)}`),
                    finalBalance: formatCurrency(results?.finalBalance || 0, currency)
                  })}
                  <br/><br/>
                  {t('calculators.compound.explanationDesc2', {
                    contributions: formatCurrency(results?.totalContributions || 0, currency),
                    interest: formatCurrency(results?.totalInterest || 0, currency),
                    percent: formatPercentage(results?.interestPercentage || 0)
                  })}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <SocialShare title={`My investment could grow to ${formatCurrency(results?.finalBalance || 0, currency)}! Check out this calculator.`} />
                <Button onClick={handleDownload} variant="secondary">
                  <Download className="h-4 w-4 mr-2" /> {t('actions.download')}
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <CalculationHistory onSelectHistory={setInputs} />
    </div>
  );
};

export default CompoundInterestCalculator;
import React, { useState, useEffect } from 'react';
import { History, Trash2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card.jsx';
import { formatCurrency } from '@/utils/formatCurrency.js';
import { useCurrency } from '@/hooks/useCurrency.js';

export const saveCalculationToHistory = (type, inputs, result) => {
  try {
    const history = JSON.parse(localStorage.getItem('calc_history') || '[]');
    const newEntry = {
      id: Date.now().toString(),
      type,
      timestamp: new Date().toISOString(),
      inputs,
      result,
    };
    const updatedHistory = [newEntry, ...history].slice(0, 10); // Keep last 10
    localStorage.setItem('calc_history', JSON.stringify(updatedHistory));
    // Dispatch custom event to update listener components
    window.dispatchEvent(new Event('calc_history_updated'));
  } catch (err) {
    console.error('Could not save history', err);
  }
};

const CalculationHistory = ({ onSelectHistory }) => {
  const { currency } = useCurrency();
  const [history, setHistory] = useState([]);

  const loadHistory = () => {
    try {
      const data = JSON.parse(localStorage.getItem('calc_history') || '[]');
      setHistory(data);
    } catch (err) {
      setHistory([]);
    }
  };

  useEffect(() => {
    loadHistory();
    window.addEventListener('calc_history_updated', loadHistory);
    return () => window.removeEventListener('calc_history_updated', loadHistory);
  }, []);

  const clearHistory = () => {
    localStorage.removeItem('calc_history');
    setHistory([]);
  };

  if (history.length === 0) return null;

  return (
    <Card className="mt-8">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <History className="h-5 w-5 text-muted-foreground" />
          Recent Calculations
        </CardTitle>
        <Button variant="ghost" size="sm" onClick={clearHistory} className="text-destructive hover:text-destructive/90">
          <Trash2 className="h-4 w-4 mr-1" /> Clear
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {history.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
              <div>
                <p className="font-medium text-sm capitalize">
                  {item.type.replace('_', ' ')} Calculation
                </p>
                <p className="text-xs text-muted-foreground">
                  {new Date(item.timestamp).toLocaleDateString()} at {new Date(item.timestamp).toLocaleTimeString()}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right hidden sm:block">
                  <p className="font-bold text-sm text-foreground">
                    {item.result?.totalValue || item.result?.finalBalance || item.result?.retirementCorpus ? 
                     formatCurrency(item.result?.totalValue || item.result?.finalBalance || item.result?.retirementCorpus, currency) : 
                     'Result saved'}
                  </p>
                </div>
                {onSelectHistory && (
                  <Button variant="secondary" size="sm" onClick={() => onSelectHistory(item.inputs)}>
                    Load <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CalculationHistory;
import { useMemo } from 'react';

export const useChartData = (data, type = 'line') => {
  return useMemo(() => {
    if (!data || data.length === 0) {
      return null;
    }

    switch (type) {
      case 'line':
        return {
          labels: data.map(d => d.year || d.month || d.age),
          datasets: [
            {
              label: 'Principal',
              data: data.map(d => d.principal || d.invested),
              borderColor: 'rgb(30, 58, 138)',
              backgroundColor: 'rgba(30, 58, 138, 0.1)',
              fill: true,
              tension: 0.4
            },
            {
              label: 'Interest/Returns',
              data: data.map(d => d.interest || d.returns),
              borderColor: 'rgb(16, 185, 129)',
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              fill: true,
              tension: 0.4
            }
          ]
        };

      case 'pie':
        return {
          labels: ['Invested Amount', 'Returns'],
          datasets: [
            {
              data: [data.invested, data.returns],
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

      case 'bar':
        return {
          labels: data.map(d => d.year || d.age),
          datasets: [
            {
              label: 'Total Value',
              data: data.map(d => d.total || d.value),
              backgroundColor: 'rgba(30, 58, 138, 0.8)',
              borderColor: 'rgb(30, 58, 138)',
              borderWidth: 1
            }
          ]
        };

      default:
        return null;
    }
  }, [data, type]);
};
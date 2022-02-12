import { useEffect, useState } from 'react';
import { makeRequest } from '../../utils/request';
import PieChartCard from '../pie-chart-card';
import './styles.css';
import { ChartSeriesData, SalesByGender } from '../../types';
import { buildChartSeries, sumSalesByGender } from './helpers';
import { formatPrice } from '../../utils/formatters';

function SalesByStore() {
  const [chartSeries, setChartSeries] = useState<ChartSeriesData[]>([]);
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    makeRequest.get<SalesByGender[]>('/sales/by-gender?storeId=0').then((response) => {
      const newChartSeries = buildChartSeries(response.data);
      setChartSeries(newChartSeries);
      const newTotalSum = sumSalesByGender(response.data);
      setTotalSum(newTotalSum);
    });
  }, []);

  return (
    <div className="sales-by-store-container base-card">
      <div className="sales-by-store-data">
        <h1>{formatPrice(totalSum)}</h1>
        <span>Total de vendas</span>
      </div>
      <div className="pie-chart-card">
        <PieChartCard name="" labels={['Feminino', 'Masculino', 'Outro']} series={[40, 30, 30]} />
      </div>
    </div>
  );
}

export default SalesByStore;

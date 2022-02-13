import React, { useEffect, useState } from 'react';
import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import PieChartCard from './components/pie-chart-card';
import SalesByStore from './components/sales-by-store';
import { buildSalesByGenderChart } from './helpers';
import { FilterStore, Gender, PieChartConfig, SalesByGender2 } from './types';
import { makeRequest } from './utils/request';

function App() {
  const [filterStore, setFilterStore] = useState<FilterStore>();

  //const params = useMemo(() => buildFilterParams(filterStore), [filterStore])
  const [salesByGender2, setSalesByGender2] = useState<PieChartConfig>();

  const formatGender = (gender: Gender) => {
    const textByGender = {
      MALE: 'Masculino',
      FEMALE: 'Feminino',
      OTHER: 'Outro'
    };

    return textByGender[gender];
  };

  useEffect(() => {
    makeRequest.get<SalesByGender2[]>('/sales/by-gender?storeId=0').then((response) => {
      const newSalesByGender2 = buildSalesByGenderChart(response.data);
      setSalesByGender2(newSalesByGender2);
    });
  }, []);

  const onFilterChange = (filter: FilterStore) => {
    setFilterStore(filter);
    console.log(filter);
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onFilterChange={onFilterChange} />
        <SalesByStore filterStore={filterStore} />
        <PieChartCard name="" labels={salesByGender2?.labels} series={salesByGender2?.series} />
      </div>
    </>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import SalesByStore from './components/sales-by-store';
import { FilterStore } from './types';

function App() {
  const [filterStore, setFilterStore] = useState<FilterStore>();

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
      </div>
    </>
  );
}

export default App;

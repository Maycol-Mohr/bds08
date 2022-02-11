import React from 'react';
import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import SalesByStore from './components/sales-by-store';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <SalesByStore />
      </div>
    </>
  );
}

export default App;

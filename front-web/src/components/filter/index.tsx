import React, { useState } from 'react';
import { FilterStore, Store } from '../../types';
import './styles.css';

type Props = {
  onFilterChange: (filter: FilterStore) => void;
};

function Filter({ onFilterChange }: Props) {
  const [store, setStore] = useState<Store>();

  const onChangeStore = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedStore = event.target.value as Store;

    setStore(selectedStore);
    //onFilterChange({ stores: selectedStore });
  };

  return (
    <div className="filter-container base-card">
      <select className="filter-input" value={store} onChange={onChangeStore}>
        <option value="">Selecione uma loja</option>
        <option value="Uberaba">Uberaba</option>
        <option value="Uberlandia">Uberlandia</option>
        <option value="Araguari">Araguari</option>
        <option value="Ituiutaba">Ituiutaba</option>
      </select>
    </div>
  );
}

export default Filter;

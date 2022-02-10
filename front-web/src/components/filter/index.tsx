import './styles.css';

function Filter() {
  return (
    <div className="filter-container base-card">
      <select className="filter-input">
        <option value="">Selecione uma loja</option>
        <option value="">Uberaba</option>
        <option value="">Uberlandia</option>
        <option value="">Araguari</option>
        <option value="">Ituiutaba</option>
      </select>
    </div>
  );
}

export default Filter;

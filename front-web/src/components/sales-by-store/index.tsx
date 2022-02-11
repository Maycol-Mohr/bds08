import PieChartCard from '../pie-chart-card';
import './styles.css';

function SalesByStore() {
  return (
    <div className="sales-by-store-container base-card">
      <div className="sales-by-store-data">
        <h1>R$ 746.484,00</h1>
        <span>Total de vendas</span>
      </div>
      <div className="pie-chart-card">
        <PieChartCard name="" labels={['Feminino', 'Masculino', 'Outro']} series={[40, 30, 30]} />
      </div>
    </div>
  );
}

export default SalesByStore;

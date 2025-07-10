const CarDatail = ({ brand, km, color }) => {
  return (
    <div>
      <ul>
        <li>Marca: {brand}</li>
        <li>km: {km}</li>
        <li>color: {color}</li>
      </ul>
    </div>
  );
};

export default CarDatail;

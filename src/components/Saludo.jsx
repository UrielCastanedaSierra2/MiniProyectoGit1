function Saludo({ onIngresar }) {
  return (
    <div className="saludo">
      <h2>Bienvenidos al sistema de votación de L'Oréal</h2>
      <button onClick={onIngresar}>Ingresar</button>
    </div>
  );
}

export default Saludo;
 
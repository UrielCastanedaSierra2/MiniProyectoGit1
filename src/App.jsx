import { useState } from 'react';
// Aquí importamos los components de la aplicación
import Header from './components/Header';
import Footer from './components/Footer';
import Saludo from './components/Saludo';
import './App.css';

// incorporación del componente Resultados
import Resultados from './components/Resultados';

function App() {
  // Creamos variables de estado para CONTROL DE INICIO del sistema después del saludo
  // el estado inicial es FALSO para indicar que aun no se debe mostrar porque falta
  // mostrar la vista del Saludo.
  const [mostrarApp, setMostrarApp] = useState(false);

  // Creamos variables de estado para los votos de cada producto
  const [votosProducto1, setVotosProducto1] = useState(0);
  const [votosProducto2, setVotosProducto2] = useState(0);
  const [votosProducto3, setVotosProducto3] = useState(0);

  // variable de estado (la llamaremos 'vista') que muestra inicialmente la votación./
  const [vista, setVista] = useState('votacion');

  // Listado de productos con sus votos
  const productos = [
    { nombre: 'Máscara de Pestañas Voluminous', votos: votosProducto1 },
    { nombre: 'Labial Rouge Signature', votos: votosProducto2 },
    { nombre: 'Crema Hidratante Revitalift', votos: votosProducto3 },
  ];


  // Se valida el estado de la aplicación (mostrarApp), si es FALSO, se muestra 
  // la Vista #1 del Sistema, correspondiente al SALUDO (Saludo.jsx)
  if (!mostrarApp) {
    return <Saludo onIngresar={() => setMostrarApp(true)} />;
  }

  // Se valida la variable de estado 'vista' para mostrar la vista correspondiente
  if (vista === 'resultados') {
    return (
      <Resultados
        productos={productos}
        onRegresar={() => setVista('votacion')}
      />
    );
  }


  // Cuando el estado de mostrarApp sea VERDADERO (true), entonces
  // no se vuelve a mostrar el SALUDO. Por defecto se mostrará siempre la vista #2.
  // en este caso la Vista principal de la aplicación.  
  return (
    <div className="App">
      {/* incorporamos el <header> definido para las vistas de Nuestro Sistema */}
      <Header />
      {/* se suprimen las líneas que fueron trasladas al header */}
      {/* se mantienen las líneas que conforman la vista del cuerpo principal de la App */}
      <div className="galeria">
        <div className="producto">
          <h2>Máscara de Pestañas Voluminous</h2>
          <p>Votos: {votosProducto1}</p>
          <button onClick={() => setVotosProducto1(votosProducto1 + 1)}>
            Votar
          </button>
        </div>
        <div className="producto">
          <h2>Labial Rouge Signature</h2>
          <p>Votos: {votosProducto2}</p>
          <button onClick={() => setVotosProducto2(votosProducto2 + 1)}>
            Votar
          </button>
        </div>
        <div className="producto">
          <h2>Crema Hidratante Revitalift</h2>
          <p>Votos: {votosProducto3}</p>
          <button onClick={() => setVotosProducto3(votosProducto3 + 1)}>
            Votar
          </button>
        </div>
      </div>

      {/* Enlace para consultar el resumen de resultados */}
      <p className="link-derecha">
        <a href="#" onClick={() => setVista('resultados')}>
          Consultar Resumen de Resultados
        </a>
      </p>

      {/* se suprimen las líneas que fueron trasladades al footer */} {/* incorporamos el <footer> definido para las vistas de Nuestro Sistema */}
      <Footer />
    </div>
  );
}
export default App;

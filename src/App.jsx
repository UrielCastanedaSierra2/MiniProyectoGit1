import { useState } from 'react'
import './App.css'

function App() {
  const [votosProducto1, setVotosProducto1] = useState(0)
  const [votosProducto2, setVotosProducto2] = useState(0)
  const [votosProducto3, setVotosProducto3] = useState(0)

  return (
    <div className="App">
      <h1>Galería de Votación L'Oréal</h1>
      <p>¡Vota por tu producto favorito!</p>

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
    </div>
  )
}

export default App

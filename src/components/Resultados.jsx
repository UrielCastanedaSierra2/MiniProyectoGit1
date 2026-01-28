// Aquí importamos los components de la aplicación
import Header from './Header';
import Footer from './Footer';
function Resultados({ productos, onRegresar }) {
    // Ordenar productos por votos (descendente)
    const productosOrdenados = [...productos].sort(
        (a, b) => b.votos - a.votos
    );

    return (
        <> {/* esta etiqueta es necesaria para la correcta operación de <header> en React */}
            <Header />
            <main className="resultados">
                <h2>Resumen de Resultados</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Votos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productosOrdenados.map((p, index) => (
                            <tr key={index}>
                                <td>{p.nombre}</td>
                                <td>{p.votos}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <p className="link-derecha">
                    <a href="#" onClick={onRegresar}>
                        Regresar a la votación
                    </a>
                </p>
            </main>
            <Footer />
        </>
    );
}
export default Resultados;
import { useState } from "react";
import Card from "./Card";

function App() {

  const [nombre, setNombre] = useState("");
  const [libro, setLibro] = useState("");
  const [error, setError] = useState("");
  const [esValido, setEsValido] = useState(false);

  const regexEspacioInicio = /^[^\s].*/;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      nombre.length >= 3 &&
      regexEspacioInicio.test(nombre) &&
      libro.length >= 6
    ) {
      setError("");
      setEsValido(true);
    } else {
      setError("Por favor chequea que la información sea correcta");
      setEsValido(false);
    }
  };

  return (
    <div className="App">
      <h1>Elige un libro</h1>
      <div className="form-content">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="nombre"
            placeholder="Ingresa tu nombre"
            className="color-form-input"
            onChange={(e) => setNombre(e.target.value)}
          />

          <input
            type="text"
            id="libro"
            placeholder="Ingresa tu libro favorito"
            className="color-form-input"
            onChange={(e) => setLibro(e.target.value)}
          />
          <button type="submit" className="color-form-button">
            Submit!
          </button>
        </form>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {esValido && <Card nombre={nombre} libro={libro} />}
    </div>
  );
}

export default App;

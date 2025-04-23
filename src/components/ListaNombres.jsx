import { useState } from "react";

function ListaNombres() {
  const [nombre, setNombre] = useState("");
  const [nombres, setNombres] = useState([]);

  const agregarNombre = () => {
    if (nombre.trim() !== "") {
      setNombres([...nombres, nombre]);
      setNombre(""); // Limpiar campo
    }
  };

  return (
    <div className="mt-10">
      <input
        type="text"
        placeholder="Escribe un nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <button onClick={agregarNombre} className="ml-2">Agregar</button>
      <ul>
        {nombres.map((n, index) => (
          <li key={index}>{n}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaNombres;

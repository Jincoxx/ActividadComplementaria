import { useState } from "react";

function FechaActual() {
  const [fecha, setFecha] = useState("");

  const mostrarFecha = () => {
    const hoy = new Date().toLocaleString();
    setFecha(hoy);
  };

  return (
    <div className="mt-10">
      <button onClick={mostrarFecha}>Mostrar fecha</button>
      <h1>{fecha}</h1>
    </div>
  );
}

export default FechaActual;

import React, { useState } from "react";

function Saludo() {
  const [nombre, setNombre] = useState("");
  const [mostrarSaludo, setMostrarSaludo] = useState(false);

  const handleInputChange = (e) => {
    setNombre(e.target.value);
  };

  const handleSaludar = () => {
    if (nombre.trim() !== "") {
      setMostrarSaludo(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-purple-300 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">¡Saludador React!</h2>

        <input
          type="text"
          value={nombre}
          onChange={handleInputChange}
          placeholder="Ingresa tu nombre"
          className="border border-gray-400 p-2 w-full rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={handleSaludar}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Saludar
        </button>

        {mostrarSaludo && (
          <h1 className="mt-6 text-2xl font-bold text-center text-green-700">¡Hola, {nombre}!</h1>
        )}
      </div>
    </div>
  );
}

export default Saludo;

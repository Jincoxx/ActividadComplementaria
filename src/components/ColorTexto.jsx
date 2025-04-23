import { useState } from "react";

function ColorTexto() {
  const colores = ["red", "blue", "green", "orange", "purple", "teal", "brown"];
  const [color, setColor] = useState("black");

  const cambiarColor = () => {
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    setColor(colorAleatorio);
  };

  return (
    <div className="text-center mt-10">
      <h1 style={{ color }}>Este texto cambia de color</h1>
      <button onClick={cambiarColor}>Cambiar color</button>
    </div>
  );
}

export default ColorTexto;

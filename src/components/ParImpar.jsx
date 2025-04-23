import { useState } from "react";

function ParImpar() {
  const [numero, setNumero] = useState("");
  const [resultado, setResultado] = useState("");

  const revisarParImpar = () => {
    const num = parseInt(numero);
    if (isNaN(num)) {
      setResultado("Por favor ingresa un número válido.");
      return;
    }

    if (num % 2 === 0) {
      setResultado(`El número ${num} es PAR.`);
    } else {
      setResultado(`El número ${num} es IMPAR.`);
    }
  };

  return (
    <div className="text-center mt-10">
      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        placeholder="Ingresa un número"
      />
      <button onClick={revisarParImpar} className="ml-2">Revisar</button>
      <h1>{resultado}</h1>
    </div>
  );
}

export default ParImpar;

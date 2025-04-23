import { useState } from "react";

function FormularioRegistro() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const [mensaje, setMensaje] = useState("");

  const enviarFormulario = (e) => {
    e.preventDefault();
    if (contraseña === confirmar) {
      setMensaje(`¡Bienvenido, ${nombre}!`);
    } else {
      setMensaje("Las contraseñas no coinciden.");
    }
  };

  return (
    <div className="mt-10">
      <form onSubmit={enviarFormulario}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        /><br />
        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        /><br />
        <input
          type="password"
          placeholder="Contraseña"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
        /><br />
        <input
          type="password"
          placeholder="Confirmar Contraseña"
          value={confirmar}
          onChange={(e) => setConfirmar(e.target.value)}
        /><br />
        <button type="submit">Enviar</button>
      </form>
      <h1>{mensaje}</h1>
    </div>
  );
}

export default FormularioRegistro;

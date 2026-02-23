
import { useState } from 'react';
import './App.css';
import './index.js';
import Button from 'react-bootstrap/Button';

function App() {
  
  const [Usuario, setUsuario] = useState("");
  const [Contrasena, setContrasena] = useState("");
  const [Mensaje, setMensaje] = useState("");

  const ManejarLogin = () => {
 if (Usuario === "admin" && Contrasena === "admin") {
      setMensaje("¡Inicio de sesión exitoso!");
      //meter redireccion a una nueva pagina
    } else {
      setMensaje("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
    }
  }

  return (
    <>
      <div className="contenedor">
        <div className = "login-card">
            <input
              type="text"
              placeholder="Email"
              value={Usuario}
              onChange={(e) => setUsuario(e.target.value)}
              className="input"/>

            <input
              type="password"
              placeholder="Contraseña"
              value={Contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              className="input"/>
            <Button variant="primary" onClick={ManejarLogin}>Iniciar Sesión</Button>
            <p>{Mensaje}</p>
            </div>
      </div>
    </>
  );
}

export default App;

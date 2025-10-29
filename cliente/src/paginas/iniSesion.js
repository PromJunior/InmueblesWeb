import React from "react";
import axios from "axios";

function iniSesion(){
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [mensaje, setMensaje] = useState('');

    const manejarSubmit = async (e) => {
        e.preventDefault ();
        try{
            const res = await axios.post('http://localhost:3001/login',{
                usuario,
                contrasena,
            });
            setMensaje(res.data.mensaje);
        } catch (error) {
            setMensaje (error.response?.data.mensaje || 'Error al iniciar sesion');
        }
    };
    return (
        <div style={styles.container}>
            <h2>Iniciar Sesión</h2>
            <form onSubmit={manejarSubmit}style={styles.form}>
                <input
                type="text"
                placeholder="Usuario"
                value="usuario"
                onChange={(e) => setUsuario(e.target.value)}
                style={styles.input}
                requerid
                />
                <input
                type="password"
                placeholder="contrasena"
                value="contrasena"
                onChange={(e) => setContrasena(e.target.value)}
                style={styles.input}
                requerid
                />
                <button type="submit" style={styles.button}>Ingresar</button>
            </form>
            {mensaje && <p style= {styles.mensaje}>{mensaje}</p>}
        </div>
    );
}
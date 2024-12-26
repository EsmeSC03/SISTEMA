import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para redirigir a otra página (opcional)

function JefeAcademico() {
  const [data, setData] = useState([]); // Estado para almacenar datos de la tabla
  const navigate = useNavigate(); // Hook para redirigir al usuario (si usas React Router)

  useEffect(() => {
    // Petición a una API para obtener los datos de la base de datos
    fetch('https://api.example.com/faltas-docentes') // Reemplaza con tu endpoint real
      .then((response) => response.json())
      .then((result) => setData(result)) // Guarda los datos en el estado
      .catch((error) => console.error('Error al obtener los datos:', error));
  }, []);

  // Función para manejar el botón de salir
  const handleLogout = () => {
    console.log("Usuario ha cerrado sesión");
    alert("Has cerrado sesión correctamente.");
    window.location.href = "/";
  };
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      {/* Botones de navegación */}
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
        <button style={styles.button}>Docentes</button>
        <button style={styles.button}>Ajustes</button>
        <button style={styles.button}>Cerrar sesión</button>
      
      </div>

      {/* Encabezado */}
      <div style={styles.header}>
        <h2 style={{ color: 'white', margin: 0 }}>Faltas de docentes</h2>
      </div>

      {/* Tabla */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Docente</th>
            <th>Faltas en el mes</th>
            <th>Asignatura</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.docente}</td>
              <td>{item.faltas}</td>
              <td>{item.asignatura}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


// Estilos en JavaScript
const styles = {
  button: {
    backgroundColor: '#5A5A5A',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#FF4C4C',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  header: {
    backgroundColor: '#0047AB',
    padding: '10px 0',
    textAlign: 'center',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
};


export default JefeAcademico;

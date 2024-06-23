// index.js

import express from 'express';
import studentRoutes from './src/view/studentRoutes.js';

const app = express();

// Middleware para manejar datos enviados en el cuerpo de las solicitudes HTTP
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Rutas
app.get('/', (req, res) => {
  res.send("¡Hola mundo!");
});

// Usar las rutas de estudiantes
app.use('/student', studentRoutes);

// Iniciar el servidor
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

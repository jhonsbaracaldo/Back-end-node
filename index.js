//import app from './app.js';

//app.listen(3000)// inicializar el servidor 
//console.log('Server on port',3000)



const db = require('./db');

(async () => {
  try {
    // Consulta de prueba
    const query = 'SELECT NOW() as current_time';
    const { rows } = await db.query(query);

    console.log('Consulta exitosa. Resultados:', rows);
  } catch (error) {
    console.error('Error al conectar o ejecutar la consulta:', error);
  } finally {
    // Cierra la conexión (opcional)
    await db.end();
  }
})();
import pkg from 'pg';
import dotenv from 'dotenv';
const { Pool } = pkg;
dotenv.config({ path: './env/.env' }); 

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
});


pool.connect()
    .then(() => console.log('Conectado a la base de datos'))
    .catch(err => console.error('Error conectando a la base de datos', err.stack));

export default pool;



console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_DATABASE:', process.env.DB_DATABASE);
console.log('DB_PORT:', process.env.DB_PORT);


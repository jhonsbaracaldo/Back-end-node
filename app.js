import express from 'express';
import dotenv from 'dotenv';
import session from 'express-session';
import { urlencoded, json } from 'express';  // Importar métodos específicos de express
import client from './config/db.js';  // Asumiendo que db.js exporta un cliente de base de datos
import bcryptjs from 'bcryptjs';


const app = express();

dotenv.config({ path: './env/.env' });

// Configurar express para manejar datos enviados en las solicitudes HTTP
app.use(urlencoded({ extended: false }));
app.use(json());

// Configurar sesión
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));


// Iniciar el servidor
app.listen(3000, () => {
    console.log('SERVER RUNNING IN http://localhost:3000');
});

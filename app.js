//invocamos express
const express = require('express');
const app = express();


//2.  que permite al servidor manejar correctamente los datos enviados en el cuerpo de las solicitudes HTTP
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//3. invocar dotenv
const dotenv = require ('dotenv');
dotenv.config({path:'./env/.env'});

app.listen(3000, (req,res) => {
    console.log('SERVER RUNNING IN http://localhost:3000');
})

const bcryptjs = require ('bcryptjs');
//4 Variables de sesion
const session = require ('express-session');
app.use(session({
    secret:'secret',
    resave:true,
    saveUninitialized:true
}))


//3. Invocar el modulo de conexión a la BD
const client = require ('./config/db');
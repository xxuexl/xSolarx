//Todo acaba en este archivo, ya que es el más relevante.
// Creamos nuestro servidor express

const express = require("express");
const dotenv = require("dotenv");
const { connect } = require("./src/utils/db");
//!Queda crear el middleware para config Cloudinary para poder importarlo aquí!

// Creamos el servidor web
const app = express();
// Vamos a configurar dotenv para poder utilizar las variables de entorno del .env
dotenv.config();
// Creamos la conexión con la BD (base de datos)
connect();
// Configura Cloudinary para la gestión de Img.
configCloudinary();

const PORT = process.env.PORT;

//?--------------------RUTAS--------------------------------------------------

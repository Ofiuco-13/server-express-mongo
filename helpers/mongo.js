import { MongoClient } from "mongodb";

//Definiendo conexion a url
const url = "mongodb://localhost:27017";
const cliente = new MongoClient(url);

//Definiendo nombre de base de datos
const nombreDB = "miProyecto";

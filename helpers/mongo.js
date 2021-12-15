import { MongoClient } from "mongodb";

//Definiendo conexion a url
const url = "mongodb://localhost:27017";
const cliente = new MongoClient(url);

//Definiendo nombre de base de datos
const nombreDB = "express-server";

async function main() {
    //Use metodo connect para conectar con el servidor
    await cliente.connect();
    console.log("Conexion exitosa al servidor, no hay problemas");
    const db =cliente.db(nombreDB);
}

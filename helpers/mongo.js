import { MongoClient } from "mongodb";

//Definiendo conexion a url
const url = "mongodb://localhost:27017";
const cliente = new MongoClient(url);

//Definiendo nombre de base de datos
const nombreDB = "express-server";

//async es para delcarar que el codigo serae asincrono, es decir, la secuencia no va a seguir sin que await se complete
async function main() {
  //Use metodo connect para conectar con el servidor
  await cliente.connect();
  //Solamente cuando la conexion al cliente sea exitosa se ejectura lo siguiente:
  console.log("Conexion exitosa al servidor, no hay problemas");
  //Se conectara (servidor) a la base de datos que esta definida como nombreDB
  const db = cliente.db(nombreDB);

  const coleccion = nombreDB.coleccion("documentos");

  return "Hecho.";
}

//llama a la funcion main()
main()
  .then(console.log)
  .catch(console.error)
  .finally(() => cliente.close());

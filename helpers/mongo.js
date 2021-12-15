import { MongoClient } from "mongodb";

//Defiendo conexion a url
const url = "mongodb://localhost:27017";
const cliente = new MongoClient(url);

import express from "express";
import morgan from "morgan";
const app = express();

//Settings
app.set("appName", "Pharmaceutical MERN");
app.set("port", 3000);

//Middlewares
app.use(express.json());
app.use(morgan("dev"));

//Rutas
app.get("/", (req, res) => {
  res.send("Hola Mundo");
});

app.post("/user", (req, res) => {
  res.send({ respuesta: "Hola desde POST!" });
  console.log(req.headers);
  console.log(req.body);
});

app.delete("/user/:id", (req, res) => {
  res.send(`La cuenta ${req.params.id} ha sido eliminada.`);
  console.log(`Usuario ${req.params.id} borrado satisfactoriamente`);
});

app.listen(app.get("port"), () => {
  console.log(app.get("appName"));
  console.log("Servidor funcionando en puerto", app.get("port"));
});

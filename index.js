import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("Hola Mundo");
})

app.listen(5000);

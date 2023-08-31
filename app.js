import express from "express";

const PORT = 8000;

const app = express();

const usuario = {
  "id": "6197f7d7c1b2af0dccecdca2",
  "name": "Juan",
  "lastname":"Perez"
};

app.use(express.json());

app.get('/users', (req, res) => {
  res.json(usuario)
});

app.post('/users', (req, res) => {
  const { body } = req;

  res.status(201).json({ 
    "message": "Usuario creado",
    "userInfo": body
  })
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
});
import express from "express";
const app = express();
const PORT = 3000;
app.get("/", (request, response) => {
  response.send("Olá Mundo");
});
app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}`);
});

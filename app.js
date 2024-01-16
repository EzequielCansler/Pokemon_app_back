import { findAvailablePort } from "./portUtils"; // Ajusta la ruta según tu estructura de archivos
import express from "express";
import { corsMiddleware } from "./cors";

const app = express();

app.use(corsMiddleware);
// Define una función asíncrona para iniciar el servidor en el puerto disponible
async function startServer() {
  const desiredPort = process.env.PORT || 3000;
  const availablePort = await findAvailablePort(desiredPort);

  app.listen(availablePort, () => {
    console.log(`App listening on port ${availablePort}`);
  });
}

// Resto de tu configuración de Express
app.use(express.static("public"));

app.get("*", (req, res) => {
  res.redirect("/");
});

// Llama a la función para iniciar el servidor
startServer();

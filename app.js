import express, { static as expressStatic } from "express";
import { userRouter } from "./routes/users.js";
import { teamRouter } from "./routes/team.js";
import { pokemonRouter } from "./routes/pokemon.js";

/* import { corsMiddleware } from "../middlewares/cors";  TODO*/
import findAvailablePort from "./portUtils.js"; // importa la función findAvailablePort

const app = express();

app.use(expressStatic("public"));
app.use(express.json());
/* app.use(corsMiddleware()); */
app.disable("x-powered-by");

app.use("/users", userRouter);
app.use("/team", teamRouter);
app.use("/pokemon", pokemonRouter);

app.get("*", (req, res) => {
  res.redirect("/");
});

findAvailablePort(3000) // encuentra un puerto disponible y lo pasa a la función then()
  .then((port) => {
    console.log(`App listening on port ${port}`);
    app.listen(port);
  })
  .catch((err) => {
    console.error("Error al encontrar un puerto disponible:", err);
    process.exit(1);
  });

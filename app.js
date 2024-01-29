import express, { static as expressStatic } from "express";
import { userRouter } from "./routes/users.js";
/* import { corsMiddleware } from "../middlewares/cors"; */
const app = express();
const port = process.env.PORT ?? 3000;

app.use(expressStatic("public"));
app.use(express.json());
/* app.use(corsMiddleware()); */
app.disable("x-powered-by");

app.use("/users", userRouter);

app.get("*", (req, res) => {
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

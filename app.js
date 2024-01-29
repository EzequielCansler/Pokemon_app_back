import express, { static as expressStatic } from "express";
const app = express();
const port = process.env.PORT ?? 3000;

app.use(expressStatic("public"));
app.use(express.json());

app.get("*", (req, res) => {
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

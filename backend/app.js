import express from "express";
// -----
// -----
import { nanoid } from "nanoid";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import connectMongo from "./src/config/mongo.config.js";
import { redirect_from_short_URL } from "./src/controllers/shortURL.controller.js";
import shortURLRoute from "./src/routes/shortURL.route.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/create", shortURLRoute);
app.get("/about", (req, res) => {
  res.send("About Page");
});
app.get("/:id",redirect_from_short_URL);

app.get("/", (req, res) => {
  res.send("for NANO-ID check out the /api/create endpoint");
});

const start = async () => {
  await connectMongo();
  app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  });
};
start();

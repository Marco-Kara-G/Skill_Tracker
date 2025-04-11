import express from "express";
import dotenv from "dotenv";

import { registerUser } from "./controllers/user-controllers.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Skill Tracker API is running...");
});

app.post("/register", registerUser);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

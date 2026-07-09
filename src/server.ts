import express from "express";
import dotenv from "dotenv";
import connection from "./db/connection.js";
import router from "./routes/notes.router.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: process.env.FRONTURI,
    credentials: true,
  })
);

app.use(express.json());

app.use("/api", router);

connection()
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.error(error);
  });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

// Middlewares
import cors from "cors";
app.use(express.json());
app.use(cors()); // configure and connect to frontend

// Routes
import exampleRouter from "./routes/example.router.js";
app.use("/", exampleRouter);

app.listen(PORT, () => {
  console.log(`Your server is listening on port ${PORT}`);
});

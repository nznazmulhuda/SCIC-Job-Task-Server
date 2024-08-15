import express from "express";
import cors from "cors";

const app = express();

// basic middlewares
app.use(express.json());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    Credential: true,
  })
);

// routes


export { app };

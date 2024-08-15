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

// import routes
import dataRoute from "./routes/data.routes.js";
import categoryRoute from "./routes/category.routes.js";

// routes
app.use("/api/v1/data", dataRoute);
app.use("/api/v1/category", categoryRoute);

export { app };

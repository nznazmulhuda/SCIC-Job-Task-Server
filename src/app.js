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
import userRoute from "./routes/user.routes.js";

// routes
app.use("/api/v1/data", userRoute);

export { app };

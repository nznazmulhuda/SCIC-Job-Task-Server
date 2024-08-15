import { connectDB } from "./db/dbConnection.js";
import { app } from "./app.js";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from.env file

const port = process.env.PORT || 5000; // Port number is set to 3000 by default

connectDB();
app.listen(port, () => console.log("Server listening on port: " + port));

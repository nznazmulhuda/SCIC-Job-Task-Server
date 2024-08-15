import connectDB from "./db/dbConnection.js";
import { app } from "./app.js";

const port = process.env.PORT || 5000; // Port number is set to 3000 by default

connectDB();
app.listen(port, () => console.log("Server listening on port: " + port));

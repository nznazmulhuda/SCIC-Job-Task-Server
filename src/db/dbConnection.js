import { client } from "../constants.js";

function connectDB() {
  async function run() {
    try {
      await client.connect();

      console.log("Database connection established!");
    } catch (err) {
      console.error("Failed to connect to MongoDB: ", err);
    }
  }
  run().catch(console.dir);
}

export { connectDB, client };

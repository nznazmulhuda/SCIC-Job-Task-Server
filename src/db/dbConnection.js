import { client } from "../constants.js";

async function connectDB() {
  async function run() {
    try {
      await client.connect();
    } catch (err) {
      console.error("Failed to connect to MongoDB: ", err);
    }
  }
  run().catch(console.dir);
}

export { connectDB, client };

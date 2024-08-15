import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectDB() {
  async function run() {
    try {
      await client.connect();

      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });

      console.log(
        "Pinged your deployment. You successfully connected to MongoDB!"
      );
    } catch (err) {
      console.error("Failed to connect to MongoDB: ", err);
    }
  }
  run().catch(console.dir);
}
export { connectDB, client };

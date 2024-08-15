import { MongoClient, ServerApiVersion } from "mongodb";

export const uri = process.env.URI; // mongodb uri

// create a new client
export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: false,
    deprecationErrors: true,
  },
});

export const dataCollection = client
  .db(process.env.DB_NAME)
  .collection("products");

export const limit = 9; // default limit of products

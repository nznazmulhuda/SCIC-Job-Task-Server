import { MongoClient, ServerApiVersion } from "mongodb";

const dbName = process.env.DB_NAME;

const uri = process.env.URI; // mongodb uri

export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: false,
    deprecationErrors: true,
  },
});

export const dataCollection = client.db(dbName).collection("products");

export const limit = 9; // default limit of products

import { client } from "./db/dbConnection.js";

export const dataCollection = client.db(process.env.DB_NAME).collection("products");

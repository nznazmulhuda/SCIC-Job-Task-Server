import { client } from "../db/dbConnection.js";

export const getAllData = async (req, res) => {
  const data = client.db(process.env.DB_NAME).collection("products");

  const products = await data.find({}).toArray();

  res.send(products);
};

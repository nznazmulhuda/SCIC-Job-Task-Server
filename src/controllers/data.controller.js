import { ObjectId } from "mongodb";
import { dataCollection } from "../constants.js";

export const getAllData = async (req, res) => {
  const products = await dataCollection.find({}).toArray();

  res.send(products);
};

export const singleProduct = async (req, res) => {
  const product = await dataCollection.findOne({
    _id: new ObjectId(req.query.id),
  });
  res.send(product);
};

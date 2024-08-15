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

export const paginations = async (req, res) => {
  let { page = 1, limit = 10 } = req.query; // get page number and limit from query

  page = Number(page); // convert page number to number
  limit = Number(limit); // convert limit number to number

  const startIndex = (page - 1) * limit; // get start index
  const products = await dataCollection
    .find()
    .skip(startIndex)
    .limit(limit)
    .toArray();

  res.send(products);
};


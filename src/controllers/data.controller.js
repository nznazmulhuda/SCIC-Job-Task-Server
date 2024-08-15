import { ObjectId } from "mongodb";
import { dataCollection, limit } from "../constants.js";

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
  let { page = 1 } = req.query; // get page number and limit from query

  page = Number(page); // convert page number to number

  const startIndex = (page - 1) * limit; // get start index
  const products = await dataCollection
    .find()
    .skip(startIndex)
    .limit(limit)
    .toArray();

  res.send(products);
};

export const priceRange = async (req, res) => {
  const datas = await dataCollection.find({}).toArray();
  const minPrice = Math.min(...datas.map((data) => data.price));
  const maxPrice = Math.max(...datas.map((data) => data.price));

  res.send({ minPrice, maxPrice });
};

export const sort = async (req, res) => {
  /**
   * lth --> Low To High
   * htl --> High To Low
   */
  const { sortBy } = req.query; // get sort field from query
  if (!sortBy) {
    const data = await dataCollection.find({}).toArray();
    return res.send(data);
  } else if (sortBy === "lth") {
    const products = await dataCollection.find({}).sort({ price: 1 }).toArray();
    return res.send(products);
  } else {
    const products = await dataCollection
      .find({})
      .sort({ price: -1 })
      .toArray();
    return res.send(products);
  }
};

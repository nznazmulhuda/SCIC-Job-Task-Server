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
  const agg = [
    {
      $group: {
        _id: null,
        maxPrice: {
          $max: "$price",
        },
        minPrice: {
          $min: "$price",
        },
      },
    },
  ];

  const result = await dataCollection.aggregate(agg).toArray();
  const { maxPrice, minPrice } = result[0]; // get max and min price from result
  res.send({ maxPrice, minPrice });
};

export const sort = async (req, res) => {
  /**
   * lth --> Low To High
   * htl --> High To Low
   */
  const { sortBy } = req.query; // get sort field from query
  const agg = [
    {
      $sort: {
        price: sortBy === "lth" ? 1 : sortBy === "htl" && -1,
      },
    },
  ];

  const products = await dataCollection.aggregate(agg).toArray();
  res.send(products);
};

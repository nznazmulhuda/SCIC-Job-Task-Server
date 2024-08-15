import { dataCollection } from "../constants.js";

export const getAllCategory = async (req, res) => {
  const results = await dataCollection.find({}).toArray();
  let categories = [];

  results.map(
    (cate) =>
      !categories.includes(cate.category.toLowerCase()) &&
      categories.push(cate.category.toLowerCase())
  );

  res.send(categories);
};

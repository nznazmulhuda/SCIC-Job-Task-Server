import { dataCollection } from "../constants.js";

export const getAllCategory = async (req, res) => {
  const results = await dataCollection.find({}).toArray();
  let categories = [];

  results.map(
    (cate) =>
      !categories.includes(cate.category) && categories.push(cate.category)
  );

  res.send(categories);
};

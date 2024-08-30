import { dataCollection } from "../../constants.js";

export const getAllCategory = async (req, res) => {
  const agg = [
    {
      $group: { _id: "$category" },
    },
  ];
  const categories = await dataCollection.aggregate(agg).toArray();

  res.send(categories);
};

import { dataCollection } from "../constants.js";

export const onlyCategory = async (category) => {
  const agg = [
    {
      $match: {
        category: category,
      },
    },
  ];
  const result = await dataCollection.aggregate(agg).toArray();
  return result;
};

import { dataCollection } from "../constants.js";

export const onlyQuery = async (query) => {
  console.log({ query });

  const agg = [
    {
      $search: {
        index: "SCIC_search",
        text: {
          query: `${query}`,
          path: ["productName", "category"],
          fuzzy: {},
        },
      },
    },
  ];
  const cursor = dataCollection.aggregate(agg);
  const results = await cursor.toArray();
  return results;
};

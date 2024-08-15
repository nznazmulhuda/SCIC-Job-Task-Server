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

export const onlySort = async (sort) => {
  const agg = [
    {
      $sort: {
        price: sort === "lth" ? 1 : sort === "htl" && -1,
      },
    },
  ];

  const result = await dataCollection.aggregate(agg).toArray();
  return result;
};

export const onlyPriceRange = async ({ minPrice, maxPrice }) => {
  const agg = [
    {
      $match: {
        price: {
          $gte: 50,
          $lte: 100,
        },
      },
    },
  ];

  const result = await dataCollection.aggregate(agg).toArray();
  return result;
};

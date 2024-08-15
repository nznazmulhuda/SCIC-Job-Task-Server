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

export const onlyPriceRange = async (minPrice, maxPrice) => {
  const agg = [
    {
      $match: {
        price: {
          $gte: minPrice * 1,
          $lte: maxPrice * 1,
        },
      },
    },
  ];

  const result = await dataCollection.aggregate(agg).toArray();
  return result;
};

export const queryAndCategory = async (query, category) => {
  const agg = [
    {
      $search: {
        index: "SCIC_search",
        text: {
          query: `${query}`,
          path: "productName",
          fuzzy: {},
        },
      },
    },
    {
      $match: {
        category: `${category}`,
      },
    },
  ];

  const results = await dataCollection.aggregate(agg).toArray();
  return results;
};

export const queryAndSort = async (query, sort) => {
  const agg = [
    {
      $search: {
        index: "SCIC_search",
        text: {
          query: `${query}`,
          path: "productName",
          fuzzy: {},
        },
      },
    },
    {
      $sort: {
        price: sort === "lth" ? 1 : sort === "htl" && -1,
      },
    },
  ];

  const results = await dataCollection.aggregate(agg).toArray();
  return results;
};

export const queryAndPriceRange = async (query, minPrice, maxPrice) => {
  const agg = [
    {
      $search: {
        index: "SCIC_search",
        text: {
          query: `${query}`,
          path: "productName",
          fuzzy: {},
        },
      },
    },
    {
      $match: {
        price: {
          $gte: minPrice * 1,
          $lte: maxPrice * 1,
        },
      },
    },
  ];

  const results = await dataCollection.aggregate(agg).toArray();
  return results;
};

export const categoryAndSort = async (category, sort) => {
  const agg = [
    {
      $match: {
        category: `${category}`,
      },
    },
    {
      $sort: {
        price: sort === "lth" ? 1 : sort === "htl" && -1,
      },
    },
  ];

  const results = await dataCollection.aggregate(agg).toArray();
  return results;
};

export const categoryAndPriceRange = async (category, minPrice, maxPrice) => {
  const agg = [
    {
      $match: {
        category: `${category}`,
      },
    },
    {
      $match: {
        price: {
          $gte: minPrice * 1,
          $lte: maxPrice * 1,
        },
      },
    },
  ];

  const results = await dataCollection.aggregate(agg).toArray();
  return results;
};

export const queryCategoryAndSort = async (query, category, sort) => {
  const agg = [
    {
      $search: {
        index: "SCIC_search",
        text: {
          query: `${query}`,
          path: "productName",
          fuzzy: {},
        },
      },
    },
    {
      $match: {
        category: `${category}`,
      },
    },
    {
      $sort: {
        price: sort === "lth" ? 1 : sort === "htl" && -1,
      },
    },
  ];

  const results = await dataCollection.aggregate(agg).toArray();
  return results;
};

export const queryCategoryAndPriceRange = async (
  query,
  category,
  minPrice,
  maxPrice
) => {
  const agg = [
    {
      $search: {
        index: "SCIC_search",
        text: {
          query: `${query}`,
          path: "productName",
          fuzzy: {},
        },
      },
    },
    {
      $match: {
        category: `${category}`,
      },
    },
    {
      $match: {
        price: {
          $gte: minPrice * 1,
          $lte: maxPrice * 1,
        },
      },
    },
  ];

  const results = await dataCollection.aggregate(agg).toArray();
  return results;
};

export const categorySortAndPriceRange = async (
  category,
  sort,
  minPrice,
  maxPrice
) => {
  const agg = [
    {
      $match: {
        category: `${category}`,
      },
    },
    {
      $sort: {
        price: sort === "lth" ? 1 : sort === "htl" && -1,
      },
    },
    {
      $match: {
        price: {
          $gte: minPrice * 1,
          $lte: maxPrice * 1,
        },
      },
    },
  ];

  const results = await dataCollection.aggregate(agg).toArray();
  return results;
};

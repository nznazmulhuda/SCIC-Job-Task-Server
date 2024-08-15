import { dataCollection, limit } from "../constants.js";

export const noFilter = async (page) => {
  let pageNum = Number(page);
  const startIndex = (pageNum - 1) * limit; // get start index

  const allProducts = await dataCollection
    .find({})
    .skip(startIndex)
    .limit(limit)
    .toArray();

  return allProducts;
};

export const onlyCategory = async (category, page) => {
  let pageNum = Number(page);
  const startIndex = (pageNum - 1) * limit; // get start index

  const agg = [
    {
      $match: {
        category: category,
      },
    },
  ];
  const result = await dataCollection
    .aggregate(agg)
    .skip(startIndex)
    .limit(limit)
    .toArray();
  return result;
};

export const onlyQuery = async (query, page) => {
  let pageNum = Number(page);
  const startIndex = (pageNum - 1) * limit; // get start index
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
  const results = dataCollection
    .aggregate(agg)
    .skip(startIndex)
    .limit(limit)
    .toArray();
  return results;
};

export const onlySort = async (sort, page) => {
  let pageNum = Number(page);
  const startIndex = (pageNum - 1) * limit; // get start index
  const agg = [
    {
      $sort: {
        price: sort === "lth" ? 1 : sort === "htl" && -1,
      },
    },
  ];

  const result = await dataCollection
    .aggregate(agg)
    .skip(startIndex)
    .limit(limit)
    .toArray();
  return result;
};

export const onlyPriceRange = async (minPrice, maxPrice, page) => {
  let pageNum = Number(page);
  const startIndex = (pageNum - 1) * limit; // get start index
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

  const result = await dataCollection
    .aggregate(agg)
    .skip(startIndex)
    .limit(limit)
    .toArray();
  return result;
};

export const queryAndCategory = async (query, category, page) => {
  let pageNum = Number(page);
  const startIndex = (pageNum - 1) * limit; // get start index
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

  const results = await dataCollection
    .aggregate(agg)
    .skip(startIndex)
    .limit(limit)
    .toArray();
  return results;
};

export const queryAndSort = async (query, sort, page) => {
  let pageNum = Number(page);
  const startIndex = (pageNum - 1) * limit; // get start index
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

  const results = await dataCollection
    .aggregate(agg)
    .skip(startIndex)
    .limit(limit)
    .toArray();
  return results;
};

export const queryAndPriceRange = async (query, minPrice, maxPrice, page) => {
  let pageNum = Number(page);
  const startIndex = (pageNum - 1) * limit; // get start index
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

  const results = await dataCollection
    .aggregate(agg)
    .skip(startIndex)
    .limit(limit)
    .toArray();
  return results;
};

export const categoryAndSort = async (category, sort, page) => {
  let pageNum = Number(page);
  const startIndex = (pageNum - 1) * limit; // get start index
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

  const results = await dataCollection
    .aggregate(agg)
    .skip(startIndex)
    .limit(limit)
    .toArray();
  return results;
};

export const categoryAndPriceRange = async (
  category,
  minPrice,
  maxPrice,
  page
) => {
  let pageNum = Number(page);
  const startIndex = (pageNum - 1) * limit; // get start index
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

  const results = await dataCollection
    .aggregate(agg)
    .skip(startIndex)
    .limit(limit)
    .toArray();
  return results;
};

export const sortAndPriceRange = async (sort, minPrice, maxPrice, page) => {
  let pageNum = Number(page);
  const startIndex = (pageNum - 1) * limit; // get start index
  const agg = [
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

  const results = await dataCollection
    .aggregate(agg)
    .skip(startIndex)
    .limit(limit)
    .toArray();
  return results;
};

export const queryCategoryAndSort = async (query, category, sort, page) => {
  let pageNum = Number(page);
  const startIndex = (pageNum - 1) * limit; // get start index
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

  const results = await dataCollection
    .aggregate(agg)
    .skip(startIndex)
    .limit(limit)
    .toArray();
  return results;
};

export const queryCategoryAndPriceRange = async (
  query,
  category,
  minPrice,
  maxPrice,
  page
) => {
  let pageNum = Number(page);
  const startIndex = (pageNum - 1) * limit; // get start index
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

  const results = await dataCollection
    .aggregate(agg)
    .skip(startIndex)
    .limit(limit)
    .toArray();
  return results;
};

export const querySortAndPriceRange = async (
  query,
  sortBy,
  minPrice,
  maxPrice,
  page
) => {
  let pageNum = Number(page);
  const startIndex = (pageNum - 1) * limit; // get start index
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
        price: sortBy === "lth" ? 1 : sortBy === "htl" && -1,
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

  const results = await dataCollection
    .aggregate(agg)
    .skip(startIndex)
    .limit(limit)
    .toArray();
  return results;
};

export const categorySortAndPriceRange = async (
  category,
  sort,
  minPrice,
  maxPrice,
  page
) => {
  let pageNum = Number(page);
  const startIndex = (pageNum - 1) * limit; // get start index
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

  const results = await dataCollection
    .aggregate(agg)
    .skip(startIndex)
    .limit(limit)
    .toArray();
  return results;
};

export const applyAllTheFilter = async (
  query,
  category,
  sort,
  minPrice,
  maxPrice,
  page
) => {
  let pageNum = Number(page);
  const startIndex = (pageNum - 1) * limit; // get start index
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
    {
      $match: {
        price: {
          $gte: minPrice * 1,
          $lte: maxPrice * 1,
        },
      },
    },
  ];

  const results = await dataCollection
    .aggregate(agg)
    .skip(startIndex)
    .limit(limit)
    .toArray();
  return results;
};

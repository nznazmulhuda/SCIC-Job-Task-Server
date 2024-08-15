import { dataCollection, limit } from "../constants.js";
import {
  onlyCategory,
  onlyPriceRange,
  onlyQuery,
  onlySort,
  queryAndCategory,
  queryAndPriceRange,
  queryAndSort,
  categoryAndSort,
  categoryAndPriceRange,
  queryCategoryAndSort,
  queryCategoryAndPriceRange,
  categorySortAndPriceRange,
} from "../utils/filteredData.js";

/**
 * TODO: Conditions
 * if no query done
 * if only query done
 * if only category done
 * if only sortBy done
 * if only price range done
 * if query and category done
 * if query and sortBy done
 * if query and price range done
 * if category and sortBy done
 * if category and price range done
 * if query and category and sortBy done
 * if query and category and price range done
 * if category and sortBy and price range
 * if query and category and price range and sortBy
 */

export const allProducts = async (req, res) => {
  const { query, category, sortBy, minPrice, maxPrice, page } = req.query;

  // conditions
  if (!query && !category && !sortBy && !minPrice && !maxPrice) {
    let pageNum = Number(page);
    const startIndex = (pageNum - 1) * limit; // get start index

    const allProducts = await dataCollection
      .find({})
      .skip(startIndex)
      .limit(limit)
      .toArray();
    return res.send(allProducts);
  } else if (query && !category && !sortBy && !minPrice && !maxPrice) {
    return res.send(await onlyQuery(query));
  } else if (!query && category && !sortBy && !minPrice && !maxPrice) {
    return res.send(await onlyCategory(category));
  } else if (!query && !category && sortBy && !minPrice && !maxPrice) {
    return res.send(await onlySort(sortBy));
  } else if (!query && !category && !sortBy && minPrice && maxPrice) {
    return res.send(await onlyPriceRange(minPrice, maxPrice));
  } else if (query && category && !sortBy && !minPrice && !maxPrice) {
    return res.send(await queryAndCategory(query, category));
  } else if (query && !category && sortBy && !minPrice && !maxPrice) {
    return res.send(await queryAndSort(query, sortBy));
  } else if (query && !category && !sortBy && minPrice && maxPrice) {
    return res.send(await queryAndPriceRange(query, minPrice, maxPrice));
  } else if (!query && category && sortBy && !minPrice && !maxPrice) {
    return res.send(await categoryAndSort(category, sortBy));
  } else if (!query && category && !sortBy && minPrice && maxPrice) {
    return res.send(await categoryAndPriceRange(category, minPrice, maxPrice));
  } else if (query && category && sortBy && !minPrice && !maxPrice) {
    return res.send(await queryCategoryAndSort(query, category, sortBy));
  } else if (query && category && !sortBy && minPrice && maxPrice) {
    return res.send(
      await queryCategoryAndPriceRange(query, category, minPrice, maxPrice)
    );
  } else if (!query && category && sortBy && minPrice && maxPrice) {
    return res.send(
      await categorySortAndPriceRange(category, sortBy, minPrice, maxPrice)
    );
  }
};

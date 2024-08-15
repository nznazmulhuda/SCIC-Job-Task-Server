import {
  noFilter,
  onlyCategory,
  onlyPriceRange,
  onlyQuery,
  onlySort,
  queryAndCategory,
  queryAndPriceRange,
  queryAndSort,
  categoryAndSort,
  categoryAndPriceRange,
  sortAndPriceRange,
  queryCategoryAndSort,
  queryCategoryAndPriceRange,
  querySortAndPriceRange,
  categorySortAndPriceRange,
  applyAllTheFilter,
} from "../utils/filteredData.js";

/**
 * Conditions
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
 * if sortBy and price range done
 * if query and category and sortBy done
 * if query and category and price range done
 * if query and sortBy and pricerange done
 * if category and sortBy and price range done
 * if query and category and price range and sortBy done
 */

export const allProducts = async (req, res) => {
  const { query, category, sortBy, minPrice, maxPrice, page } = req.query;

  // conditions
  if (!query && !category && !sortBy && !minPrice && !maxPrice) {
    // without any filter
    return res.send(await noFilter(page));
  } else if (query && !category && !sortBy && !minPrice && !maxPrice) {
    // only query filter
    return res.send(await onlyQuery(query, page));
  } else if (!query && category && !sortBy && !minPrice && !maxPrice) {
    // only category filter
    return res.send(await onlyCategory(category, page));
  } else if (!query && !category && sortBy && !minPrice && !maxPrice) {
    // only sort filter
    return res.send(await onlySort(sortBy, page));
  } else if (!query && !category && !sortBy && minPrice && maxPrice) {
    // only price range filter
    return res.send(await onlyPriceRange(minPrice, maxPrice, page));
  } else if (query && category && !sortBy && !minPrice && !maxPrice) {
    // query and category filter
    return res.send(await queryAndCategory(query, category, page));
  } else if (query && !category && sortBy && !minPrice && !maxPrice) {
    // query and sort filter
    return res.send(await queryAndSort(query, sortBy, page));
  } else if (query && !category && !sortBy && minPrice && maxPrice) {
    // query and price range filter
    return res.send(await queryAndPriceRange(query, minPrice, maxPrice, page));
  } else if (!query && category && sortBy && !minPrice && !maxPrice) {
    // category and sort filter
    return res.send(await categoryAndSort(category, sortBy, page));
  } else if (!query && category && !sortBy && minPrice && maxPrice) {
    // category and price range filter
    return res.send(
      await categoryAndPriceRange(category, minPrice, maxPrice, page)
    );
  } else if (!query && !category && sortBy && minPrice && maxPrice) {
    // sort and price range filter
    return res.send(await sortAndPriceRange(sortBy, minPrice, maxPrice, page));
  } else if (query && category && sortBy && !minPrice && !maxPrice) {
    // query and category and sort filter
    return res.send(await queryCategoryAndSort(query, category, sortBy, page));
  } else if (query && category && !sortBy && minPrice && maxPrice) {
    // query and category and price range filter
    return res.send(
      await queryCategoryAndPriceRange(
        query,
        category,
        minPrice,
        maxPrice,
        page
      )
    );
  } else if (query && !category && sortBy && minPrice && maxPrice) {
    // query and sort and price range filter
    return res.send(
      await querySortAndPriceRange(query, sortBy, minPrice, maxPrice, page)
    );
  } else if (!query && category && sortBy && minPrice && maxPrice) {
    // category and sort and price range filter
    return res.send(
      await categorySortAndPriceRange(
        category,
        sortBy,
        minPrice,
        maxPrice,
        page
      )
    );
  } else if (query && category && sortBy && minPrice && maxPrice) {
    // query and category and sort and price range filter
    return res.send(
      await applyAllTheFilter(query, category, sortBy, minPrice, maxPrice, page)
    );
  }
};

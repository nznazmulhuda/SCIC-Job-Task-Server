import { Router } from "express";
import {
  getAllData,
  paginations,
  priceRange,
  singleProduct,
} from "../controllers/data.controller.js";

const router = Router();

// Define the routes
router.route("/get_all_products").get(getAllData); // get all products
router.route("/product").get(singleProduct); // get single product
router.route("/paginations").get(paginations); // get paginations data
router.route("/price_range").get(priceRange); // get maximum and minimum price

export default router;

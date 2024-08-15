import { Router } from "express";
import {
  getAllData,
  paginations,
  singleProduct,
} from "../controllers/data.controller.js";

const router = Router();

// Define the routes
router.route("/get_all_products").get(getAllData); // get all products
router.route("/product").get(singleProduct); // get single product
router.route("/paginations").get(paginations); // get paginations data

export default router;

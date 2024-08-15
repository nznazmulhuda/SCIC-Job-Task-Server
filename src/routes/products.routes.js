import { Router } from "express";
import { allProducts } from "../controllers/products.controller.js";

const router = Router();

router.route("/all_products").get(allProducts);

export default router;

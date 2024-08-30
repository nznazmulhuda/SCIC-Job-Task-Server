import { Router } from "express";
import { getAllCategory } from "../controllers/products/category.controller.js";

const router = Router();

router.route("/get_all_category_name").get(getAllCategory);

export default router;

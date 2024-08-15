import { Router } from "express";
import { getAllData, singleProduct } from "../controllers/data.controller.js";

const router = Router();

// Define the routes
router.route("/get-all-data").get(getAllData);
router.route("/product").get(singleProduct);

export default router;

import { Router } from "express";
import { getAllData } from "../controllers/data.controller.js";

const router = Router();

// Define the routes
router.route("/get-all-data").get(getAllData);

export default router;

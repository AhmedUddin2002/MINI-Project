import express from "express";
import {
//   getProducts,
//   getCustomers,
//   getTransactions,
//   getGeography,
    // getBranch,
    getDs,
    getIt,
} from "../controllers/branch.js";
// import { getBranch } from "../controllers/general.js";

const router = express.Router();

// router.get("/CSE_DS", getBranch);
router.get("/CSE_DS", getDs);
router.get("/IT", getIt);
// router.get("/customers", getCustomers);
// router.get("/transactions", getTransactions);
// router.get("/geography", getGeography);

export default router;
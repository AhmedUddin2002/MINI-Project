import express from "express";
import {
//   getProducts,
//   getCustomers,
//   getTransactions,
//   getGeography,
    getBranch,
} from "../controllers/branch.js";
// import { getBranch } from "../controllers/general.js";

const router = express.Router();

router.get("/CSE_DS", getBranch);
// router.get("/customers", getCustomers);
// router.get("/transactions", getTransactions);
// router.get("/geography", getGeography);

export default router;
import express from "express";
import {
//   getProducts,
//   getCustomers,
//   getTransactions,
//   getGeography,
    // getBranch,
    getDs,
    getIt,
    getCse,
    getAiml,
    getIot,
    getMech,
    getCivil,
} from "../controllers/branch.js";
// import { getBranch } from "../controllers/general.js";

const router = express.Router();

// router.get("/CSE_DS", getBranch);
router.get("/CSE_DS", getDs);
router.get("/IT", getIt);
router.get("/CSE", getCse);
router.get("/CSE_AIML", getAiml);
router.get("/CSE_IOT", getIot);
router.get("/CIVIL", getCivil);
router.get("/MECH", getMech);
// router.get("/customers", getCustomers);
// router.get("/transactions", getTransactions);
// router.get("/geography", getGeography);

export default router;
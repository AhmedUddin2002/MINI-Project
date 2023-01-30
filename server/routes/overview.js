// import express from "express";
// import {getOverviews} from "../controllers/overview.js";

// const router = express.Router();

// router.get("/overviews", getOverviews);

// export default router;

import express from "express";
import { getOverviews } from "../controllers/overview.js";

const router = express.Router();

router.get("/overviews", getOverviews);

export default router;
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import branchRoutes from "./routes/branch.js";
import generalRoutes from "./routes/general.js";
import overviewRoutes from "./routes/overview.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";

// data imports
import User from "./models/User.js";
import Branches from "./models/Branches.js";
import BranchesStat from "./models/BranchesStat.js";
import DsData from "./models/DsModel.js";
import ItData from "./models/ItModel.js";
import CseData from "./models/CseModel.js";
import AimlData from "./models/AimlModel.js";
import IotData from "./models/IotModel.js";
import MechData from "./models/MechModel.js";
import CivilData from "./models/CivilModel.js";
import OverviewData from "./models/OverviewModel.js";
import OverallStat from "./models/OverallStat.js";

// import Product from "./models/Product.js";
// import ProductStat from "./models/ProductStat.js";
// import Transaction from "./models/Transaction.js";
// import OverallStat from "./models/OverallStat.js";
// import AffiliateStat from "./models/AffiliateStat.js";



// Import the data
import {
  dataUser,
  // ClgBranch,
  // dataProduct,
  // dataProductStat,
  // dataTransaction,
  dataOverallStat,
  // dataAffiliateStat,
} from "./data/index.js";
import {dataBranch} from "./data/BranchesData.js"
import {dataBranchesStat} from "./data/BranchesStatData.js"
import {dataDs} from "./data/DsData.js"
import {dataIt} from "./data/ItData.js"
import {dataCse} from "./data/CseData.js"
import {dataAiml} from "./data/AimlData.js"
import {dataIot} from "./data/IotData.js"
import {dataCivil} from "./data/CivilData.js"
import {dataMech} from "./data/MechData.js"
import {dataOverview} from "./data/overviewData.js"


/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());



/* ROUTES */
app.use("/branch", branchRoutes);
app.use("/general", generalRoutes);
app.use("/overview", overviewRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);



/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ONLY ADD DATA ONE TIME */

    // AffiliateStat.insertMany(dataAffiliateStat);
    // OverallStat.insertMany(dataOverallStat);
    // Product.insertMany(dataProduct);
    // ProductStat.insertMany(dataProductStat);
    // Transaction.insertMany(dataTransaction);

    // User.insertMany(dataUser);
    // Branches.insertMany(dataBranch);
    // BranchesStat.insertMany(dataBranchesStat);
    // DsData.insertMany(dataDs);
    // ItData.insertMany(dataIt);
    // CseData.insertMany(dataCse);
    // AimlData.insertMany(dataAiml);
    // IotData.insertMany(dataIot);
    // CivilData.insertMany(dataCivil);
    // MechData.insertMany(dataMech);
    // OverviewData.insertMany(dataOverview);
    // OverallStat.insertMany(dataOverallStat);
  })
  .catch((error) => console.log(`${error} did not connect`))
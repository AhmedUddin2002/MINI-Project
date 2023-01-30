import Branches from "../models/Branches.js";
import BranchesStat from "../models/BranchesStat.js";
import DsModel from "../models/DsModel.js"
import ItModel from "../models/ItModel.js"
import CseModel from "../models/CseModel.js"
import AimlModel from "../models/AimlModel.js"
import IotModel from "../models/IotModel.js"
import CivilModel from "../models/CivilModel.js"
import MechModel from "../models/MechModel.js"
// import User from "../models/User.js";
// import Transaction from "../models/Transaction.js";
// import getCountryIso3 from "country-iso-2-to-3";

export const getBranch = async (req, res) => {
  try {
    const Branch = await Branches.find();

    const BranchWithStats = await Promise.all(
      Branch.map(async (Branches) => {
        const stat = await BranchesStat.find({
          BranchId: Branches._id,
        });
        return {
          ...Branches._doc,
          stat,
        };
      })
    );

    res.status(200).json(BranchWithStats);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getDs = async (req, res) => {
  try {
    const Ds = await DsModel.find();

    const BranchWithStats = await Promise.all(
      Ds.map(async (DsModel) => {
        const stat = await BranchesStat.find({
          DsId: DsModel._id,
        });
        return {
          ...DsModel._doc,
          stat,
        };
      })
    );

    res.status(200).json(BranchWithStats);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getIt = async (req, res) => {
  try {
    const It = await ItModel.find();

    const BranchWithStats = await Promise.all(
      It.map(async (ItModel) => {
        const stat = await BranchesStat.find({
          ItId: ItModel._id,
        });
        return {
          ...ItModel._doc,
          stat,
        };
      })
    );

    res.status(200).json(BranchWithStats);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getCse = async (req, res) => {
  try {
    const Cse = await CseModel.find();

    const BranchWithStats = await Promise.all(
      Cse.map(async (CseModel) => {
        const stat = await BranchesStat.find({
          ItId: CseModel._id,
        });
        return {
          ...CseModel._doc,
          stat,
        };
      })
    );

    res.status(200).json(BranchWithStats);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getAiml = async (req, res) => {
  try {
    const Aiml = await AimlModel.find();

    const BranchWithStats = await Promise.all(
      Aiml.map(async (AimlModel) => {
        const stat = await BranchesStat.find({
          AimlId: AimlModel._id,
        });
        return {
          ...AimlModel._doc,
          stat,
        };
      })
    );

    res.status(200).json(BranchWithStats);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getIot = async (req, res) => {
  try {
    const Iot = await IotModel.find();

    const BranchWithStats = await Promise.all(
      Iot.map(async (IotModel) => {
        const stat = await BranchesStat.find({
          IotId: IotModel._id,
        });
        return {
          ...IotModel._doc,
          stat,
        };
      })
    );

    res.status(200).json(BranchWithStats);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getCivil = async (req, res) => {
  try {
    const Civil = await CivilModel.find();

    const BranchWithStats = await Promise.all(
      Civil.map(async (CivilModel) => {
        const stat = await BranchesStat.find({
          CivilId: IotModel._id,
        });
        return {
          ...CivilModel._doc,
          stat,
        };
      })
    );

    res.status(200).json(BranchWithStats);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getMech = async (req, res) => {
  try {
    const Mech = await MechModel.find();

    const BranchWithStats = await Promise.all(
      Mech.map(async (MechModel) => {
        const stat = await BranchesStat.find({
          MechId: IotModel._id,
        });
        return {
          ...MechModel._doc,
          stat,
        };
      })
    );

    res.status(200).json(BranchWithStats);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// export const getCustomers = async (req, res) => {
//   try {
//     const customers = await User.find({ role: "user" }).select("-password");
//     res.status(200).json(customers);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

// export const getTransactions = async (req, res) => {
//   try {
//     // sort should look like this: { "field": "userId", "sort": "desc"}
//     const { page = 1, pageSize = 20, sort = null, search = "" } = req.query;

//     // formatted sort should look like { userId: -1 }
//     const generateSort = () => {
//       const sortParsed = JSON.parse(sort);
//       const sortFormatted = {
//         [sortParsed.field]: (sortParsed.sort = "asc" ? 1 : -1),
//       };

//       return sortFormatted;
//     };
//     const sortFormatted = Boolean(sort) ? generateSort() : {};

//     const transactions = await Transaction.find({
//       $or: [
//         { cost: { $regex: new RegExp(search, "i") } },
//         { userId: { $regex: new RegExp(search, "i") } },
//       ],
//     })
//       .sort(sortFormatted)
//       .skip(page * pageSize)
//       .limit(pageSize);

//     const total = await Transaction.countDocuments({
//       name: { $regex: search, $options: "i" },
//     });

//     res.status(200).json({
//       transactions,
//       total,
//     });
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

// export const getGeography = async (req, res) => {
//   try {
//     const users = await User.find();

//     const mappedLocations = users.reduce((acc, { country }) => {
//       const countryISO3 = getCountryIso3(country);
//       if (!acc[countryISO3]) {
//         acc[countryISO3] = 0;
//       }
//       acc[countryISO3]++;
//       return acc;
//     }, {});

//     const formattedLocations = Object.entries(mappedLocations).map(
//       ([country, count]) => {
//         return { id: country, value: count };
//       }
//     );

//     res.status(200).json(formattedLocations);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

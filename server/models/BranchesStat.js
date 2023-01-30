import mongoose from "mongoose";

const BranchesStatSchema = new mongoose.Schema(
  {
    BranchId: String,
    yearlyClassesTotal: Number,
    yearlyTotalConducted: Number,
    year: Number,
    monthlyData: [
      {
        month: String,
        totalClasses: Number,
        totalClassesConducted: Number,
      },
    ],
    dailyData: [
      {
        date: String,
        totalClasses: Number,
        totalClassesConducted: Number,
      },
    ],
  },
  { timestamps: true }
);
const BranchesStat = mongoose.model("BranchesStat", BranchesStatSchema);
export default BranchesStat;
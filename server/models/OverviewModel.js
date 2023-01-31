import mongoose from "mongoose";

const OverviewSchema = new mongoose.Schema(
  {
    totalStudents: Number,
    yearlyClassesTotal: Number,
    yearlyTotalClassesConducted: Number,
    year: Number,
    monthlyData: [
      {
        month: String,
        totalClasses: Number,
        totalConducted: Number,
      },
    ],
    dailyData: [
      {
        date: String,
        totalClasses: Number,
        totalConducted: Number,
      },
    ],
    classesByCategory: {
      type: Map,
      of: Number,
    },
  },
  { timestamps: true }
);

const Overview = mongoose.model("Overview", OverviewSchema);
export default Overview;
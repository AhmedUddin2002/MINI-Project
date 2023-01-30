import mongoose from "mongoose";

const CivilSchema = new mongoose.Schema(
  {
   BranchName:String,
   Year:Number,
   Section: String,
   TotalStrength:Number,
  },
  { timestamps: true }
);
const Civil = mongoose.model("CivilBranch", CivilSchema);
export default Civil;
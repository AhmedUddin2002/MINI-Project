import mongoose from "mongoose";

const BranchesSchema = new mongoose.Schema(
  {
   BranchName:String,
   Year:Number,
   Section: String,
   TotalStrength:Number,
  },
  { timestamps: true }
);
const Branches = mongoose.model("ClgBranches", BranchesSchema);
export default Branches;
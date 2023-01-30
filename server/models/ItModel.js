import mongoose from "mongoose";

const ItSchema = new mongoose.Schema(
  {
   BranchName:String,
   Year:Number,
   Section: String,
   TotalStrength:Number,
  },
  { timestamps: true }
);
const It = mongoose.model("ItBranch", ItSchema);
export default It;
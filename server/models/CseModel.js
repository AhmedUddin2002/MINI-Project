import mongoose from "mongoose";

const CseSchema = new mongoose.Schema(
  {
   BranchName:String,
   Year:Number,
   Section: String,
   TotalStrength:Number,
  },
  { timestamps: true }
);
const Cse = mongoose.model("CseBranch", CseSchema);
export default Cse;
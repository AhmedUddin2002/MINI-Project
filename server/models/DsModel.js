import mongoose from "mongoose";

const DsSchema = new mongoose.Schema(
  {
   BranchName:String,
   Year:Number,
   Section: String,
   TotalStrength:Number,
  },
  { timestamps: true }
);
const Ds = mongoose.model("DsBranch", DsSchema);
export default Ds;
import mongoose from "mongoose";

const MechSchema = new mongoose.Schema(
  {
   BranchName:String,
   Year:Number,
   Section: String,
   TotalStrength:Number,
  },
  { timestamps: true }
);
const Mech = mongoose.model("MechBranch", MechSchema);
export default Mech;
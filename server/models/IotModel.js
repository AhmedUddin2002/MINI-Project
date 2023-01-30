import mongoose from "mongoose";

const IotSchema = new mongoose.Schema(
  {
   BranchName:String,
   Year:Number,
   Section: String,
   TotalStrength:Number,
  },
  { timestamps: true }
);
const Iot = mongoose.model("IotBranch", IotSchema);
export default Iot;
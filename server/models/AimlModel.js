import mongoose from "mongoose";

const AimlSchema = new mongoose.Schema(
  {
   BranchName:String,
   Year:Number,
   Section: String,
   TotalStrength:Number,
  },
  { timestamps: true }
);
const Aiml = mongoose.model("AimlBranch", AimlSchema);
export default Aiml;
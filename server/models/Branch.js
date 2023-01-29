import mongoose from "mongoose";

const BranchSchema = new mongoose.Schema(
  {
    RollNumber: {
        type: Number,
        required: true,
        unique:true,
      },
    name: {
        type: String,
        required: true,
        min: 2,
        max: 100,
      },
      password: {
        type: String,
        required: true,
         min: 5,
      },
      role: {
        type: String,
        enum: ["student", "admin", "faculty"],
        default: "student",
      },
  },
);

const Branch = mongoose.model("Branch", BranchSchema);
export default Branch;
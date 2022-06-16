import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    default: "user",
  },
});

export default mongoose.model("userModel", userSchema);

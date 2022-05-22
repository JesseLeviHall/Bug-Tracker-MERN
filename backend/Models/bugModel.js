import mongoose from "mongoose";

const bugSchema = mongoose.Schema({
  name: String,
  detail: String,
  steps: String,
  version: String,
  priority: Number,
  assigned: String,
  creator: String,
  time: {
    type: Date,
    default: new Date(),
  },
});

const bugModel = mongoose.model("bugModel", bugSchema);

export default bugModel;

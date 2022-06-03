import mongoose from "mongoose";

const bugSchema = mongoose.Schema({
  name: String,
  details: String,
  steps: String,
  webpage: String,
  priority: Number,
  assigned: String,
  complete: { type: Boolean, default: false },
  time: {
    type: Date,
    default: new Date().toISOString(),
  },
});

const bugModel = mongoose.model("bugModel", bugSchema);

export default bugModel;

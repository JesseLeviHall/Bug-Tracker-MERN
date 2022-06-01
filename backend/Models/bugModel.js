import mongoose from "mongoose";

const bugSchema = mongoose.Schema({
  name: String,
  detail: String,
  steps: String,
  webpage: String,
  priority: Number,
  assigned: String,
  creator: String,
  complete: Boolean,
  time: {
    type: Date,
    default: new Date().toDateString("en-US"),
  },
});

const bugModel = mongoose.model("bugModel", bugSchema);

export default bugModel;

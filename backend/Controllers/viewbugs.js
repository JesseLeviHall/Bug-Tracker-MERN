import Bugs from "../Models/bugModel.js";

export const getBugs = async (req, res) => {
  try {
    const viewBugs = await Bugs.find();
    res.status(200).json(viewBugs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createBug = async (req, res) => {
  const bug = req.body;
  const newBug = new Bugs(bug);
  try {
    await newBug.save();
    res.status(201).json(newBug);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateBug = async (req, res) => {
  try {
    const thisBug = await Bugs.findByIdAndUpdate();
    res.status(200).json(thisBug);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteBug = async (req, res) => {
  const bug = req.body;
  try {
    await bug.delete();
    res.status(200).json(bug);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

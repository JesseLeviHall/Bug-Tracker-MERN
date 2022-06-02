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
  const { id } = req.params;
  const { name, details, steps, assigned, priority, webpage } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No bug with id: ${id}`);

  const updatedBug = {
    name,
    details,
    steps,
    assigned,
    priority,
    webpage,
    _id: id,
  };

  await Bugs.findByIdAndUpdate(id, updatedBug, { new: true });

  res.json(updatedBug);
};

export const deleteBug = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No bug with id: ${id}`);

  await Bugs.findByIdAndDelete(id);

  res.json({ message: "Post deleted successfully." });
};

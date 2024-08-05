
export const createTask = async (req, res) => {
  try {
    // const product = await Product.create(req.body);
    return res.status(201).json({task: "Eat fibre", id: 28});
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAllTasks = async (req, res) => {
  try {
    // const product = await Product.find({});
    return res.status(200).json({task: "Eat Fruits", id: 30});
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTasksById = async (req, res) => {
  try {
    // const { id = "" } = req.params;
    // const product = await Product.findById(id);
    return res.status(200).json({task: "Eat Veges", id: 31});
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    // const { id = "" } = req.params;
    // await Product.findByIdAndUpdate(id, req.body);
    // return res.status(204).send();
    return res.status(200).json({task: "Drink Milk", id: 31});
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    // const { id = "" } = req.params;
    // await Product.findByIdAndDelete(id);
    // return res.status(204).send();
    return res.status(200).json({message:"Tasks Deleted"})
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
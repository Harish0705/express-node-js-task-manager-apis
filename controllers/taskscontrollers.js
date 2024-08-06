import { Task } from "../model/tasksSchema.js";

export const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    return res.status(201).json({task});
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    return res.status(200).json({tasks});
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getSingleTask = async (req, res) => {
  try {
    const { id: tasksId = "" } = req.params;
    const task = await Task.findOne({_id:tasksId});
    return res.status(200).json({task});
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id :tasksId = "" } = req.params;
    await Task.findOneAndUpdate({_id:tasksId}, req.body, {
      new: true, // sends updated the task, if not set it will send the old task
      runValidators: true
    });
    // In general when we update, we will not send the data it will be 201 response without data
    return res.status(204).send()
    // return res.status(200).json({task});
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id :tasksId = "" } = req.params;
    await Task.findOneAndDelete({_id:tasksId});
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
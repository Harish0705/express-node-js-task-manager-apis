import { Task } from "../model/tasksSchema.js";
import { asyncFunctionWrapper } from "../middlewares/asyncFunctionWrapper.js";
import { createCustomError } from "../errors/custom-error.js";

export const createTask = asyncFunctionWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  return res.status(201).json({ task });
});

export const getAllTasks = asyncFunctionWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

export const getSingleTask = asyncFunctionWrapper(async (req, res, next) => {
  const { id: tasksId } = req.params;
  const task = await Task.findOne({ _id: tasksId });
  if (!task) {
    return next(
      createCustomError(`No task found for this id : ${tasksId}`, 404)
    );
  }
  res.status(200).json({ task });
});

export const updateTask = asyncFunctionWrapper(async (req, res, next) => {
  const { id: tasksId = "" } = req.params;
  const task = await Task.findOneAndUpdate({ _id: tasksId }, req.body, {
    new: true, // sends updated the task, if not set it will send the old task
    runValidators: true,
  });
  if (!task) {
    return next(
      createCustomError(`No task found for this id : ${tasksId}`, 404)
    );
  }
  return res.status(200).json({ task });
  // In general when we update, we will not send the data it will be 204 response without data
  // return res.status(204).send()
});

export const deleteTask = async (req, res, next) => {
  try {
    const { id: tasksId = "" } = req.params;
    await Task.findOneAndDelete({ _id: tasksId });
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

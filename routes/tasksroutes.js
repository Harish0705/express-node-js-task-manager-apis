import { Router } from "express";
import { getAllTasks, createTask, getTasksById, updateTask, deleteTask } from "../controllers/taskscontrollers.js";

const tasksRouter = Router();

tasksRouter.route("/").get(getAllTasks).post(createTask);
tasksRouter
  .route("/:id")
  .get(getTasksById)
  .patch(updateTask)
  .delete(deleteTask);

export default tasksRouter; 

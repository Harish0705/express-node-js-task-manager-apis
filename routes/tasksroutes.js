import { Router } from "express";
import { getAllTasks, createTask, getSingleTask, updateTask, deleteTask } from "../controllers/taskscontrollers.js";

const tasksRouter = Router();

tasksRouter.route("/").get(getAllTasks).post(createTask);
tasksRouter
  .route("/:id")
  .get(getSingleTask)
  .patch(updateTask)
  .delete(deleteTask);

export default tasksRouter; 

import mongoose from "mongoose";

const TaskSchema = mongoose.Schema({
  taskName: {
    type: String,
    required: [true, "Please add a task name"],
    trim: true, // to remove white space at the begining and end
    maxLength: [20, "Please enter 20 characters or less"],
    minLength: [2, "Please enter minimum 2 characters"],
  },
  isTaskCompleted: {
    type: Boolean,
    default: false,
  },
});

export const Task = mongoose.model("Task", TaskSchema);


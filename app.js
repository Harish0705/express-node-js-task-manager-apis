import express from "express";
import tasksRouter from "./routes/tasksroutes.js";
import { connectDB } from "./db/dbconnect.js";
import 'dotenv/config'

const app = express();

//middleware
app.use(express.json());

//routes
app.use('/api/v1/tasks', tasksRouter)

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("Database Connected");
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error.message);
  }
};

start();
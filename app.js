import express from "express";
import 'dotenv/config';
import tasksRouter from "./routes/tasksroutes.js";
import { connectDB } from "./db/dbconnect.js";
import { notFound } from "./middlewares/not-found.js";

const app = express();

//middleware
app.use(express.json());

//routes
app.use('/api/v1/tasks', tasksRouter)
app.use(notFound);

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
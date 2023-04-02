// imports
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./configs/Database.js";
import taskRouter from "./routes/tasksRoutes.js";
import authRouter from "./routes/usersRoutes.js";

dotenv.config();

// express app
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.static("uploads"));

// connect to Database
connectDB();

// auth routes
app.use("/api/auth/", authRouter);

// tasks routes
app.use("/api/task/", taskRouter);

// root route
app.get("/", async (req, res) => {
  res.send("server running");
});

// listening server to port
const port = 5000 || process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

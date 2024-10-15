// imports
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./configs/Database.js";
import profileRouter from "./routes/profileRoutes.js";
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

// routes
app.use("/api/auth/", authRouter);
app.use("/api/task/", taskRouter);
app.use("/api/profile/", profileRouter);

// root route
app.get("/", async (req, res) => {
    res.status(200).send("server running");
});

// listening server to port
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

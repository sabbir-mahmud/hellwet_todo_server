// imports

import taskModel from "../models/taskModels.js";

// get tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await taskModel.find({ email: req.query.email });
    return res.status(200).send(tasks);
  } catch (error) {
    return res.status(400).send(error);
  }
};

// get single task
const getTask = async (req, res) => {
  try {
    const task = await taskModel.findById(req.params.id);
    return res.status(200).send(task);
  } catch (error) {
    return res.status(400).send(error);
  }
};

// create tasks
const createTask = async (req, res) => {
  try {
    const task = new taskModel({
      email: req.body.email,
      title: req.body.title,
      description: req.body.description,
      dueDate: req.body.dueDate,
      status: req.body.status,
    });
    await task.validate();
    await task.save();
    return res.status(201).send(task);
  } catch (error) {
    return res.status(400).send(error);
  }
};

// update tasks
const updateTask = async (req, res) => {
  try {
    const task = await taskModel.findById(req.params.id);
    task.title = req.body.title;
    task.description = req.body.description;
    task.dueDate = req.body.dueDate;
    task.status = req.body.status;
    await task.save();
    return res.status(200).send(task);
  } catch (error) {
    return res.status(400).send(error);
  }
};

// delete tasks
const deleteTask = async (req, res) => {
  try {
    const task = await taskModel.findByIdAndDelete(req.params.id);
    return res.status(200).send(task);
  } catch (error) {
    return res.status(400).send(error);
  }
};

// exports
export { getTasks, getTask, createTask, updateTask, deleteTask };

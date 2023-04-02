// imports
import jwt from "jsonwebtoken";
import userModel from "../models/usersModels.js";

// login controller: Generate JWT Tokens
const login_controller = async (req, res) => {
  try {
    const email = req.body.email;
    if (!email) {
      return res.status(400).json({
        message: "nun fill errors! please check your email",
      });
    }
    const filter = { email: email };
    const user = { email };
    const options = { upsert: true };
    const updateDoc = {
      $set: user,
    };
    let data = await userModel.findOneAndUpdate(filter, updateDoc, options);
    if (!data) {
      data = await userModel.findOneAndUpdate(filter, updateDoc, options);
    }
    const accessToken = jwt.sign(
      { email: email },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "3d",
      }
    );
    return res.status(200).json({ data, accessToken });
  } catch (error) {
    return res.status(400).send(error);
  }
};

// exports
export { login_controller };

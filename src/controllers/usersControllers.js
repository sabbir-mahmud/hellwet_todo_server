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
        expiresIn: "1h",
      }
    );
    const refreshToken = jwt.sign(
      { email: email },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "30d",
      }
    );
    return res.status(200).json({ data, accessToken, refreshToken });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};

// refresh token
const refreshToken = async (req, res) => {
  try {
    const token = req.body.refreshToken;
    if (!token) {
      return res.status(401).send({ message: "Unauthorize Access" });
    }
    const { email } = jwt.verify(refreshToken, process.env.JWT_SECRET_KEY);

    const accessToken = jwt.sign({ email: email }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });
    const newRefreshToken = jwt.sign(
      { email: email },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "30d" }
    );

    return res.status(200).json({
      message: "User Validated",
      accessToken: accessToken,
      refreshToken: newRefreshToken,
    });
  } catch (error) {}
};

// exports
export { login_controller, refreshToken };

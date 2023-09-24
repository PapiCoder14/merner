import express from "express";
import {
  createUser,
  getAllUsers,
  getUser,
  replaceUser,
  patchuser,
  deleteuser,
} from "../controller/user.js";

const userrouter = express.Router();

userrouter
  .post("/", createUser)
  .get("/", getAllUsers)
  .get("/:id", getUser)
  .put("/:id", replaceUser)
  .patch("/:id", patchuser)
  .delete("/:id", deleteuser);

export default userrouter
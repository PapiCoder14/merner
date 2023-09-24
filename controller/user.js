import fs from "fs";

const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const users = data.users;

const createUser = (req, res) => {
  console.log(req.body);
  users.push(req.body);
  res.json(req.body);
};

const getAllUsers = (req, res) => {
  res.json(users);
};

const getUser = (req, res) => {
  const id = +req.params.id;
  const user = users.find((p) => p.id === id);
  res.json(user);
};

const replaceUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((p) => p.id === id);
  users.splice(userIndex, 1, { ...req.body, id: id });
  res.status(201).json();
};

const patchuser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((p) => p.id === id);
  const user = users[userIndex];
  users.splice(userIndex, 1, { ...user, ...req.body });
  res.status(201).json();
};

const deleteuser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((p) => p.id === id);
  const user = users[userIndex];
  users.splice(userIndex, 1);
  res.status(201).json(user);
};

export {
  createUser,
  getAllUsers,
  getUser,
  replaceUser,
  patchuser,
  deleteuser,
};

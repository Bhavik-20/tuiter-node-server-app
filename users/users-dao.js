import usersModel from "./users-model.js";
import people from "./users.js";
let users = people;


export const findAllUsers = () =>
  usersModel.find();
export const findUserById = (id) =>
  usersModel.findById(id);
export const findUserByUsername = (username) =>
  usersModel.findOne({ username });
export const findUserByCredentials = (username, password) =>
  usersModel.findOne({ username, password });
export const createUser = (user) =>
  usersModel.create(user);
export const updateUser = (id, user) =>
  usersModel.updateOne({ _id: id }, { $set: user });
export const deleteUser = (id) =>
  usersModel.deleteOne({ _id: id });

// let users = [];

// export const findAllUsers = () => users;

// export const findUserById = (uid) => {
//  const index = users.findIndex((u) => u._id === uid);
//  if (index !== -1) return users[index];
//  return null;
// };

// export const findUserByUsername = (username) => {
//  const index = users.findIndex((u) => u.username === username);
//  if (index !== -1) return users[index];
//  return null;
// };

// export const findUserByCredentials = (username, password) => {
//  const index = users.findIndex((u) => u.username === username && u.password === password);
//  if (index !== -1) return users[index];
//  return null;
// };

// export const createUser = (user) => {
//     console.log("createUser 1: " + user)
//     user._id = users.length
//     users.push(user)
//     console.log("createUser 2: " + users)
//     return user;
// };

// export const updateUser = (uid, user) => {
//  console.log("updateUser 1: " + uid + " " + user + users);
//  const index = users.findIndex((u) => u._id === uid);
//  console.log("updateUser 2: " + index);
//  users[index] = { ...users[index], ...user, _id: uid};
//  console.log("updateUser 3: " + users[index]);
//  return users[index];
// };

// export const deleteUser = (uid) => {
//  const index = users.findIndex((u) => u._id === uid);
//  users.splice(index, 1);
//  return {status: 'ok'}
// };

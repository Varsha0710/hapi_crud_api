const userService = require('../services/userService');

const getUsers = async (request, h) => {
  try {
    const users = await userService.getUsers();
    return users;
  } catch (error) {
    return h.response({ error: error.message }).code(400);
  }
};

const getUserById = async (request, h) => {
  try {
    const user = await userService.getUserById(request.params.id);
    return user;
  } catch (error) {
    return h.response({ error: error.message }).code(400);
  }
};

const createUser = async (request, h) => {
  try {
    const { error } = userSchema.validate(request.payload);
    if (error) {
      return h.response({ error: error.message }).code(400);
    }

    const newUser = await userService.createUser(request.payload);
    return newUser;
  } catch (error) {
    return h.response({ error: error.message }).code(400);
  }
};

const updateUser = async (request, h) => {
  try {
    const { error } = userSchema.validate(request.payload);
    if (error) {
      return h.response({ error: error.message }).code(400);
    }

    const user = await userService.updateUser(request.params.id, request.payload);
    return h.response({message : "updated successfully", user }).code(200);
  } catch (error) {
    return h.response({ error: error.message }).code(400);
  }
};

const deleteUser = async (request, h) => {
  try {
    await userService.deleteUser(request.params.id);
    return h.response({message : "deleted successfully"}).code(200);
  } catch (error) {
    return h.response({ error: error.message }).code(400);
  }
};

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };
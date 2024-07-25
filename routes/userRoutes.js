const Joi = require('@hapi/joi');
const usersController = require('../controllers/userController');

const routes = [
  {
    method: 'GET',
    path: '/users',
    handler: usersController.getUsers,
  },
  {
    method: 'GET',
    path: '/users/{id}',
    handler: usersController.getUserById,
  },
  {
    method: 'POST',
    path: '/users',
    handler: usersController.createUser,
    options: {
      validate: { 
        payload : userSchema = Joi.object({
          firstName: Joi.string().required(),
          lastName: Joi.string().required(),
          email: Joi.string().email().required(),
        })
      },
    },
  },
  {
    method: 'PUT',
    path: '/users/{id}',
    handler: usersController.updateUser,
    options: {
      validate: {
        payload: userSchema = Joi.object({
          firstName: Joi.string().required(),
          lastName: Joi.string().required(),
          email: Joi.string().email().required(),
        })
      },
    },
  },
  {
    method: 'DELETE',
    path: '/users/{id}',
    handler: usersController.deleteUser,
  },
];

module.exports = routes;
const User = require('../models/usersModel');

const usersController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.getAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createUser: async (req, res) => {
    const { username, email, password } = req.body;
    try {
      const newUser = await User.create({ username, email, password }); 
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  updateUser: async (req, res) => {
    const { userId } = req.params;
    const { username, email, password } = req.body;
    try {
      const updatedUser = await User.update(userId, { username, email, password }); 
      res.json(updatedUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  deleteUser: async (req, res) => {
    const { userId } = req.params;
    try {
      await User.delete(userId); 
      res.sendStatus(204);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};

module.exports = usersController;

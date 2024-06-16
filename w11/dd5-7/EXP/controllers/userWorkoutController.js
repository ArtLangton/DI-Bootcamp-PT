const UserWorkout = require('../models/userWorkoutsModel');

const userWorkoutsController = {
  getAllUserWorkouts: async (req, res) => {
    try {
      const userWorkouts = await UserWorkout.getAll(); 
      res.json(userWorkouts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createUserWorkout: async (req, res) => {
    const { userId, workoutId } = req.body;
    try {
      const newUserWorkout = await UserWorkout.create({ userId, workoutId }); 
      res.status(201).json(newUserWorkout);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  updateUserWorkout: async (req, res) => {
    const { userWorkoutId } = req.params;
    const { userId, workoutId } = req.body;
    try {
      const updatedUserWorkout = await UserWorkout.update(userWorkoutId, { userId, workoutId }); 
      res.json(updatedUserWorkout);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  deleteUserWorkout: async (req, res) => {
    const { userWorkoutId } = req.params;
    try {
      await UserWorkout.delete(userWorkoutId); 
      res.sendStatus(204);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};

module.exports = userWorkoutsController;

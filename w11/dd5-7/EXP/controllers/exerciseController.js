const Exercise = require('../models/exercisesModel');

const exercisesController = {
  getAllExercises: async (req, res) => {
    try {
      const exercises = await Exercise.getAll(); 
      res.json(exercises);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createExercise: async (req, res) => {
    const { name, description, muscle_group } = req.body;
    try {
      const newExercise = await Exercise.create({ name, description, muscle_group }); 
      res.status(201).json(newExercise);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  updateExercise: async (req, res) => {
    const { exerciseId } = req.params;
    const { name, description, muscle_group } = req.body;
    try {
      const updatedExercise = await Exercise.update(exerciseId, { name, description, muscle_group });
      res.json(updatedExercise);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  deleteExercise: async (req, res) => {
    const { exerciseId } = req.params;
    try {
      await Exercise.delete(exerciseId); 
      res.sendStatus(204);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};

module.exports = exercisesController;

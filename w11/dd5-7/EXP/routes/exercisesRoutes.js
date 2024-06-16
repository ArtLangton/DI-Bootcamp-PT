const express = require('express');
const router = express.Router();

const exercisesController = require('../controllers/exercisesController');

router.get('/exercises', exercisesController.getAllExercises);
router.post('/exercises', exercisesController.createExercise);
router.put('/exercises/:exerciseId', exercisesController.updateExercise);
router.delete('/exercises/:exerciseId', exercisesController.deleteExercise);

module.exports = router;

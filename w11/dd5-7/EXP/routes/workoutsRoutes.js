const express = require('express');
const router = express.Router();

const workoutsController = require('../controllers/workoutsController');

router.get('/workouts', workoutsController.getAllWorkouts);
router.post('/workouts', workoutsController.createWorkout);
router.put('/workouts/:workoutId', workoutsController.updateWorkout);
router.delete('/workouts/:workoutId', workoutsController.deleteWorkout);

module.exports = router;

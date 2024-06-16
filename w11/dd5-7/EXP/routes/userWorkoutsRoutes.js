const express = require('express');
const router = express.Router();

const userWorkoutsController = require('../controllers/userWorkoutsController');

router.get('/user-workouts', userWorkoutsController.getAllUserWorkouts);
router.post('/user-workouts', userWorkoutsController.createUserWorkout);
router.put('/user-workouts/:userWorkoutId', userWorkoutsController.updateUserWorkout);
router.delete('/user-workouts/:userWorkoutId', userWorkoutsController.deleteUserWorkout);

module.exports = router;

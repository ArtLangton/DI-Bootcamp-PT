const knex = require('../config/knexconnect');

const UserWorkout = {

  getAll: async () => {
    return knex('user_workouts').select('*');
  },

  create: async (userWorkoutData) => {
    return knex('user_workouts').insert(userWorkoutData).returning('*');
  },

  update: async (userWorkoutId, userWorkoutData) => {
    return knex('user_workouts').where({ id: userWorkoutId }).update(userWorkoutData).returning('*');
  },

  delete: async (userWorkoutId) => {
    return knex('user_workouts').where({ id: userWorkoutId }).del();
  }
};

module.exports = UserWorkout;

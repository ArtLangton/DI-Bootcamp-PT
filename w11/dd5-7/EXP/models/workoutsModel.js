const knex = require('../config/knexconnect');

const Workout = {
  getAll: async () => {
    return knex('workouts').select('*');
  },

  create: async (workoutData) => {
    return knex('workouts').insert(workoutData).returning('*');
  },

  update: async (workoutId, workoutData) => {
    return knex('workouts').where({ id: workoutId }).update(workoutData).returning('*');
  },

  delete: async (workoutId) => {
    return knex('workouts').where({ id: workoutId }).del();
  }
};

module.exports = Workout;

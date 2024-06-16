const knex = require('../config/knexconnect');

const Exercise = {

  getAll: async () => {
    return knex('exercises').select('*');
  },

  create: async (exerciseData) => {
    return knex('exercises').insert(exerciseData).returning('*');
  },

  update: async (exerciseId, exerciseData) => {
    return knex('exercises').where({ id: exerciseId }).update(exerciseData).returning('*');
  },


  delete: async (exerciseId) => {
    return knex('exercises').where({ id: exerciseId }).del();
  }
};

module.exports = Exercise;

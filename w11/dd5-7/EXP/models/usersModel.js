const knex = require('../config/knexconnect');

const User = {
  getAll: async () => {
    return knex('users').select('*');
  },

  create: async (userData) => {
    return knex('users').insert(userData).returning('*');
  },

  update: async (userId, userData) => {
    return knex('users').where({ id: userId }).update(userData).returning('*');
  },

  delete: async (userId) => {
    return knex('users').where({ id: userId }).del();
  }
};

module.exports = User;

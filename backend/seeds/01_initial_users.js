/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users_table').del()
  await knex('users_table').insert([
    {id: 1, FirstName: 'Borp', LastName: 'Bavis', username: '1234', password: 'password'},
    {id: 2, FirstName: 'Borp', LastName: 'Tavis', username: '1234', password: 'password'},
    {id: 3, FirstName: 'Borp', LastName: 'Ravis', username: '1234', password: 'password'}

  ]);
};

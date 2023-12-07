/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users_table').del()
  await knex('users_table').insert([
    {id: 1, FirstName: 'Borp', LastName: 'Bavis', username: 'DaBavester', password: 'IBave'},
    {id: 2, FirstName: 'Borp', LastName: 'Tavis', username: 'DaTavester', password: 'ITave'},
    {id: 3, FirstName: 'Borp', LastName: 'Ravis', username: 'DaRavester', password: 'IParty'},
    {id: 4, FirstName: 'Icecream', LastName: 'Hater', username: 'probablyWegenke', password: 'IHateIcecream'},
    {id: 5, FirstName: 'Icecream', LastName: 'Lover', username: 'probablyBurke', password: 'ILoveIcecream'},

  ]);
};

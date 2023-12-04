/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('items_table').del()
  await knex('items_table').insert([
    {id: 1, userId: 3, ItemName: 'pickle', description: 'why it spicy', quantity: 2},
    {id: 2, userId: 2, ItemName: 'onion', description: 'i cry', quantity: 2},
    {id: 3, userId: 1, ItemName: 'carrot', description: 'my eyes!', quantity: 2},
    {id: 4, userId: 2, ItemName: 'cat food', description: 'how they eat this?', quantity: 2},
    
  ]);
};

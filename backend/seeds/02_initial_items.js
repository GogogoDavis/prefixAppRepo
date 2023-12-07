/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('items_table').del()
  await knex('items_table').insert([
    {id: 1, userId: 3, ItemName: 'salt', description: 'some people find me spicy', quantity: 2},
    {id: 2, userId: 2, ItemName: 'onion', description: 'i cry', quantity: 2},
    {id: 3, userId: 1, ItemName: 'b-52', description: 'what is my goal with this inventory?', quantity: 2},
    {id: 4, userId: 4, ItemName: 'Quaker Oats', description: 'Now with 100% less Quaker', quantity: 2},
    {id: 5, userId: 5, ItemName: 'Present', description: 'This is only for Wegenke.....(stop reading if you\'re not Wegenke) Its IceCream....yay!' , quantity: 2},
    
  ]);
};

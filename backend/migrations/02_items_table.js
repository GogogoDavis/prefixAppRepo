/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('items_table', table => {
    table.increments('id'); 
    table.integer('userId', 15);
    table.foreign('userId').references('users_table.id');
    table.string('Item Name', 20); 
    table.string('description', 100); 
    table.integer('quantity', 20); 
  
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('items_table');
};

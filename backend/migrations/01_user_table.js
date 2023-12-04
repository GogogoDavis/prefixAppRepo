/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users_table', table => {
    table.increments('id').primary().unique(); 
    table.string('First Name', 20); 
    table.string('Last Name', 20); 
    table.string('username', 50); 
    table.string('password', 50);    
  })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users_table')
};

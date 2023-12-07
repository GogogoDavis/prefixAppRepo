/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users_table', table => {
    table.increments('id'); 
    table.string('FirstName', 50); 
    table.string('LastName', 50); 
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

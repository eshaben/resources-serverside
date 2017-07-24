
exports.up = function(knex, Promise) {
  return knex.schema.createTable('resource', (table) => {
    table.increments();
    table.text('title').notNullable();
    table.text('type');
    table.text('link').notNullable();
    table.text('description');
    table.date('dateCreated').notNullable();
    table.integer('quarter');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('resource');
};


exports.up = function(knex, Promise) {
  return knex.schema.table('todos', function(table){
      table.string('category').notNullable().defaultTo('General');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('todos', function(table){
      table.dropColumn('category');
  });
};

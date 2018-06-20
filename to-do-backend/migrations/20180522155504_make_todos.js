
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('todos', function(table){
        table.increments('id').primary();
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.string('content').notNullable();
        table.boolean('complete').notNullable().defaultTo(false);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('todos');
};

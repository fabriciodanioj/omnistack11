exports.up = knex => {
  return knex.schema.createTable('ongs', table => {
    table.increments();
    table.string('name').notNullable();
    table
      .string('email')
      .notNullable()
      .unique();
    table.string('password_hash').notNullable();
    table.string('phone').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });
};

exports.down = knex => knex.schema.dropTable('ongs');

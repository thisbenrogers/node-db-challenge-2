
exports.up = function(knex) {
  return knex.schema.createTable('pro_res', pro_res => {

    pro_res.increments();

    pro_res.integer('res_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('resources')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    pro_res.integer('pro_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    pro_res.string('notes', 1024);

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('pro_res');
};

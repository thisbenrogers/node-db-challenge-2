
exports.up = function(knex) {
  return knex.schema.createTable('tasks', task => {

    task.increments();

    task.string('task_desc', 255)
      .notNullable();

    task.string('notes', 1024);

    task.boolean('completed')
      .defaultsTo(false);

    task.integer('pro_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tasks');
};

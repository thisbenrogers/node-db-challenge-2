
exports.up = function(knex) {

  return knex.schema.createTable('projects', project => {

    project.increments();

    project.string('pro_name', 255)
      .notNullable();

    project.string('pro_desc', 1024);

    project.boolean('completed')
      .defaultTo(false);

  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('projects');
};

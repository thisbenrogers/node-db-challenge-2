
exports.up = function(knex) {
  return knex.schema.createTable('resources', resource => {

    resource.increments();

    resource.string('res_name', 255)
      .notNullable()
      .unique();

    resource.string('res_desc', 1024);

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('resources');
};

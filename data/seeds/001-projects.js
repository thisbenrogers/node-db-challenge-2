
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, pro_name: 'Complete Lambda', pro_desc: "description here", completed: false},
        {id: 2, pro_name: 'Get rich', pro_desc: "description here", completed: false},
        {id: 3, pro_name: 'Live well', pro_desc: "description here", completed: false}
      ]);
    });
};

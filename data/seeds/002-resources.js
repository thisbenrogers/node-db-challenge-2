
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, res_name: 'After Hours', res_desc: "description here"},
        {id: 2, res_name: 'Google', res_desc: "description here"},
        {id: 3, res_name: 'Family', res_desc: "description here"}
      ]);
    });
};

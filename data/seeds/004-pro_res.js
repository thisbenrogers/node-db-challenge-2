
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pro_res').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('pro_res').insert([
        {id: 1, res_id: 1, pro_id: 1, notes: 'notes go here'},
        {id: 2, res_id: 2, pro_id: 1, notes: 'notes go here'},
        {id: 3, res_id: 3, pro_id: 1, notes: 'notes go here'},
        {id: 4, res_id: 3, pro_id: 2, notes: 'notes go here'},
        {id: 5, res_id: 2, pro_id: 2, notes: 'notes go here'},
        {id: 6, res_id: 3, pro_id: 3, notes: 'notes go here'},
        {id: 7, res_id: 2, pro_id: 3, notes: 'notes go here'}
      ]);
    });
};

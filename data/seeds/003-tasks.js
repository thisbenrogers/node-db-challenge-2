
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, task_desc: 'Study Hard', notes: "notes go here", completed: false, pro_id: 1},
        {id: 2, task_desc: 'Ace Sprints', notes: "notes go here", completed: false, pro_id: 1},
        {id: 3, task_desc: 'Build Well in Labs', notes: "notes go here", completed: false, pro_id: 1},
        {id: 4, task_desc: 'Careers Assignments', notes: "notes go here", completed: false, pro_id: 1},
        {id: 5, task_desc: 'Earn seniority in my field', notes: "notes go here", completed: false, pro_id: 2},
        {id: 6, task_desc: 'Gain respect of investors', notes: "notes go here", completed: false, pro_id: 2},
        {id: 7, task_desc: 'Build brilliant webapp', notes: "notes go here", completed: false, pro_id: 2},
        {id: 8, task_desc: 'Sell brilliant web app', notes: "notes go here", completed: false, pro_id: 2},
        {id: 9, task_desc: 'Do my best', notes: "notes go here", completed: false, pro_id: 3},
        {id: 10, task_desc: 'Eat well', notes: "notes go here", completed: false, pro_id: 3},
        {id: 11, task_desc: 'Rest well', notes: "notes go here", completed: false, pro_id: 3},
        {id: 12, task_desc: 'Laugh with Family', notes: "notes go here", completed: false, pro_id: 3},
        {id: 13, task_desc: 'Take time for self', notes: "notes go here", completed: false, pro_id: 3}
      ]);
    });
};

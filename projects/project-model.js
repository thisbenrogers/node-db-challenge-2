const db = require('../data/dbConfig');

module.exports = {
  getProjects,
  getProjectById,
  findTasks,
  addProject,
  addTask
}

function getProjects() {
  return db('projects');
};

function getProjectById(id) {
  return db('projects')
  .where({ id })
  .first();
}

function findTasks(id) {
  return db("tasks as t")
    .join("projects as p", "p.id", "t.pro_id" )
    .select("p.pro_name as projectName", "p.pro_desc as projectDescription", "t.id as id", "t.task_desc as taskDescription", "t.notes", "t.completed")
    .where({ pro_id: id })
    .orderBy("id")
}

async function addProject(proObj) {
  const [id] = await db('projects').insert(proObj, 'id');
  return getProjectById(id);
}

async function addTask(task, project_id) {
  console.log("task in addTask:", task)
  const [id] = await db('projects')
    .insert({ ...task, project_id }, 'id')
    .returning('*');
    console.log("id in await:", id);
  return findTasks(id);
}
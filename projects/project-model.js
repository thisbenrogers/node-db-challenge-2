const db = require('../data/dbConfig');

module.exports = {
  addProject,
  getProjectById,
  getProjects
}

function getProjects() {
  return db('projects');
};

function getProjectById(id) {
  return db('projects')
  .where({ id })
  .first();
}

async function addProject(proObj) {
  const [id] = await db('projects').insert(proObj, 'id');
  return getProjectById(id);
}
const db = require('../data/dbConfig');

module.exports = {
  addResource,
  getResourceById,
  getResources
}

function getResources() {
  return db('resources');
};

function getResourceById(id) {
  return db('resources')
  .where({ id })
  .first();
}

async function addResource(proObj) {
  const [id] = await db('resources').insert(proObj, 'id');
  return getResourceById(id);
}
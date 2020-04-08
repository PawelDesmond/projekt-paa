const storage = require('azure-storage')
const uuid = require('uuid')
    service.insertEntity(table, task, (error, result, response) => {
      !error ? resolve() : reject()
    })
  })
)
const service = storage.createTableService()
const table = 'tasks'
const init = async () => (
  new Promise((resolve, reject) => {
    service.createTableIfNotExists(table, (error, result, response) => {
      !error ? resolve() : reject()
    })
  })
)
const createTask = async (title) => (
  new Promise((resolve, reject) => {
    const generator = storage.TableUtilities.entityGenerator
    const task = {
      PartitionKey: generator.String('task'),
      RowKey: generator.String(uuid.v4()),
      title
    }
 

module.exports = {
  init,
  createTask
}

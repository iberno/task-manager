const mongoose = require('mongoose')

/**
 * Task Model Schema
 * title: String
 * _listId: Relationship with List
 */
const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
    trim: true
  },
  _listId: {
    type: mongoose.Types.ObjectId,
    required: true
  }
})

const Task = mongoose.model('Task', TaskSchema)

module.exports = { Task }
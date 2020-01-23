const mongoose = require('mongoose')

/**
 * List Model Schema
 * title: String
 */
const ListSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
    trim: true
  }
})

const List = mongoose.model('List', ListSchema)

module.exports = { List }
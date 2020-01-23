const express = require('express')
const app = express()

const { mongoose } = require('./src/db/mongoose')

const bodyParser = require('body-parser')

// Load in mongoose models
const { List, Task } = require('./src/models')

//Load Middleware
app.use(bodyParser.json())

// ROUTE HANDLERS

// LIST ROUTES

app.get('/', (req, res) => {
  res.send('Hello API!')
})


/**
 * GET /lists
 * Get all lists
 */
app.get('/lists', (req, res) => {
  List.find({}).then((lists) => {
    res.send(lists)
  })
})

/**
 * POST /lists
 * Create a new lists
 */
app.post('/lists', (req, res) => {
  // Lorem ipsum dolor sit amet.
  let title = req.body.title;

  let newList = new List({
    title
  })
  newList.save().then((listDoc) => {
    res.send(listDoc)
  })
})

/**
 * PATCH /lists/:id
 * Update a specified list
 */
app.patch('/lists/:id', (req, res) => {
  List.findByIdAndUpdate({ _id: req.params.id }, {
    $set: req.body
  }).then(() => {
    res.sendStatus(200)
  })
})

/**
 * DELETE /lists/:id
 * Delete a specified list
 */
app.delete('/lists/:id', (req, res) => {
  List.findOneAndDelete({
    _id: req.params.id
  }).then((removedListDoc) => {
    res.send(removedListDoc);
  })

})

/**
 * GET /lists/:listId/tasks
 * Get all tasks by listId in specifc List
 */
app.get('/lists/:listId/tasks', (req, res) => {
  Task.find({
    _listId: req.params.listId
  }).then((tasks) => {
    res.send(tasks)
  })
})

app.get('/lists/:listId/tasks/:taskId', (req, res) => {
  Task.findOne({
    _id: req.params.taskId,    
    _listid: req.params.listId    
  }).then((task) => {
    res.send(task)
  })
})


/**
 * POST /lists/:listId/tasks
 * Create a new Task for specific list
 */
app.post('/lists/:listId/tasks', (req, res) => {
  
  let newTask = new Task({
    title: req.body.title,
    _listId: req.params.listId
  })
  newTask.save().then((newTaskDoc) => {
    res.send(newTaskDoc)
  })
})

/**
 * PATCH /lists/:id
 * Update a Task in specified list
 */
app.patch('/lists/:listId/tasks/:taskId', (req, res) => {
  Task.findOneAndUpdate({ 
    _id: req.params.taskId,
    _listId: req.params.listId
  },{
      $set: req.body
    }
  ).then(() => {
    res.sendStatus(200)
  })
})

/**
 * DELETE /lists/:lisId/tasks/:taskId
 * Delete a specified task from list
 */
app.delete('/lists/:lisId/tasks/:taskId', (req, res) => {
  Task.findOneAndDelete({
    _id: req.params.taskId,
    _listId: req.params.listId
  }).then((removedTaskDoc) => {
    res.send(removedTaskDoc);
  })
})


app.listen(3000, () => {
  console.log('Server is listening on port 3000');  
})
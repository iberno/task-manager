
const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://taskman:MhFUexmiQzr4XK2J@cluster0-sxuij.mongodb.net/taskman?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false

  }).catch((e) => {
  console.log("Error while attempting to connect to MONGODB");
  console.log(e)
})

module.exports = {
  mongoose
}

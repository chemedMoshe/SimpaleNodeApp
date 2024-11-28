var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');
var app = express();
app.use(cors())

// Connect to MongoDB
mongoose.connect('mongodb://mongo-db:27017/animals')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Define a Dog schema and model with timestamps (for createdAt and updatedAt)
const dogSchema = new mongoose.Schema({
  name: String
}, { timestamps: true }); 

const Dog = mongoose.model('Dog', dogSchema);

// Create a dog entry
app.get('/add-dog', async function (req, res) {
  const dog = new Dog({ name: 'sinowar' });
  
  try {
    await dog.save();
    res.send('Dog added successfully!');
  } catch (err) {
    console.log(err);
    res.status(500).send('Error adding dog');
  }
});

// Base route
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// Start the server
app.listen(3000, function () {
  console.log('Example app listening on port 3000');
});

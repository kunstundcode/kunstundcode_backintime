const mongoose = require('mongoose');

// Don't forget to set "MONGODB_URI" in ~/server/.env
// const uri = `mongodb://localhost/kunstundcode`;
const uri = process.env.DB_URI 
mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });
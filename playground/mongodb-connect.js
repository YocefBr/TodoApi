//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
   if(err) {
       return console.log('Unable To Connect To MongoDB Server.');
   }

   console.log('Connected To MongoDB Server');
   /* db.collection('Todos').insertOne({
       text: 'Something To Do',
       completed: false
   }, (err, res) => {
     if(err) {
        return console.log('Unable to insert todo', err);
     }

     console.log(JSON.stringify(res.ops, undefined, 2));
   }); */

  /*  db.collection('Users').insertOne({
       name: 'Yucef',
       age: 28,
       location: 'Marrakech'
   }, (err, res)=> {
       if(err) {
           return console.log('Unable to insert User.');
       }

       console.log(res.ops[0]._id.getTimestamp());
   }) */

   db.close();
});
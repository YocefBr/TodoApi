//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
   if(err) {
       return console.log('Unable To Connect To MongoDB Server.');
   }

   console.log('Connected To MongoDB Server');
   /* db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5aeed105a25da1b6cfee24ae')
   }, {
       $set: {
           completed: true
       }
   }, {
       returnOriginal: false
   }).then((res) => {
      console.log(res);
   }); */

   db.collection('Users').findOneAndUpdate({
       _id: new ObjectID('5aed98d97ae9f3871408adfd')
   }, {
      $set: {
          name: 'Yucef'
      },
      $inc: {
        age: 1
     }
   }, {
       returnOriginal: false
   }).then((res) => {
       console.log(res);
   })
   //db.close();
});
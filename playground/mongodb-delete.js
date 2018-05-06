//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
   if(err) {
       return console.log('Unable To Connect To MongoDB Server.');
   }

   console.log('Connected To MongoDB Server');
   /* db.collection('Todos').deleteMany({text: "Eat Lunch"}).then((result) => {
     console.log(result);
   }); */

  /*  db.collection('Todos').deleteOne({text: "Eat Lunch"}).then((res) => {
      console.log(res);
   }); */
  /*  db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
       console.log(res);
   }); */

    db.collection('Users').deleteMany({location: "Marrakech"}).then((result) => {
     console.log(result);
   }); 

   //db.close();
});
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
    //     console.log(result);
    // });

    // Challenge deleteMany using name
    // db.collection('Users').deleteMany({ name: 'Kewal' }).then((result) => {
    //     console.log(result);
    // })

    //Challenge findOneAndDelete using _id
    // db.collection('Users').findOneAndDelete({ 
    //     _id: new ObjectID('5a5934f28ec5c020fd6f3b80') 
    // }).then((result) => {
    //     console.log(result);
    // })

    // db.close();
});

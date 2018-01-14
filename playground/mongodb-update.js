const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5a594b3e304b4304c09acb69')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    //  }, {
    //         returnOriginal: false
    //     }).then((result) => {
    //         console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a591ba932724316b79b86f3')
    }, {
        $set: {
            name: 'James'
        },
        $inc: {
            age: 1
        } 
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });


    // db.close();
});

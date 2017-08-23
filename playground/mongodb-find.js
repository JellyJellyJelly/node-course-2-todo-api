//const MongoClient = require('mongodb').MongoClient;
var {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Unable to connect to server.')
	}
	console.log('Connected to MongoDB server');

	// db.collection('Users').find({
	// 	_id: new ObjectID("599dfeabe5de06912930a4e5")
	// }).toArray().then((docs) => {
	// 	console.log('Users');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err);
	// });

	db.collection('Users').find({name: 'Christian'}).toArray().then((docs) => {
		console.log(JSON.stringify(docs,undefined, 2));
	});


	//db.close();
});
//const MongoClient = require('mongodb').MongoClient;
var {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Unable to connect to server.')
	}
	console.log('Connected to MongoDB server');
 
	db.collection('Users').findOneAndUpdate({
		text: "Eat lunch"
	}, {
		$set: {
			text: "Eat Dinner"
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});
	//db.close();
});
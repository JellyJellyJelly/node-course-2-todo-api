//const MongoClient = require('mongodb').MongoClient;
var {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Unable to connect to server.')
	}
	console.log('Connected to MongoDB server');
 
	// //deleteMany
	// db.collection('Users').deleteMany({
	// 	name: 'Christian'
	// }).then((result) => {
	// 	console.log(result);
	// })

	// //delete/One
	// db.collection('Users').deleteOne({
	// 	text: 'eat lunch'
	// }).then((result) => {
	// 	console.log(result);
	// })

	// //findOneANdDelete
	// db.collection('Users').findOneAndDelete({
	// 	completed: false
	// }).then((result) => {
	// 	console.log(result);
	// };

	db.collection('Users').deleteMany({name: 'Christian'});
	db.collection('Users').findOneAndDelete({_id: new ObjectID("599e0d1ae5de06912930a895")
	}).then((result) => {
		console.log(JSON.stringify(result, undefined, 2));
	});




	//db.close();
});
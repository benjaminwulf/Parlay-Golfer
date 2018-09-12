var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://mongodb+srv://parlay-golfer:Peruluv2@cluster0-crslf.mongodb.net/test?retryWrites=true";
MongoClient.connect(uri, function(err, client) {
   const collection = client.db("test").collection("devices");
   // perform actions on the collection object
   client.close();
});


var PracticeSchema = new mongoose.Schema({ 
  Name: String, 
  Role: String, 
  Org: String
});

module.exports = mongoose.model('practice', PracticeSchema, 'practice');

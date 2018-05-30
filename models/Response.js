var mongoose = require('mongoose');

var ResponseSchema = mongoose.Schema({
	value: {
        type: String,
        required: true
	}
});

var Response = module.exports = mongoose.model('Response', ResponseSchema);

module.exports.findResponseById = function(id,callback){
  Question.findById(id,callback);
}

module.exports.getResponseValue = function(data,calllback){
    //parse data and get question[i].value
}

module.exports.getResponsesCount = function(data,callback){
    //size of data[]
}



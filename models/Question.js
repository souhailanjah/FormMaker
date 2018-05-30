var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
  
    quest: String,
    resp1: String,
    resp2: String,
    resp3: String,
    resp4: String,
    updated_date: { type: Date, default: Date.now }
  
  });

var Question = module.exports = mongoose.model('Question', QuestionSchema);

module.exports.findQuestionById = function(id,callback){
  Question.findById(id,callback);
}

module.exports.getQuestionsList = function(data,calllback){
    //parse data and get question[i].value
}

module.exports.getQuestionsCount = function(data,callback){
    //size of data[]
}



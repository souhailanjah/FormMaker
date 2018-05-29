var mongoose = require('mongoose');
//var fs = require('fs');

var data = [
    {
        "question": {
            "q_id": "q_id",
            "value": "why you not laugh? ",
            "answers": [
                {
                    "answer_id": "answer_id",
                    "value": "cats"
                },
                {
                    "answer_id": "answer_id",
                    "value": "dogs"
                },
                {
                    "answer_id": "answer_id",
                    "value": "ducks"
                },
                {
                    "answer_id": "answer_id",
                    "value": "monkeys"
                }
            ]
        }
    },
   
    {
        "question": {
            "q_id": "q_id",
            "value": "why you so angry? ",
            "answers": [
                {
                    "answer_id": "answer_id",
                    "value": "cats"
                },
                {
                    "answer_id": "answer_id",
                    "value": "dogs"
                },
                {
                    "answer_id": "answer_id",
                    "value": "ducks"
                },
                {
                    "answer_id": "answer_id",
                    "value": "monkeys"
                }
            ]
        }
    },

    {
        "question": {
            "q_id": "q_id",
            "value": "why you sleepy? ",
            "answers": [
                {
                    "answer_id": "answer_id",
                    "value": "cats"
                },
                {
                    "answer_id": "answer_id",
                    "value": "dogs"
                },
                {
                    "answer_id": "answer_id",
                    "value": "ducks"
                },
                {
                    "answer_id": "answer_id",
                    "value": "monkeys"
                }
            ]
        }
    },

    {
        "question": {
            "q_id": "q_id",
            "value": "why you so short? ",
            "answers": [
                {
                    "answer_id": "answer_id",
                    "value": "cats"
                },
                {
                    "answer_id": "answer_id",
                    "value": "dogs"
                },
                {
                    "answer_id": "answer_id",
                    "value": "ducks"
                },
                {
                    "answer_id": "answer_id",
                    "value": "monkeys"
                }
            ]
        }
    }
]

var ResponseSchema = mongoose.Schema({
	value: {
        type: String,
        required: true
	}
});

var Response = module.exports = mongoose.model('Response', ResponseSchema);

/*
module.exports.findResponseById = function(id,callback){
  Question.findById(id,callback);
}*/

module.exports.getResponseValue = function(data,calllback){
    //parse data and get question[i].value
}

module.exports.getResponsesCount = function(data,callback){
    //size of data[]
}



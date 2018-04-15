var mongoose = require('mongoose');
//var fs = require('fs');

var resp = [
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

var QuestionSchema = mongoose.Schema({
	q_content: {
        type: String,
        required: true
	},
	q_responseList: {
		type: Array
	}
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

module.exports.drawBars = function(data,callback){
    //use D3.js to create graphs
    //https://scrimba.com/p/pEKMsN/cast-1953
    //https://bl.ocks.org/mbostock/4061961
}


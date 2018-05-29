var mongoose = require('mongoose');
//var fs = require('fs');

<<<<<<< HEAD
var resp = [
=======
var data = [
>>>>>>> second commit
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
<<<<<<< HEAD
	q_content: {
        type: String,
        required: true
	},
	q_responseList: {
=======
	value: {
        type: String,
        required: true
	},
	answersList: {
>>>>>>> second commit
		type: Array
	}
});

var Question = module.exports = mongoose.model('Question', QuestionSchema);

<<<<<<< HEAD
module.exports.findQuestionById = function(id,callback){
  Question.findById(id,callback);
}
=======
/*module.exports.findQuestionById = function(id,callback){
  Question.findById(id,callback);
}*/
>>>>>>> second commit

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


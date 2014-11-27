var module = require('../modules/answer-module');

exports.start = function(req, res){
	module.getAllQuestions(function(questions, number){
		data = {questions: questions, number: number};
		res.render('questions', data);
	});
};
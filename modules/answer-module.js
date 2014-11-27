var db = require('../utils/database')

// 1、获取所有题目
exports.getAllQuestions = function(callback){
	questions = [
		{
			question:'这是个困难的问题',
			selectiona: '10', 
			selectionb: '1949',
			selectionc: '1989',
			selectiond: '2008',
			answer: 'a'
		},
		{
			question:'这是个简单地问题',
			selectiona: '11', 
			selectionb: '12',
			selectionc: '13',
			selectiond: '14',
			answer: 'a'
		}
	];
	number = 2;
	callback(questions, number);
};
// 2、修改单个题目
exports.changeSingleQuestion = function(){

}
// 3、批量修改全部题目
exports.changeAllQuestions = function(){

}
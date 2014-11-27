exports.start = function(req, res){
	data = [
		{
			question:'adfadfwwf',
			selectiona: 'aaj', 
			selectionb: 'bbb',
			selectionc: 'ccc',
			selectiond: '',
			answer: 'a'
		},
		{
			question:'adfadfwwf',
			selectiona: '', 
			selectionb: '',
			selectionc: '',
			selectiond: '',
			answer: 'a'
		}
	];
	res.render('questions', data);
}
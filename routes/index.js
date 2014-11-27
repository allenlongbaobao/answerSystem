
/*
 * GET home page.
 */

exports.index = function(req, res){
	data = {
		title: '答题系统',
		backImage: 'http://'
	};
  res.render('index', data);
};
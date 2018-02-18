var $ = require('jquery');
module.exports = {
	playUrl: function (id){
		console.log($);
		$.get('http://api.youtube6download.top/fetch/link.php?i='+id, function (data, status){
			console.log("response recieved");
		});
	}
}
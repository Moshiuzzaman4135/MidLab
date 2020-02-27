var	express		= require.main.require('express');
var router		= express.Router();
var userModel	= require.main.require('./models/user-model');
var app			= express();




router.get('/',function(req,res){

	//console.log(res.session.username);
	console.log(req.session.username);

	userModel.getByUname(req.session.username, function(result){
  	

	
	res.render('adminHome/index',{user: result});
});
});
// router.get('/', function(req, res){	
// 	if(req.cookies['username'] != null){
// 		userModel.getByUname(req.cookies['username'], function(result){
// 			res.render('home/index', {user: result});
// 		});
// 	}else{
// 		res.redirect('/logout');
// 	}
// });



module.exports = router;
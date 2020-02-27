var	express		= require.main.require('express');
var router		= express.Router();
var userModel	= require.main.require('./models/user-model');
var app			= express();




router.get('/',function(req,res){
	console.log(req.session.username);
	userModel.getByUname(req.session.username, function(result){	
	res.render('adminHome/index',{user: result});
	});
});



router.get('/addProduct',function(req,res){
	
	res.render('adminHome/addProduct');
	
});




module.exports = router;
var	express		= require('express');
var router		= express.Router();
var userModel	= require.main.require('./models/user-model');

//Login
router.get('/',function(req,res){
	console.log("Requested : Login");
	res.render('login/index');
});
router.post('/',function(req,res){
	var user={
		username	: req.body.username,
		password	: req.body.password,		
	}
	userModel.validate(user,function(status){
		if(status){
			
				userModel.getType(user,function(result){
				console.log('Here');
				var type = JSON.stringify(result.type.toString());
				console.log(type);
				if(type=='"admin"'){		
					req.session.username = req.body.username;		
					res.redirect('/adminHome');
				}else{
					res.send('CUSTOMER');
				}

				});			
		}
		else{			
			res.redirect('/login');
		}
	});
});



//Registration
router.get('/registration',function(req,res){
	console.log("Requested : Registration");
	res.render('login/registration');
});

router.post('/registration',function(req,res){
	var user={
		fullname		: req.body.fullname,
		username		: req.body.username,
		password		: req.body.password,
		confirmPassword	: req.body.confirmPassword,
		contactNo		: req.body.contactNo,
		type			: req.body.type,
	}
	console.log(user);
	userModel.insert(user,function(status){
		if(status){
			console.log(status);
			req.session.username = req.body.username;
			res.redirect('/login');
		}
		else{
			res.redirect('/login/registration');				
		}
	});
});





module.exports = router;
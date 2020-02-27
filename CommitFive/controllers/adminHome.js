var	express		= require.main.require('express');
var router		= express.Router();
var userModel	= require.main.require('./models/user-model');
var productModel= require.main.require('./models/product-model');
var app			= express();




router.get('/',function(req,res){
	console.log(req.session.username);
	userModel.getByUname(req.session.username, function(result){	
	res.render('adminHome/index',{user: result});
	});
});


router.get('/viewProducts',function(req,res){	

	productModel.getAll(function(results){
		if(results.length > 0){
			console.log(results);
			res.render('adminHome/viewProducts', {productList: results});
		}else{
			res.send('invalid username/password');
		}
	});
	
});

router.get('/addProduct',function(req,res){
	
	res.render('adminHome/addProduct');
	
});
router.post('/addProduct',function(req,res){
	var product={
		productname		: req.body.productname,
		catagory		: req.body.catagory,
		subCatagory		: req.body.subCatagory,
		brand			: req.body.brand,
		quantity		: req.body.quantity,		
	}
	console.log(product);
	productModel.insert(product,function(status){
		if(status){
			
		}
		else{
			res.render('adminHome/addProduct');						
		}
	});	
});




module.exports = router;
var db			= 	require('./db');
module.exports	={

	insert: function(product, callback){
		var sql = "insert into products values(?,?,?,?,?,?);";
		db.execute(sql, [null,product.productname,product.catagory,product.subCatagory,product.brand,product], function(status){
			if(status){
				console.log(status);
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	getAll:function(callback){
		var sql = "select * from product";
		db.getResult(sql, null, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback(null);
			}
		});
	},

	
	
	
}
var db			= 	require('./db');
module.exports	={

	insert: function(user, callback){
		var sql = "insert into users values(?,?,?,?,?,?);";
		db.execute(sql, [null,user.fullname, user.username, user.password, user.contactNo, user.type], function(status){
			if(status){
				console.log(status);
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	validate: function(user, callback){
		var sql = "select * from users where username=? and password=?";
		db.getResult(sql, [user.username, user.password], function(result){
			if(result.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	getType: function(user, callback){
		var sql = "select * from users where username=?";
		db.getResult(sql, [user.username], function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback(null);
			}
		});
	},
	getByUname: function(uname, callback){
		var sql = "select * from users where username=?";
		db.getResult(sql, [uname], function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback(null);
			}
		});
	},
}
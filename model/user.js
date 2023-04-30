const mongose = require("mongoose");

const UserInfo = mongose.Schema({
	password:
	{
		type:String,
	    minLength:6,
	    maxlength:100,
	    required:true,
	    index:
	    {
	      unique:true,
	      dropDups:true
	    }
	},
	email:
	{
		type:String,
	    minLength:9,
	    maxlength:100,
	    required:true,
	    index:
	    {
	      unique:true,
	      dropDups:true
	    }
	},
    joinDate:
    {
      type:Date,
      default : Date.now
    }
})

User = mongose.model("User" , UserInfo);
module.exports = User;
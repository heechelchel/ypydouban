var express = require("express");
var router = express.Router();
var user = require("../model/user");


/*router.post("/register",function(res,req){
    user.find({
        username:req.body.username
    },function(error,data){

            if(data.length === 0){
                user.create({
                    username:req.body.username,
                    password:md5(req.body.password)
                },function(error,data){
                    if(!error){
                        res.send(true)
                    }else{
                        res.send(false)
                    }
                })
            }else{
                res.send(false)
            }

    })
})*/

router.post("/zxw/register",function(req,res){
    user.find({
        uid:req.body.uid
    },function(error,result){
        if(!error){
            if(result.length == 0){
                user.create({
                    uid:req.body.uid,
                    password:req.body.password
                },function(error,result){
                    if(!error){
                        res.send(true)
                    }
                    else{
                        res.send(false);
                    }
                })
            }
            else{
                res.send(false)
                console.log(1)
            }
        }else{
            res.send(error)
        }
    })
})



router.post("/zxw/login",(req,res) =>{
    user.find({
      uid:req.body.uid,
      password:req.body.password
    },function(error,result){
      if(!error){
        if(result.length>0){

          //模糊
          // req.session.zxw = result[0];
          // res.cookie("zhengxuwen",result[0].uid)
          res.send(true)
        }else{
          res.send(false)
        }
      }
    
  })
})






module.exports = router;

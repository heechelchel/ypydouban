/**
 * Created by zhengxuwen on 2017/9/21.
 */

var mongoose = require("mongoose")
var Schema = mongoose.Schema;//概要

var user = {
    uid:String,
    password:String
}


var user = mongoose.model("user",new Schema(user))

module.exports = user;
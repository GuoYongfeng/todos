/**
 * Created by Administrator on 2015/7/10.
 */
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    // 姓名
    name: {
        type:String,
        default:''
    },
    // 事项信息
    text:{
        type:String,
        default:''
    },
    // 事项状态
    status: {
        type:String,
        default:''
    }

});

module.exports = mongoose.model('Todo',schema);
/**
 * Created by Administrator on 2015/7/10.
 */
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    // ����
    name: {
        type:String,
        default:''
    },
    // ������Ϣ
    text:{
        type:String,
        default:''
    },
    // ����״̬
    status: {
        type:String,
        default:''
    }

});

module.exports = mongoose.model('Todo',schema);
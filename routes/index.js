var express = require('express');
var router = express.Router();
var Todo = require('../schema/todo');

function getTodos(res){
  Todo.find(function(err, todos){
    if(err)
      res.send(err);

    res.json(todos);

  });
}

/**
 * 首页
 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**
 * 获取所有的待办事项
 */
router.get('/api/todos', function(req, res) {
  getTodos(res);
});

/**
 * 保存待办事项
 */
router.post('/api/todos', function(req, res) {
  Todo.create({
    name:req.body.name,
    text:req.body.text,
    status:req.body.status,
    done:false //是否完成默认给false
  },function(err,todo){
    getTodos(res);
  });
});

/**
 * 删除代办事项
 */
router.post('/api/todos/delete', function(req, res) {
  var ids = req.body.ids;

  Todo.remove({_id:{$in:ids}},function(err){
    getTodos(res);
  });
});

/**
 * 移动事项
 */
router.post('/api/todos/move', function(req, res){
  var ids = req.body.ids;
  Todo.update({_ids:{$in:ids}}, function(err){
    changeTodoStatus(res);
  });
});

/**
 * 改变事项状态
 * @param res
 */
function changeTodoStatus (res){
  Todo.find(function(err, todos){
    if(err)
      res.send(err);

    res.json(todos);

  });
};


module.exports = router;

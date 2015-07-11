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
 * ��ҳ
 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**
 * ��ȡ���еĴ�������
 */
router.get('/api/todos', function(req, res) {
  getTodos(res);
});

/**
 * �����������
 */
router.post('/api/todos', function(req, res) {
  Todo.create({
    name:req.body.name,
    text:req.body.text,
    status:req.body.status,
    done:false //�Ƿ����Ĭ�ϸ�false
  },function(err,todo){
    getTodos(res);
  });
});

/**
 * ɾ����������
 */
router.post('/api/todos/delete', function(req, res) {
  var ids = req.body.ids;

  Todo.remove({_id:{$in:ids}},function(err){
    getTodos(res);
  });
});

/**
 * �ƶ�����
 */
router.post('/api/todos/move', function(req, res){
  var ids = req.body.ids;
  Todo.update({_ids:{$in:ids}}, function(err){
    changeTodoStatus(res);
  });
});

/**
 * �ı�����״̬
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

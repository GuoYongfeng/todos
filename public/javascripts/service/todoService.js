/**
 * Created by Administrator on 2015/7/10.
 */
angular.module('todoModule').factory('todoService',function($http){
    return {
        get:function(){
            return $http.get('/api/todos');
        },
        create:function(todoData){
            return $http.post('/api/todos',todoData);
        },
        delete:function(ids){
            return  $http.post('/api/todos/delete',{ids:ids});
        },
        move: function (ids) {
            return  $http.post('/api/todos/move',{ids:ids});
        }
    }
});
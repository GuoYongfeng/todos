/**
 * Created by Administrator on 2015/7/10.
 */
var module = angular.module('todoModule');
var element = angular.element;

module.controller('todoController',function($scope,$http,$element,todoService){
    $scope.formData = {};
    $scope.todos = [];
    $scope.loading = true;

    /**
     * ����loadingЧ��
     */
    todoService.get().success(function(data){
        $scope.todos = data;
        $scope.loading = false;
    });

    /**
     * ���ѡ��
     */
    $scope.createTodo = function (){
        var $text = $scope.formData.text;
        var $name = $scope.formData.name;

        if($text!=undefined && $name!=undefined){
            $scope.loading = true;

            todoService.create($scope.formData).success(function(data){
                $scope.formData = {};
                $scope.todos = data;
                $scope.loading = false;
            });
        }
    };

    /**
     * ɾ��ѡ��
     */
    $scope.delete  = function(el){
        var ids = [];

        ids.push(el.todo._id);
        $scope.loading = true;
        todoService.delete(ids).success(function(data){
            $scope.todos = data;
            $scope.loading = false;
        });
    };

    /**
     * �ƶ�ѡ��
     */
    $scope.moveTo = function () {

    }
});
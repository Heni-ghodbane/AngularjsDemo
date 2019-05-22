/**
 * Created by god on 11/07/2015.
 */
'use strict';

var items = [

    {'name': 'Django Unchained', 'category_id' : 1},
    {'name': 'Forresy Gump', 'category_id' : 1},
    {'name': 'Al fatiha', 'category_id' : 2},
    {'name': 'Al baqara', 'category_id' : 2},
    {'name': 'Al fajr', 'category_id' : 2}

];
App
    .controller('itemIndex', function ($scope){

    })

    .controller('itemList', function ($scope, itemProvider){
       //$scope.items = items;

        $scope.items = itemProvider.getItems2();
    })

    .controller('itemCreate', function ($scope, categoryProvider, itemProvider){
        $scope.categories = categoryProvider.getCategories2();
        $scope.items = itemProvider.getItems2();

        $scope.createItem = function(item){
        $scope.items  = itemProvider.create(item);
        }
    })
    .controller('itemRemove', function ($scope){

    })
;
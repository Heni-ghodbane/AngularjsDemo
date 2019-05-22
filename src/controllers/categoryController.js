/**
 * Created by god on 11/07/2015.
 */

'use strict';

var categories = [

    {'id': 1, 'name': 'films'},
    {'id': 2, 'name': 'coran'}

];

App
    .controller('categoryIndex', function ($scope){

    })

    .controller('categoryList', function ($scope, categoryProvider){
        $scope.categorys = categoryProvider.getCategories2();
    })

    .controller('categoryCreate', function ($scope, categoryProvider){
        $scope.categorys = categoryProvider.getCategories2();


            $scope.createCategory = function(category) {
            $scope.categorys = categoryProvider.create(category);
            }

    })
    .controller('categoryRemove', function ($scope){

    })
;
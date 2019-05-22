/**
 * Created by god on 13/07/2015.
 */
'use strict';

App.config(function($routeProvider){

    $routeProvider

        .when('/',{
            controller:'itemIndex',
            templateUrl:'views/item/index.html'

        })


        .when('/items/',{
            controller:'itemList',
            templateUrl:'views/item/list.html'

        })

        .when('/categorys/',{
            controller:'categoryList',
            templateUrl:'views/category/list.html'

        })

        .when('/items/new',{
            controller:'itemCreate',
            templateUrl:'views/item/create.html'

        })

        .when('/categorys/new',{
            controller:'categoryCreate',
            templateUrl:'views/category/create.html'

        })
})
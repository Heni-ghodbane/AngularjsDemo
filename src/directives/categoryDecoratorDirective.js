/**
 * Created by god on 13/07/2015.
 */

'use strict';


App.directive('decorateCategory', function(){



        return{
            // template: 'Category : "{{category.name}}" son id est {{category.id}}'

            templateUrl:'views/category/directive/decorator.html',
            restrict:'C'
        }



})
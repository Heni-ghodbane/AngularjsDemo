/**
 * Created by god on 13/07/2015.
 */


'use strict';
var categories2 = [

    {'id': 1, 'name': 'films'},
    {'id': 2, 'name': 'coran'},

];

App.service('categoryProvider', function(){
    this.getCategories2 = function(){
        return categories2
    }
    this.create = function(category){
        category['id'] = categories2.length + 1;

        categories2.push(category);

        return categories2;
    }
});

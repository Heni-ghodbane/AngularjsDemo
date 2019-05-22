/**
 * Created by god on 13/07/2015.
 */

'use strict';

var items2 = [

    {'name': 'Django Unchained', 'category_id' : 1},
    {'name': 'Forresy Gump', 'category_id' : 1},
    {'name': 'Al fatiha', 'category_id' : 2},
    {'name': 'Al baqara', 'category_id' : 2},
    {'name': 'Al fajr', 'category_id' : 2}

];

App.service('itemProvider', function(){
this.getItems2 = function(){
    return items2
}

this.create = function(item){
    items2.push(item);

    return items2;
}



});
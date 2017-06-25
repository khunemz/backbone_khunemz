define([
    'jquery' , 
    'underscore' , 
    'backbone'
] , function ($ , _ , Backbone) {
    'use strict';

    var AboutView = Backbone.View.extend({
     
        initialize: function () {

        } ,
        events: {

        },
        
        render: function() {
            var html = '<h2>About</h2>';
            this.$el.html(html);
            return this;
        } 
    });
    return AboutView;
});
define([
    'require',
    'underscore',
    'backbone'
], function ($, _, Backbone) {
    'use strict';

    var Router = Backbone.Router.extend({
        routes: {
            '': 'goToDash' ,
            'dash': 'goToDash',
            'about': 'goToAbout',
        } , 
        initialize: function(view) {
            this.appView = view;
        } , 

        goToDash: function (place) {
            this.appView.setPage('dash');
            if (place) {
                // do somethings
           
            }

        } , 
        goToAbout: function () {
            this.appView.setPage('about');
        }
        
    });
    return Router;
});
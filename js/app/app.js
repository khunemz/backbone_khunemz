define([
    'backbone' , 
    'js/app/views/app' , 
    'js/app/routes/router'
],
    function (Backbone ,  AppView , Router) {
        'use strict';

    
        var initialize = function () {
            var appView = new AppView();
            $('body').append(appView.el);
            var router = new Router(appView);
            Backbone.history.start();
        };

        return {
            initialize: initialize,

        };
    }
);
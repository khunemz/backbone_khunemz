
require.config({
    paths: {
        'jquery': 'js/vendor/jquery-1.11.2.min' , 
        'underscore': 'js/vendor/underscore' , 
        'backbone': 'js/vendor/backbone' , 
        'bootstrap': 'js/vendor/bootstrap'
    } , 
    // deps = dependencies
    shim: {
        'underscore': {
            exports: '_' 
        }, 
        'backbone': {
            deps:[
                'underscore' , 
                'jquery'
            ] , 
            exports: 'Backbone'
        },
        'bootstrap': {
            deps: [
                'jquery'
            ]
        }
    }
});

require([
    'backbone' , 
    'js/app/app'
] , function (Backbone, App) {
    'use strict';

    App.initialize();
});
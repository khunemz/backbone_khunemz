define([
    'jquery',
    'underscore',
    'bootstrap',
    'backbone',
    'js/app/views/about',
    'js/app/views/dash',
], function ($, _, bootstrap, Backbone, AboutView , DashView) {
    'use strict';

    var AppView = Backbone.View.extend({
        id: 'app-view',
        html: [
            '<div class="navbar">',
            '<a class="navbar-brand" href="#">Weather Watcher</a>',
            '<ul class="nav navbar-nav">',
            '<li id="nav-dash"><a href="#">Dashboard</a></li>',
            '<li id="nav-about"><a href="#">About</a></li>',
            '</ul>',
            '</div>',
            '<div id="content"></div>'

        ].join(''),

        events: {
            'click #nav-dash': 'onNavDash',
            'click #nav-about': 'onNavAbout'
        },
        views: {},
        initialize: function () {
            this.$el.append(this.html);
        },

        onNaveDash: function () {

        },
        onNavAbout: function () {

        }
    });

    return AppView;
});
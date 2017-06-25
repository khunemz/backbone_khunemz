define([
    'jquery',
    'underscore',
    'bootstrap',
    'backbone',
    'js/app/views/about',
    'js/app/views/dash',
], function ($, _, bootstrap, Backbone, AboutView, DashView) {
    'use strict';

    var AppView = Backbone.View.extend({
        id: 'app-view',
        html: [
            '<div class="navbar">',
            '<a class="navbar-brand" href="#">Weather Watcher</a>',
            '<ul class="nav navbar-nav">',
            '<li id="nav-dash"><a href="#dash">Dashboard</a></li>',
            '<li id="nav-about"><a href="#about">About</a></li>',
            '</ul>',
            '</div>',
            '<div id="content"></div>'

        ].join(''),

        events: {
            // 'click #nav-dash': 'onNavDash',
            // 'click #nav-about': 'onNavAbout'
        },
        views: {},
        initialize: function () {

            this.views.about = new AboutView({
                id: 'page-about',
                className: 'page-view'
            });

            this.views.dash = new DashView({
                id: 'dash-about',
                className: 'dash-view'
            });
            this.$el.append(this.html);
            this.$('#content').append(this.views.about.render.el);
            this.$('#content').append(this.views.dash.render.el);

        },

        setPage: function (page) {
            thils.$('.nav li').removeclass('active');
            this.$('.page-view').hide();
            this.$('#page-' + page).show();
            this.$('nav-' + page).addClass('active');
        }
    });

    return AppView;
});
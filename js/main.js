/*
 * Created by Emmett on 09/12/2015.
 *
 * Author: Emmett Daly
 * Android Care Web Application
 *
 * Description:
 *           This is the controller class for the Angular Web Application 'Android Care'
 *
 *           -> First, we identify the application we are targeting by the angular.module line:
 *                 Here , we have called it androidCareWebApp.
 *                 If we check our main index.html file, we see the line:
 *                            <body ng-app="androidCareWebApp">
 *                 This is how angular identifies the application we are targeting.
 *                 This is a variable, can be anything
 *           -> Next, within our index.html file, we have a number of custom angular tags:
 *                 <div ng-include='"templates/header.html"'></div>
 *                 <div ng-view></div>
 *                 <div ng-include='"templates/footer.html"'></div>
 *                 These three elements are containers for the html files as indicated with the routeProvider module in this file
 *                 The header and footer are always included on each page, the ng-view is where the magic happens:
 *                       The routeProvider detects which <a href link was clicked and injects the correct content
 *
 * */
var app = angular.module('androidCareWebApp', [
    'ngRoute',
    'ngDialog'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        // Home
        .when("/", {templateUrl: "pages/home.html", controller: "PageCtrl"})
        // Pages
        .when("/about", {templateUrl: "pages/about.html", controller: "PageCtrl"})
        .when("/services", {templateUrl: "pages/services.html", controller: "PageCtrl"})
        .when("/contact", {templateUrl: "pages/contact.html", controller: "PageCtrl"})
		.when("/me", {templateUrl: "pages/aboutMe.html", controller: "PageCtrl"})
		.when("/tech", {templateUrl: "pages/tech.html", controller: "PageCtrl"})
        // else 404
        .otherwise("/404", {templateUrl: "pages/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {

    // Activates Tooltips for Social Links for bootstrap tooltips
    $('.tooltip-social').tooltip({
        selector: "a[data-toggle=tooltip]"
    })
});

app.controller('navbarController', function ($scope /* $location, $http */) {


    $('#nav-expander').on('click',function(e){
        e.preventDefault();
        $('body').toggleClass('nav-expanded');
    });
    $('#nav-close').on('click',function(e){
        e.preventDefault();
        $('body').removeClass('nav-expanded');
    });
    // Initialize navgoco with default options
    $(".main-menu").navgoco({
        caret: '<span class="caret"></span>',
        accordion: false,
        openClass: 'open',
        save: true,
        cookie: {
            name: 'navgoco',
            expires: false,
            path: '/'
        },
        slide: {
            duration: 300,
            easing: 'swing'
        }
    });

});


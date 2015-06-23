var app = angular.module('fileUploadApp', ['ngRoute','angularFileUpload'])
  .config(function( $routeProvider) {

    $routeProvider.
    when('/uploadFile', {
      templateUrl: 'partials/uploadFile.html',
      controller: 'MainController'
    })
  });

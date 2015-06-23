app.controller('MainController', function($scope, $upload) {

  $scope.fileSelected = function(files) {
    if (files && files.length) {
    $scope.file = files[0];
    }
  };

  $scope.process = function() {
      $upload.upload({
      url: '/api/upload',
      file: $scope.file
    }).success(function(data) {
      console.log(data);
    });
  };
});

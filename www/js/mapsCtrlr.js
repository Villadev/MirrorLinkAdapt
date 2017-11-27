angular.module('app.mapControllers', [])
  .controller('mapCtrl', ['$scope', '$stateParams', '$compile', '$cordovaGeolocation',
    function ($scope, $stateParams, $compile, $cordovaGeolocation) {
      console.log("MapsCtrlr");

      $scope.goHome = function () {
        $state.go('menu.home');
      };

      var options = {timeout: 10000, enableHighAccuracy: true};

      $cordovaGeolocation.getCurrentPosition(options).then(function(position){
        var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        var mapOpts = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        $scope.map = new google.maps.Map(document.getElementById('map'), mapOpts);

      }, function(error){
          console.log("No s'ha trobat la direcció");
      });

      // console.log(google);

    }]);


/**
 * Created by AWS2-25 on 27/11/2017.
 */
angular.module('app.navigationComp', [])
  .controller('navigationCtrl', ["$scope", "$state", "$stateParams",
  function ($scope, $state,$stateParams) {

    $scope.goHome = function () {
      $state.go('menu.home');
    };
  }]);

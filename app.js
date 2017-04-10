'use strict';
// Declare app level module which depends on views, and components
var PhoneApp = angular.module('PhoneApp', []);
PhoneApp.controller('PhoneListController1',function PhoneListController1($scope){
  $scope.phones = [
    {    name : 'Nexus s',
         snippet:'Fast just got faster with Nexus S.',
    },
    {    name : 'Motorola XOOM™ with Wi-Fi',
         snippet:'The Next, Next Generation tablet.',
    },
    {    name : 'Motorola XOOM™',
         snippet:'The Next, Next Generation tablet.',
    }
  ];
});

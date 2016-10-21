'use strict';

export default function($stateProvider) {
    $stateProvider.state('resume', {
        url: '/resume',
        template: require('./resume.html'),
        parent: 'base',
        controller: function($scope, constants) {
            $scope.siteName = constants.siteName;
        }
    });
}

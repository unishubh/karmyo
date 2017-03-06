/**
 * Created by Prateek on 5/2/2016.
 */
app.filter('capitalize', function() {
    return function(input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});


app.controller('profilectrl', ['$scope','causes','API', 'Auth','$mdToast', '$animate','$state', function($scope,causes, API, Auth,$mdToast,$animate,$state){


    console.log(causes);

    $scope.details=causes.data.data[0];

    console.log($scope.details);

}]);/**
 * Created by Prateek on 5/3/2016.
 */

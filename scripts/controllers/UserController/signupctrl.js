    /**
 * Created by Prateek on 3/14/2016.
 */
/**
 * Created by Prateek on 3/5/2016.
 */

var compareTo = function() {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=compareTo"
        },
        link: function(scope, element, attributes, ngModel) {

            ngModel.$validators.compareTo = function(modelValue) {
                return modelValue == scope.otherModelValue;
            };

            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
    };
};

    app.directive("compareTo", compareTo);

app.controller('signup_ctrl', ['$scope','API','toastr', '$animate','$state', function($scope,API,toastr, $animate,$state) {

    $scope.user={};



    $scope.signup=function(){

        console.log($scope);

        var data= $.param({
            name:$scope.user.name,
            username:$scope.user.username,
            password:$scope.password,
            mobile_no:$scope.user.mobile_no,
            email:$scope.user.email
        });

        console.log(data);
        API.signup(data)
            .then(function(response){
                console.log(response);
                if(response.data['success'])
                {
                    $state.go('dashboard.signin');
                    toastr.success(response.data['message']);
                }
                else
                {
                    toastr.error(response.data['message']);
                }


            });
    }

    $scope.showSimpleToast = function(data) {
        $mdToast.show(
            $mdToast.simple()
                .content(data)
                .position('top left')
                .hideDelay(3000)
        );
    };




}]);
/**
 * Created by Prateek on 5/2/2016.
 */
app.filter('capitalize', function() {
    return function(input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});


app.controller('homectrl', ['$scope','causes','toastr','API', 'Auth','$mdToast', '$animate','$state', function($scope,causes,toastr, API, Auth,$mdToast,$animate,$state){


    console.log(causes);

    $scope.lists=causes.data.data;
    console.log($scope.lists);


    $scope.fundgo=function(id){

        console.log(Auth.isLoggedIn());
        if(Auth.isLoggedIn()){

            $state.go('dashboard.funddetail',{_id:id})
        }
        else
        {
            console.log(id);
            $state.go('dashboard.signin');
            toastr.info('', 'Please Login to Join');
        }
    }

    $scope.eventgo=function(id){

        if(Auth.isLoggedIn()){

            $state.go('dashboard.eventdetail',{_id:id})
        }
        else
        {
            $state.go('dashboard.signin');
            toastr.info('', 'Please Login to Join');
        }
    }

    $scope.storygo=function(id){

        if(Auth.isLoggedIn()){

            $state.go('dashboard.story')
        }
        else
        {
            $state.go('dashboard.signin');
            toastr.info('', 'Please Login to Join');
        }
    }

    $scope.checkchange=function(id){


            $scope.lists=[];
            angular.forEach(causes.data.data, function(value) {


                if(value.type=="event" && $scope.event)
                {
                    $scope.lists.push(value);
                }

                else if(value.type=="fundraiser" && $scope.funder)
                {

                    $scope.lists.push(value);
                }
                else if(value.type=="story" && $scope.story)
                {
                    $scope.lists.push(value);
                }
                console.log( $scope.lists);

            });

        if($scope.lists.length==0)
        {
            $scope.lists=causes.data.data;
        }



    }


}]);
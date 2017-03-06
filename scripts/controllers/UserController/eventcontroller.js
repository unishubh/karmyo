/**
 * Created by Prateek on 4/27/2016.
 */

app.filter('capitalize', function() {
    return function(input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});


app.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);




app.controller('eventcontroller', ['$scope','Auth','toastr','Upload','causes','ngos','cities','API', '$animate','$state', function($scope,Auth,toastr,Upload,causes,ngos,cities,API, $animate,$state) {


    console.log(causes);

    console.log(cities);

    $scope.citylist=cities.data;
    $scope.ngolist=ngos.data;
    $scope.causelist=causes.data;

    $scope.myImage='images/p0.jpg';
    $scope.myCroppedImage='';
    $scope.cropType="circle";

    var handleFileSelect=function(evt) {
        var file=evt.currentTarget.files[0];
        var reader = new FileReader();
        reader.onload = function (evt) {
            $scope.$apply(function($scope){
                $scope.myImage=evt.target.result;
            });
        };
        reader.readAsDataURL(file);
    };
    angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);


    $scope.event={}



    $scope.create_event=function(filep) {

        console.log("GOT IR");

        //
        Upload.upload({
            url: 'http://54.169.67.178:8095/add_events',
            data: {
                name: $scope.event.name,
                description: $scope.event.description,
                social_impact:$scope.event.social_impact,
                start_date:$scope.start,
                end_date:$scope.finish,
                start_time:$scope.start_time,
                end_time:$scope.end_time,
                city_id:$scope.event.cities,
                address_line_1:$scope.event.address_line_1,
                address_line_2:$scope.event.address_line_2,
                cause_id:$scope.event.causes,
                ngo_id:$scope.event.ngos_fund,
                amount_expected:$scope.event.amount_expected,
                file: filep,
                token:Auth.getToken()
            },
            headers: {},
        }).then(function (resp) {

            $state.go($state.current, {}, {reload: true});
            toastr.success('', 'Event Created');



        }, function (resp) {

            console.log(resp);
            toastr.error('', 'Some Error Occured');

        }, function (evt) {
            //var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            //$scope.progress = progressPercentage;
            //$timeout(function() {
            //    $scope.progress=0;
            //    $scope.$apply();
            //}, 3000);
        })
    }



}]);



app.controller('eventdetailcontroller', ['$scope','causes','Auth','toastr','Upload','API','$animate','$state', function($scope,causes,Auth,toastr,Upload,API, $animate,$state) {



    $scope.user_going=function(id){

        if(!Auth.isLoggedIn()){

            $state.go('dashboard.signin');
            toastr.info('', 'Please Login to Join');
        }
        else {
            API.user_going(id).then(function (response) {

                console.log(response);
                $state.go('dashboard.home', {}, {reload: true});
                toastr.success('', 'Thanks for Joining us');
            });
        }
    }

    $scope.url='http://54.169.67.178:8095/share_events/43'
    if(causes.hasOwnProperty('data')) {
        $scope.event = causes.data.data[0];

        console.log($scope.event);

        $scope.latest=causes.data.data['similar_events'];
        console.log($scope.latest);
        $scope.members=causes.data.data['member_going'];
        console.log($scope.members);
        $scope.map_address=$scope.event.address_line_1+ ' '+ $scope.event.address_line_2+' '+ $scope.event.city;
        $scope.going=causes.data.data.going;
    }


}]);
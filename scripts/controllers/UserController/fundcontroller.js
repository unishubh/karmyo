/**
 * Created by Prateek on 4/27/2016.
 */

/**
 * Created by Prateek on 4/27/2016.
 */


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




app.controller('fundcontroller', ['$scope','Auth','toastr','Upload','causes','ngos','API', '$animate','$state', function($scope,Auth,toastr,Upload,causes,ngos,API, $animate,$state) {


    console.log(causes);

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


    $scope.fund={}



    $scope.create_fund=function(filep) {

        console.log($scope.fund.ngo);

        //
        Upload.upload({
            url: 'http://54.169.67.178:8095/add_fundraisers',
            data: {
                name: $scope.fund.name,
                description: $scope.fund.description,
                start_date:$scope.start,
                end_date:$scope.finish,
                ngo_id:$scope.fund.ngo,
                amount_expected:$scope.fund.amount_expected,
                file: filep,
                token:Auth.getToken()
            },
            headers: {},
        }).then(function (resp) {

            console.log(resp);
            $state.go('dashboard.home', {}, {reload: true});
            toastr.success('', 'Fundraiser Created');



        }, function (resp) {

            console.log(resp);
            toastr.error('', 'Some Error Occured');

        }, function (evt) {

        })
    }



}]);






app.controller('funddetailcontroller', ['$scope','causes','Auth','Upload','API','$animate','$state', function($scope,causes,Auth,Upload,API, $animate,$state) {




    if(causes.hasOwnProperty('data')) {
        $scope.fund = causes.data.data[0];

        console.log($scope.fund);

        $scope.latest=causes.data.data['similar_fundraiser'];
        console.log($scope.latest);

    }


}]);

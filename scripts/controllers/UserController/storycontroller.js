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




app.controller('storycontroller', ['$scope','Auth','toastr','Upload','API','$animate','$state', function($scope,Auth,toastr,Upload,API, $animate,$state) {



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


    $scope.story={}



    $scope.create_event=function(filep) {

        Upload.upload({
            url: 'http://54.169.67.178:8095/add_stories',
            data: {
                title: $scope.story.name,
                subtitle:$scope.story.subtitle,
                content: $scope.story.description,
                file: filep,
                token:Auth.getToken()
            },
            headers: {},
        }).then(function (resp) {
            console.log(resp);
           // alert("#/main/story/"+resp.data);
            //$state.go('dashboard.home', {}, {reload: true});
            window.location.href="#/main/story/"+resp.data;
            toastr.success('', 'Story Created');


        }, function (resp) {
            console.log(resp.data.message);
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






app.controller('storydetailcontroller', ['$scope','causes','Auth','Upload','API','$animate','$state', function($scope,causes,Auth,Upload,API, $animate,$state) {


    if(causes.hasOwnProperty('data')) {
        $scope.story = causes.data.data[0];
        console.log($scope.story);

        $scope.latest=causes.data.data['latest_stories'];
        console.log($scope.latest);
    }


}]);
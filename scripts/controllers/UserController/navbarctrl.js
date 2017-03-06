/**
 * Created by Prateek on 5/2/2016.
 */



app.controller('navbarctrl', ['$scope','$modal','API', 'Auth','toastr', '$animate','$state', function($scope,$modal, API, Auth,toastr,$animate,$state){

    $scope.conditioncheck=Auth.getRole();

    $scope.logged=Auth.isLoggedIn();


    $scope.gotocreate=function(){

        console.log("hello");
        if(Auth.isLoggedIn()) {
            var modalInstance = $modal.open({
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrljob',
                windowClass: 'center-modal'
            });
        }
        else
        {
            $state.go('dashboard.signin',{}, {reload: true});

            toastr.info('', 'Please Login to Continue');
        }

    }



    $scope.getprofilepic =  function(){
        console.log(Auth.getToken());
        API.getprofilepic()
            .then(function(response){
                $scope.pic=response.data.data[0].file_url;
            });
    };

    if($scope.logged) {
        $scope.getprofilepic();
    }

    $scope.logout =  function(){
        console.log(Auth.getToken());
        API.logout()
            .then(function(response){
                if(response) {
                    //$state.go('dashboard.signin',{}, {reload: true});
                    window.location.href="/login.html";

                    //toastr.success('', 'Successfully Logged Out');
                }
            });
    };




}]);


app.controller('ModalInstanceCtrljob', function ($scope,$state,$modalInstance,$timeout,API) {

    $scope.closeit = function () {
        $state.go($state.current, {}, {reload: true});
        $modalInstance.dismiss('cancel');
    };

    $scope.gotc=function(){
        $modalInstance.dismiss('cancel');
        $state.go('dashboard.event',{}, {reload: true});
    }

   /* $scope.gotf=function(){
        $modalInstance.dismiss('cancel');
        $state.go('dashboard.fundraiser',{}, {reload: true});
    }*/

    $scope.gots=function(){
        $modalInstance.dismiss('cancel');
        $state.go('dashboard.story',{}, {reload: true});
    }

})
/**
 * Created by Prateek on 3/5/2016.
 */
app.controller('signin_ctrl', ['$scope','API','toastr', '$animate','$state', function($scope,API,toastr,  $animate,$state) {

    $scope.login=function(){
    var data = $.param({
        email : $scope.user.email,
        password : $scope.user.password,
        device_id : 'Web_102',
    });
    //console.log(data);
    API.login(data).then(function(response){
        console.log(response.data.success);
        if(response.data.success)
            $state.go('dashboard.home', {}, { reload: true });
        else toastr.error(response.data['message']);

    });
}


    $scope.login_fb=function(data){
      console.log(data);
        var jsonObj = JSON.parse(data);
        console.log(jsonObj);

        var data2 = $.param({
            email : jsonObj['email'],
            name : jsonObj['name'],
            gender : jsonObj['gender'],
            file_url :jsonObj.picture.data.url,
            fb_id : jsonObj['id'],
            device_id : 'Web_102',
        });


        console.log(data2);

        API.fb_login(data2).then(function(response){
            console.log(response.data.success);
            if(response.data.success)
                $state.go('dashboard.home', {}, { reload: true });
            else  toastr.error(response.data['message']);

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
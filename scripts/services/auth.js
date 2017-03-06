/**
 * Created by Prateek on 3/5/2016.
 */

app.factory('Auth', ['$http', '$state' ,'$window', function($http,$state,$window) {
    var url='http://54.169.67.178:8095/';
    var auth = {
        saveToken: function (data){
            $window.localStorage['_cream'] =data.data['token'];
            return true;
        },

        getToken: function (){
            return $window.localStorage['_cream'];
        },

        getRole: function (){
            return $window.localStorage['_biscuit'];

        },

        isVerified: function(data){
            return $http.post(url+'/is_verified', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
        },


        isLoggedIn: function(){
            var token = auth.getToken();
            if(token){
                return true;
            }
            else{
                return false;
            }
        },

        authorizead: function(){
            var token = auth.getRole();
            if(token=='admin'){
                return true;
            }
            else{
                return false;
            }
        },
        authorizetp: function(){
            var token = auth.getRole();
            if(token=='tpo'){
                return true;
            }
            else{
                return false;
            }
        },

        authorizest: function(){
            var token = auth.getRole();
            if(token=='student'){
                return true;
            }
            else{
                return false;
            }
        },

        logout: function(){

            $window.localStorage.removeItem('_cream');
            $window.localStorage.removeItem('_biscuit');
            //alert("Yahan");


        }

    }

    return auth;

}]);






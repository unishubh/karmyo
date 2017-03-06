/**
* Created by Prateek on 3/5/2016.
 */
app.factory('API', ['$http', '$state' ,'Auth', function($http,$state,Auth) {
    var url='http://54.169.67.178:8095';
    return {

        //Login and Signup

        login: function(user){
            return $http.post(url+'/login', user, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
                .then(function(data){
                        Auth.saveToken(data);
                        return data;
                    },
                    function(error) {
                        return error;
                    });
        },

        fb_login: function(user){
            return $http.post(url+'/fb_login', user, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
                .then(function(data){
                    Auth.saveToken(data);
                    return data;
                },
                function(error) {
                    return error;
                });
        },

        signup: function(user){
            return $http.post(url+'/register', user, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    });
        },

        logout: function(){
            return   $http.post(url+'/logout', {token : Auth.getToken()}, { headers: { 'Content-Type': 'application/json' } })
                .then(function(data){
                    Auth.logout(data);
                    
                    return true;
                },
                function(error) {
                    return false;
                }
            );
        },


        getstorydata: function(id){
            return   $http.post(url+'/get_stories/'+id,{token : Auth.getToken()}, { headers: { 'Content-Type': 'application/x-www-form-urlencoded'} })
                .then(function(data){
                    return data;
                },
                function(error) {
                    return error;
                }
            );
        },

        getprofile: function(){
            return   $http.post(url+'/user_details/',{token : Auth.getToken()}, { headers: { 'Content-Type': 'application/json'} })
                .then(function(data){
                    return data;
                },
                function(error) {
                    return error;
                }
            );
        },

        gethomedata: function(id){
            return   $http.post(url+'/home_data',{token : Auth.getToken()}, { headers: { 'Content-Type': 'application/x-www-form-urlencoded'} })
                .then(function(data){
                    return data;
                },
                function(error) {
                    return error;
                }
            );
        },

        user_going: function(id){
            return   $http.post(url+'/event_going',{event_id:id,token : Auth.getToken()}, { headers: { 'Content-Type': 'application/json'} })
                .then(function(data){
                    return data;
                },
                function(error) {
                    return error;
                }
            );
        },


        getprofilepic: function(id){
            return   $http.post(url+'/get_profile_pic',{token : Auth.getToken()}, { headers: { 'Content-Type': 'application/json'} })
                .then(function(data){
                    return data;
                },
                function(error) {
                    return error;
                }
            );
        },

        geteventdata: function(id){
            return   $http.post(url+'/get_events/'+id,{token : Auth.getToken()}, { headers: { 'Content-Type': 'application/json'} })
                .then(function(data){
                    return data;
                },
                function(error) {
                    return error;
                }
            );
        },

        getfunddata: function(id){
            return   $http.post(url+'/get_fundraisers/'+id,{token : Auth.getToken()}, { headers: { 'Content-Type': 'application/x-www-form-urlencoded'} })
                .then(function(data){
                    return data;
                },
                function(error) {
                    return error;
                }
            );
        },




        getcauses: function(){
            return   $http.get(url+'/get_causes',{ headers: { 'Content-Type': 'application/x-www-form-urlencoded'} })
                .then(function(data){
                    return data;
                },
                function(error) {
                    return error;
                }
            );
        },




        getngos: function(){
            return   $http.get(url+'/get_ngos', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
                .then(function(data){
                    return data;
                },
                function(error) {
                    return error;
                }
            );
        },


        getcities: function(){
            return   $http.get(url+'/get_cities', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
                .then(function(data){
                    return data;
                },
                function(error) {
                    return error;
                }
            );
        },

        //College Data Admin

        verifytpo: function(data){
            return   $http.post(url+'/admin/verify_tpo',data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },


        get_student: function(){
            return   $http.get(url+'/admin/student', { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        get_tpo: function(){
            return   $http.get(url+'/admin/verified_tpo', { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        tpo_unverified: function(){
            return   $http.get(url+'/admin/unverified_tpo', { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        stud_unverified: function(){
            return   $http.get(url+'/tpo/unverified_student', { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        stud_verified: function(){
            return   $http.get(url+'/tpo/verified_student', { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        verifystud: function(data){
            return   $http.post(url+'/tpo/verify_student',data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },


        // Colleges and Branches


        getcollege: function(){
            return   $http.get(url+'/colleges', { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        addcolleges: function(data){
            return   $http.post(url+'/colleges',data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        getbranches:function(data){
            return   $http.post(url+'/colleges/branch',data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        addbranches: function(data){
            return   $http.post(url+'/colleges/add_branch',data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },



        //Profile TPO

        getprofiletpo: function(){
            return   $http.get(url+'/tpo/profile', { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },


        updateprofiletpo: function(data){
            return   $http.post(url+'/tpo/update_profile',data, { headers: { 'Content-Type': 'application/json', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },




        ///Video Admin

        videotype: function(){
            return   $http.get(url+'/videos/admin/type', { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        upload_url:function(data){

            return   $http.post(url+'/videos/admin/video',data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );

        },


        getvideos: function(){
            return   $http.get(url+'/videos/admin/video', { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        gettypevideos: function(data){
            return   $http.get(url+'/videos/admin/type/id?name='+data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                    console.log(data);
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        gettubevideos: function(){
            return   $http.get(url+'/videos/admin/youtube_video', { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        deletevideo: function(data){
            return   $http.delete(url+'/videos/admin/video', { headers: { 'Content-Type': 'application/x-www-form-urlencoded','_id':data, 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },


        getvideodetails: function(data){
            return   $http.get(url+'/videos/admin/video/id/'+data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                    console.log(data);
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        getnotes: function(data){
            return   $http.get(url+'/videos/notes/'+data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        savenotes: function(data){
            return   $http.put(url+'/videos/notes',data, { headers: { 'Content-Type': 'application/json', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        editvideodetails: function(data){
            return   $http.put(url+'/videos/admin/video/',data, { headers: { 'Content-Type': 'application/json', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        addvideotype: function(data){
            return   $http.post(url+'/videos/admin/type',data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        deletevideotype: function(data){
            return   $http.delete(url+'/videos/admin/type', { headers: { 'Content-Type': 'application/x-www-form-urlencoded','type_id':data, 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        videotype: function(){
            return   $http.get(url+'/videos/admin/type', { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        likevideo :function(data){
        return   $http.post(url+'/videos/like', data, { headers: { 'Content-Type': 'application/json', 'x-access-token':Auth.getToken() } })
            .then(function(data){
                    return data;
                },
                function(error) {
                    return error;
                }
            );
        },

        dislikevideo :function(data){
            return   $http.post(url+'/videos/dislike', data, { headers: { 'Content-Type': 'application/json', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },







        ////<------COmmeneted and Tested----------->/////


        //HR ADMIN
        get_hr_data: function(){
            return   $http.get(url+'/hr/admin', { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        //HR TPO

        addgroup: function(data){
            return   $http.post(url+'/hr/groups',data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },


        deletegroup: function(data){
            return   $http.delete(url+'/hr/groups', { headers: { 'Content-Type': 'application/x-www-form-urlencoded', id:data , 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        addhr: function(data){
            return   $http.post(url+'/hr',data, { headers: { 'Content-Type': 'application/json', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        puthr: function(data){
            return   $http.put(url+'/hr',data, { headers: { 'Content-Type': 'application/json', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },


        hrgroups:function(){
            return   $http.get(url+'/hr/groups', { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );

        },

        taghr:function(data){
            return   $http.post(url+'/hr/groups/assign',data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );

        },

        hrdata:function(fold){
            return   $http.get(url+'/hr/groups/list?name='+fold , { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );

        },

        hrdatadelete:function(data){
            return   $http.delete(url+'/hr', { headers: { 'Content-Type': 'application/x-www-form-urlencoded','id':data, 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );

        },

        hrdataraw:function(){
            return   $http.get(url+'/hr' , { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );

        },


        hrdataid:function(data){
            return   $http.get(url+'/hr?_id='+data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );

        },

        //JOBs ADMIN


        submitnewjobadmin: function(data){
            return   $http.post(url+'/jobs/admin',data, { headers: { 'Content-Type': 'application/json', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        getjobadmin: function(){
            return   $http.get(url+'/jobs/admin', { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        loadjobadmin: function(data){
            return   $http.get(url+'/jobs/admin?_id='+data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        updatejobadmin: function(data){
            return   $http.put(url+'/jobs/admin',data, { headers: { 'Content-Type': 'application/json', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        jobdeleteadmin:function(data){
            return   $http.delete(url+'/jobs/admin', { headers: { 'Content-Type': 'application/x-www-form-urlencoded','_id':data, 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );

        },



        //JOBS TPO




        submitnewjob: function(data){
            return   $http.post(url+'/jobs/tpo',data, { headers: { 'Content-Type': 'application/json', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        getjob: function(){
            return   $http.get(url+'/jobs/tpo', { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        adminjob: function(){
            return   $http.get(url+'/jobs/jobs_of_admin', { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        loadjob: function(data){
            return   $http.get(url+'/jobs/tpo?_id='+data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        loadjobadmin: function(data){
            return   $http.get(url+'/jobs/jobs_of_admin/'+data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        updatejob: function(data){
            return   $http.put(url+'/jobs/tpo',data, { headers: { 'Content-Type': 'application/json', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        jobdelete:function(data){
            return   $http.delete(url+'/jobs/tpo', { headers: { 'Content-Type': 'application/x-www-form-urlencoded','id':data, 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );

        },

        star_job_tpo: function(data){
            return   $http.post(url+'/jobs/owner_starred', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },


        //Intern Super admin

        submitnewinternadmin: function(data){
            return   $http.post(url+'/internships/admin',data, { headers: { 'Content-Type': 'application/json', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        getinternadmin: function(){
            return   $http.get(url+'/internships/admin', { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        loadinternadmin: function(data){
            return   $http.get(url+'/internships/admin?_id='+data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        updateinternadmin: function(data){
            return   $http.put(url+'/internships/admin',data, { headers: { 'Content-Type': 'application/json', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        interndeleteadmin:function(data){
            return   $http.delete(url+'/internships/admin', { headers: { 'Content-Type': 'application/x-www-form-urlencoded','_id':data, 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );

        },

        star_intern_tpo: function(data){
            return   $http.post(url+'/internships/owner_starred', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },


        //Intern TPO

        submitnewintern: function(data){
            return   $http.post(url+'/internships/tpo',data, { headers: { 'Content-Type': 'application/json', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        getintern: function(){
            return   $http.get(url+'/internships/tpo', { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        adminintern: function(){
            return   $http.get(url+'/internships/internships_of_admin', { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        loadintern: function(data){
            return   $http.get(url+'/internships/tpo?_id='+data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        loadinternadmin: function(data){
            return   $http.get(url+'/internships/internships_of_admin/'+data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        updateintern: function(data){
            return   $http.put(url+'/internships/tpo',data, { headers: { 'Content-Type': 'application/json', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        interndelete:function(data){
            return   $http.delete(url+'/internships/tpo', { headers: { 'Content-Type': 'application/x-www-form-urlencoded','id':data, 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );

        },



        //Project Admin

        submitnewprojectadmin: function(data){
            return   $http.post(url+'/projects/admin',data, { headers: { 'Content-Type': 'application/json', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        getprojectadmin: function(){
            return   $http.get(url+'/projects/admin', { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        loadprojectadmin: function(data){
            return   $http.get(url+'/projects/admin?_id='+data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        updateprojectadmin:  function(data){
            return   $http.put(url+'/projects/admin',data, { headers: { 'Content-Type': 'application/json', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        projectdeleteadmin:function(data){
            return   $http.delete(url+'/projects/admin', { headers: { 'Content-Type': 'application/x-www-form-urlencoded','_id':data, 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );

        },

        star_project_tpo: function(data){
            return   $http.post(url+'/projects/owner_starred', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },



        //Project TPO

        submitnewproject: function(data){
            return   $http.post(url+'/projects/tpo',data, { headers: { 'Content-Type': 'application/json', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        getproject: function(){
            return   $http.get(url+'/projects/tpo', { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        adminproject: function(){
            return   $http.get(url+'/projects/projects_of_admin', { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        loadproject: function(data){
            return   $http.get(url+'/projects/tpo?_id='+data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        loadprojectadmin: function(data){
            return   $http.get(url+'/projects/projects_of_admin/'+data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        updateproject:  function(data){
            return   $http.put(url+'/projects/tpo',data, { headers: { 'Content-Type': 'application/json', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        projectdelete:function(data){
            return   $http.delete(url+'/projects/tpo', { headers: { 'Content-Type': 'application/x-www-form-urlencoded','id':data, 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );

        },

        getstudent:function()
        {
            return   $http.get(url+'/tpo/unverified_student', { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },


        //NOTICES

        //ADMIN

        post_notice_admin: function(data){
            return   $http.post(url+'/notices/admin',data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },


        delete_notice: function(data){
            return   $http.delete(url+'/notices', { headers: { 'Content-Type': 'application/x-www-form-urlencoded','_id':data, 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        get_notice: function(){
            return   $http.get(url+'/notices', { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },


        star_notice_admin: function(data){
            return   $http.post(url+'/notices/owner_starred', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        get_notice_detail: function(data){
            return   $http.get(url+'/notices/'+data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },



        //Notices TPO

        post_notice: function(data){
            return   $http.post(url+'/notices/tpo',data, { headers: { 'Content-Type': 'application/json', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },


        get_notice_of_admin: function(){
            return   $http.get(url+'/notices/notices_of_admin', { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        star_notice_tpo: function(data){
            return   $http.post(url+'/notices/owner_starred', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },

        get_notice_detail_of_admin: function(data){
            return   $http.get(url+'/notices/notices_of_admin/'+data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'x-access-token':Auth.getToken() } })
                .then(function(data){
                        return data;
                    },
                    function(error) {
                        return error;
                    }
                );
        },
















    }

}]);







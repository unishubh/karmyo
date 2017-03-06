function login_function($form)
{
    //alert("in here");

    
    // Abort any pending request
    /*if (request) {
        request.abort();
    }*/
    // setup some local variables
    var $form = $($form);
   // alert($form);

    // Let's select and cache all the fields
    var $inputs = $form.find("input");

    

    // Serialize the data in the form
    var serializedData = $form.serialize();
    //console.log(serializedData);
  //  alert(serializedData);

    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
   /* $inputs.prop("disabled", true);*/

    // Fire off the request to /form.php
    request = $.ajax({
        url: "http://54.169.67.178:8095/login",
        type: "post",
        data: serializedData
    });

    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
        // Log a message to the console
        console.log("Hooray, it worked!");

        //console.log(response.token);
        //$window.localStorage['_cream'] =data.data['token'];
        localStorage.setItem('_cream',response.token);
        //alert("now redirect");  
        window.location.href="/indexa.html"
    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        //alert("error");
         $("#alertbox1").css('visibility','visible');
         $("#alertbox1").html('Wrong Username/Password');
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    

    // Prevent default posting of form
    //event.preventDefault();


}


function signup_function()
{
    //alert("in here");

    
    // Abort any pending request
    /*if (request) {
        request.abort();
    }*/
    // setup some local variables
    var $form = $("#signup_form");

    // Let's select and cache all the fields
    var $inputs = $form.find("input, select, button, textarea");

    // Serialize the data in the form
    var serializedData = $form.serialize();
    console.log(serializedData);

    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
   /* $inputs.prop("disabled", true);*/

    // Fire off the request to /form.php
    request = $.ajax({
        url: "http://54.169.67.178:8095/register",
        type: "post",
        data: serializedData
    });

    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
        // Log a message to the console
        console.log("Hooray, it worked!");
       login_function('#signup_form');
        //$("#alertbox2").html('Please Sign in to continue');
        //console.log(response.token);
       // window.location.href="/login.html"

        //$window.localStorage['_cream'] =data.data['token'];
        //localStorage.setItem('_cream',response.token);
        
    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        //alert("error");
        //console.log(response.responseText.message);
         $("#alertbox2").css('visibility','visible');
        $("#alertbox2").html('Either the user exists or review your credentials');
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    

    // Prevent default posting of form
    //event.preventDefault();


}
function init()
{
    $("#alertbox1").css('visibility','hidden');
$("#alertbox2").css('visibility','hidden');
}

function ajaxit(n,e,s,p,fbid)
{
    console.log(n);
    n = encodeURIComponent(n);
    p = encodeURIComponent(p);

   request = $.ajax({
        url: "http://54.169.67.178:8095/fb_login",
        type: "post",
        data: "name="+n+"&email="+e+"&fb_id="+fbid+"&device_id=Web_102&image_url="+p+"gender="+s
    });

    request.done(function (response, textStatus, jqXHR){
            //console.log("fgsdg");
         localStorage.setItem('_cream',response.token);
         window.location.href="/indexa.html"
     });
}  


function register()
{
    //alert("in here");

    
    // Abort any pending request
    /*if (request) {
        request.abort();
    }*/
    // setup some local variables
    var $form = $("#register");
   // alert($form);

    // Let's select and cache all the fields
    var $inputs = $form.find("input");

    

    // Serialize the data in the form
    var serializedData = $form.serialize();
    //console.log(serializedData);
  //  alert(serializedData);

    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
   /* $inputs.prop("disabled", true);*/

    // Fire off the request to /form.php
    request = $.ajax({
        url: "http://54.169.67.178:8095/registration",
        type: "post",
        data: serializedData
    });

    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
        // Log a message to the console
        console.log("Hooray, it worked!");

        //console.log(response.token);
        //$window.localStorage['_cream'] =data.data['token'];
        //localStorage.setItem('_cream',response.token);
        //alert("now redirect");  
       // window.location.href="/indexa.html"

       $("#register").hide();
$("#response").fadeIn(1000);


    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){

        alert("The User already exists with this email id");

        // Log the error to the console
        //alert("error");
         
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    

    // Prevent default posting of form
    //event.preventDefault();


}


     

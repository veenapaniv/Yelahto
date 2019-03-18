$(document).ready(function () {
    $("#login-submit").click(function(e){ 
         $.ajax({
            type: 'GET',
            url: 'http://localhost/Yelahto/data/login.json',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function(jsonData) {
                var status = jsonData.status;
            
                if( status.toLowerCase() == 'OK'.toLowerCase()){
                    $("#error-message").hide();
                    window.location.assign("http://localhost/Yelahto/templates/LandingPage.html");
                }  
                else if( status.toLowerCase() != 'OK'.toLowerCase()){
                    $("#error-message").show();                    
                }    

            },
            error: function(data) {
                console.log('Error loading the image');
            }
        });
    });
    
//    $("#login-submit").click(function(e){
//            $.ajax({
//                type:'Get',
//                url: 'http://testcore.apnnaghar.co.in/auth/login',
//                dataType: 'json',
//                success: function(jsonData) {
//                    console.log(jsonData.status);
//                },
//                error:function(jsonData){
//                    console.log(jsonData.status);
//                }
//                
//            });
//                             
//    });
//    
    
});
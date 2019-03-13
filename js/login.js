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
                    window.location.assign("http://localhost/Yelahto/templates/landingPage.html");
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
    
    
    
});
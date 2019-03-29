$(document).ready(function () {
    $("#login-submit").click(function(e){ 
	var authRequest = {
	userName:"veenapani.v@gmail.com",
	password: "veena123"
};
         $.ajax({
            type: "POST",
			
            url: 'http://testcore.apnnaghar.co.in/auth/login',
			 dataType: "json",
			data:JSON.stringify(authRequest),
             contentType: 'application/json; charset=utf-8',
			
                    success: function (jsonData) {
                        console.log(jsonData);
                        var status = jsonData.status;

                        if( status.toLowerCase() == 'OK'.toLowerCase()){
                            $("#error-message").hide();
                            window.location.assign("http://localhost/Yelahto/templates/LandingPage.html");
                        }  
                        else if( status.toLowerCase() != 'OK'.toLowerCase()){
                            $("#error-message").show();                    
                        }    
                        
                    }
                    error: function(data) {
                        console.log('Error loading the image');
                    }
           
    }); });
});
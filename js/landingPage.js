$(function(){
    $('.LandingPage-FromDate.input-group.date').datepicker({
        calendarWeeks: true,
        todayHighlight: true,
        autoclose: true
    });  
});
$(function(){
    $('.LandingPage-ToDate.input-group.date').datepicker({
        calendarWeeks: true,
        todayHighlight: true,
        autoclose: true
    }); 
});

/*Trigger for Time adjuster*/

$(window).load(function(){
        //$(".btnNewOrder").addEventListener("click", NewOrder, false)
        //document.getElementsByClassName("btnNewOrder").addEventListener("click", NewOrder, false); 
//        $(".btnNewOrder").click(function(){
//            window.location.assign("http://localhost/Yelahto/templates/OrderCreation.html");
//        });
        
});

$(document).ready(function(){  
    //on load function to bind Hamburger 
	loadDataDetails();
    
    //loadSearchDetails();
    
});

function loadSearchDetails(){
    $.ajax({
        type: 'GET',
        url: 'http://localhost/Yelahto/data/searchOrder.json',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success:function(jsonData){
          console.log(jsonData.listOfOrders[0].adultSwamiPAX);  
        },
        error:function(jsonData){
            console.log(jsonData.listOfOrders.adultSwamiPAX);
        }
    })
}

function loadDataDetails()
{
     $.ajax({
    type: 'GET',
    url: 'http://localhost/Yelahto/data/searchOrder.json',
        //url: 'http://localhost/Yelahto/data/landing_page.json',
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function(jsonData) {
      var pages=(jsonData.listOfOrders.length)/4;
        
        if (pages == Math.ceil(pages)) 
            pages=pages;
          else 
            pages=Math.ceil(pages);
        

            // Now setup the pagination using the `.pagination-page` div.
            $('#pagination-demo').twbsPagination({
                totalPages: pages,
                visiblePages: 4,
                next: 'Next',
                prev: 'Prev',
                onPageClick: function (event, page) {
                            $(".history").children().remove();
                for(var i=(4*(page-1));i<(4*(page-1))+4;i++)       
                     {                           
                    if (i<jsonData.listOfOrders.length)
                        {
                            var nonVegPax = jsonData.listOfOrders[i].adultNonVegPAX + jsonData.listOfOrders[i].childNonVegPAX;
                            var jainPax = jsonData.listOfOrders[i].adultJainPAX + jsonData.listOfOrders[i].childJainPAX;
                            var vegPax = jsonData.listOfOrders[i].adultVegPAX + jsonData.listOfOrders[i].childVegPAX
                            var swamiPax = jsonData.listOfOrders[i].adultSwamiPAX + jsonData.listOfOrders[i].childSwamiPAX
                        var class1 = document.createElement("p");
                        $(class1).addClass("row col-sm-6 parent"+i).appendTo(".history");

                        var class2 = document.createElement("div");
                        $(class2).addClass("second"+i).appendTo(".parent"+i);


                        var class3 = document.createElement("div");
                        $(class3).addClass("panel panel-default panel"+i).appendTo(".second"+i);

                        var class4=document.createElement("div");
                        $(class4).addClass("panel-heading").text("Date and Time").appendTo(".panel"+i);

                        var class5 = document.createElement("div");
                        $(class5).addClass("panel-body").appendTo(".panel"+i);                        
                        $(class5).append("<p>"+jsonData.listOfOrders[i].tourOperator+"</p>");
                        $(class5).append("<p>"+"Pax:"+nonVegPax+jainPax+vegPax+swamiPax+"</p>");
                        $(class5).append("<p>"+jsonData.listOfOrders[i].deliveryAddress+"</p>");
                        $(class5).append("<p>"+"Non-Veg:"+nonVegPax+", Veg:"+vegPax+", Jain:"+jainPax+", Swami"+swamiPax+"</p>");    
                        $(class5).append("<button type=\"button\" class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" data-target=\"#myModal\">See Details</button> ");                  
                        }
                    }
                    
                    
        
                }
            });
    
    },
    error: function(data) {
        console.log('Error loading the image');
    }
});
    
    

}
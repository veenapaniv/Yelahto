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
    
});

function loadDataDetails()
{
     $.ajax({
    type: 'GET',
    url: 'http://localhost/Yelahto/data/landing_page.json',
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function(jsonData) {
      var pages=(jsonData.operatorDetails.length)/4;
          //console.log(pages); 
        //no.of pages
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
                    //fetch content and render here
                    //$('#page-content').text('Page ' + page) + ' content here';
                    //remove children before appending with new data
                            $(".history").children().remove();
                for(var i=(4*(page-1));i<(4*(page-1))+4;i++)       
                     {                           
                    if (i<jsonData.operatorDetails.length)
                        {
                        
                       // $(".history").addClass("row col-sm-6 parent"+i).appendTo("#page-content");
                        var class1 = document.createElement("p");
                        $(class1).addClass("row col-sm-6 parent"+i).appendTo(".history");

                        var class2 = document.createElement("div");
                        $(class2).addClass("second"+i).appendTo(".parent"+i);


                        var class3 = document.createElement("div");
                        $(class3).addClass("panel panel-default panel"+i).appendTo(".second"+i);

                        var class4=document.createElement("div");
                        $(class4).addClass("panel-heading").text("Date and Time").appendTo(".panel"+i);

                        var class5 = document.createElement("div");
                        $(class5).addClass("panel-body").text(jsonData.operatorDetails[i].name).appendTo(".panel"+i)
                        $(class5).addClass("panel-body").text(jsonData.operatorDetails[i].data).appendTo(".panel"+i)
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
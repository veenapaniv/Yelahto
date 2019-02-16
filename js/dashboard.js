var include_children = false;

/*This would trigger the date picker*/
$(function(){
    $('.order-creation.input-group.date').datepicker({
        calendarWeeks: true,
        todayHighlight: true,
        autoclose: true
    });  
    });
/*Trigger for Time adjuster*/


/*To trigger the select pickers on the page*/
$('.selectpicker').selectpicker();

/*This method binds events on load of the complete page*/
$(window).load(function(){
   includeChildren();
   loadPax();
})

/*The document ready method to bind all events when the document is ready to serve*/
$(document).ready(function () {
     
    /*To handle the stepper functionalities*/
    var navListItems = $('div.setup-panel div a'),
        allWells = $('.setup-content'),
        allNextBtn = $('.nextBtn');

    allWells.hide();
    
    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
            $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('btn-success').addClass('btn-default');
            $item.addClass('btn-success');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    allNextBtn.click(function () {
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url']"),
            isValid = true;

        $(".form-group").removeClass("has-error");
        for (var i = 0; i < curInputs.length; i++) {
            if (!curInputs[i].validity.valid) {
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }

        if (isValid) nextStepWizard.removeAttr('disabled').trigger('click');
        includeChildren();
        loadPax();
    });

    $('div.setup-panel div a.btn-success').trigger('click');  
    /*Stepper code ends here!*/
    
    /*To display other operator text box*/
    var other = $(".others-operator-name");
    document.getElementsByName('new-order-select')[0].onchange = function() {
        other.css('display', (this.value.toLowerCase()=='others')? 'block' : 'none');
        if(this.value.toLowerCase() == 'others'){
            $(".others-operator-name input").attr('required', 'required');    
        }
        else{
            $(".others-operator-name input").removeAttr('required');
        }
        
    };
    
    /*4th stepper - show pax details accordingly*/
    $(".include-children").click(function(){        
       includeChildren();
    });
    
//    $(".nextBtn").click(function(){
//        includeChildren();
//        loadPax();
//    })
    
    $(".pax-checkbox ").click(function(){
        loadPax();
    });
    
});

function includeChildren(){
     if($('#option1').parent().hasClass("active")){
            include_children = true;
        }
        else{
            include_children = false;
        }
        if(!include_children){
            $(".child-pax").attr("disabled","disabled");
        }
        if(include_children){
            $(".child-pax").removeAttr('disabled');
        }
}

function loadPax(){
 if($('#veg').is(':checked')){
     $("#veg-pax").show();
 }
 else if(!$('#veg').is(':checked')){
     $("#veg-pax").hide();
 }
 if($('#non-veg').is(':checked')){
     $("#non-veg-pax").show();
 }
 else if(!$('#non-veg').is(':checked')){
     $("#non-veg-pax").hide();
 }
if($('#jain').is(':checked')){
     $("#jain-pax").show();
 }
 else if(!$('#jain').is(':checked')){
     $("#jain-pax").hide();
 }
if($('#swami').is(':checked')){
     $("#swami-pax").show();
 }
 else if(!$('#swami').is(':checked')){
     $("#swami-pax").hide();
 }
    
}


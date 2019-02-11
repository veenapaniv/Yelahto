
/*This would trigger the date picker*/
$(function(){
    $('.order-creation.input-group.date').datepicker({
        calendarWeeks: true,
        todayHighlight: true,
        autoclose: true
    });  
    });
/*Trigger for Time adjuster*/
 $('#timepicker').timepicker({
            uiLibrary: 'bootstrap'
        });

/*To trigger the select pickers on the page*/
$('.selectpicker').selectpicker();

/*This method binds events on load of the complete page*/
$(window).load(function(){
   
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
    
    
});
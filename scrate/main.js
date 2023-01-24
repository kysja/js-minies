$(document).ready(function() {

    $(".rate .form-range").change(function(){
        $(this).closest('.rate').find('.k5_res').text($(this).val());
        total();
    });

    $(".rate .form-check-input").change(function() {
        if ($(this).is(':checked')) {
            $(this).closest('.rate').find('.form-range').parent().parent().hide();
            $(this).closest('.rate').find('.k5_res').text(0);
            total();
        } else {
            $(this).closest('.rate').find('.form-range').parent().parent().show();
            $(this).closest('.rate').find('.k5_res').text($(this).closest('.rate').find('.form-range').val());
            total();
        }
    });

});



function total() {
    let res=0;
    $('.k5_res').each(function() {
        res += parseInt($(this).text());
    });
    $("#total").text(res);
}

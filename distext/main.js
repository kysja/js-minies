$(document).ready(function() {

    let countdown;
    let timeLeft;

    $("#text").on("keyup", function() {
        clearTimeout(countdown);
        timeLeft = 5;
        countdown = setInterval(function() {
            if (timeLeft > 0) {
                $("#countdown").text(timeLeft);
                timeLeft--;
            } else {
                clearInterval(countdown);
                $("#countdown").text('-');
                $('#text').addClass('animated');
                setTimeout(function() {
                    $("#text").val("");
                    $('#text').removeClass('animated');
                }, 1000);
            }
        }, 1000);
    });
    
});
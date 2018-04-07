$(document).ready(function(){
	$(".menu").click(function(){
		$(".navigation").toggle();
	})
})

function windowSize(){
    if ($(window).width() <= '800'){
        $('.navigation').hide();
    } else {
        $('.navigation').show();
    }
}

$(window).on('load resize',windowSize);
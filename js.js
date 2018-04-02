$(document).ready(function(){
// when clicking on nav button nav-menu pops out
  $('#hamburger').click(function(e){
  	e.preventDefault();
  	$(this).toggleClass("trans");
  	$('#nav2').slideToggle(500);
  });






  $(window).scroll(function() {
// animation shows when scrolling	
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;
    
    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slider");
    }
    var sizeWin = $(window).width();  
    if(winTop >= 500){
    	if(sizeWin > 768){
    	$("#top").fadeIn(400,'linear'); }
    }
    else{
       $("#top").fadeOut(400,'linear');	
    }
  }); 
});
	
			
 //to the top 
	$("#mj").on('click',function(){
		$("html,body").animate({
            scrollTop:0
		},800,'linear');
	});


	$("#top").on('click',function(){
		$("html,body").animate({
            scrollTop:0
		},800,'linear');
	});

// when we click on the link it goes to the direction
	$("#nav1 a, #nav2 a").click(function(e){
		e.preventDefault();
        var source = $(this).text().toLowerCase();
		var target = $('#'+source).offset().top;
		$("#nav2").slideUp(500);
		$("#hamburger").removeClass("trans");
		$('html,body').animate({
			scrollTop: target
		},800,'linear');
	});

	
});
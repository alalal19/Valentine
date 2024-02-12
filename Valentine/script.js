$( "#header-plugin" ).load( "https://vivinantony.github.io/header-plugin/", function() {
	$("a.back-to-link").attr("href", "http://blog.thelittletechie.com/2016/02/be-my-valentine.html#tlt")  
});

$(document).ready(function(){
  $('.title').click(function(){
    $('.container').addClass('open');
  });
  
  
  $('.close').click(function(){
    $('.container').removeClass('open');
  });
});
$(document).ready(function(){
	
	setTimeout(function(){
		$(".contentido1").fadeOut(1000);
	},2000);

	setTimeout(function() {
		$(".contentido2").fadeIn(1000);
		$('.opciones').show();
		$('.pizzas').hide();
		$('.churrascos').hide();
		$('.hamburgueza').hide();
	},2000);

	/* funcion para mostrar las opciones de churrascos */
$('.churr').click(function(){
  $('.churrascos').show();
  $('.pizzas').hide();
  $('.hamburgueza').hide();
  $('.opciones').hide();
});

/*funcion para mostras las opciones de hamburgueza*/
$('.hamb').click(function(){
  $('.hamburgueza').show();
  $('.pizzas').hide();
  $('.churrascos').hide();
  $('.opciones').hide();
});

/*funcion para mostras las opciones de pizza*/
$('.pizza').click(function(){
  $('.pizzas').show();
  $('.churrascos').hide();
  $('.hamburgueza').hide();
  $('.opciones').hide();
});

$('#churrascos').click(function(){

})

	});




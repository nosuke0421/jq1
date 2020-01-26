$('.hide').hide();

$('.btn').hover(function(){
  $(this).css('background-color','rgba(249, 159, 72,1)');

},function(){
  $(this).css('background-color','rgba(249, 159, 72,0.7)');
});

$('#btn0').click(function(){
  $('#hide-area0').fadeIn();
});

$('#btn1').click(function(){
  $('#hide-area1').fadeIn();
});

$('#btn2').click(function(){
  $('#appear-area0').fadeOut();
});

$('#btn3').click(function(){
  $('#appear-area1').slideUp();
});

$('#btn4').click(function(){
  $('#hide-area2').slideDown();
});

$('#btn5').click(function(){
  $('#hide-area3').show();
});

$('#btn6').click(function(){
  $('#appear-area2').hide();
});

$('#btn7').click(function(){
  $('.parent').find('p').css('border','solid red 2px');
});

$('#btn8').click(function(){
  $('.parent2').children('p').css('border','solid blue 2px');
});

$('.hv').hover(function(){
  $('#appear').fadeIn();
},
function(){
  $('#appear').fadeOut();
});

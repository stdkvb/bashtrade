jQuery(function($){
  // $("#date").mask("99/99/9999");
  $("#phone").mask("+7 (999) 999-9999");
  $(".formInput[type='tel']").mask("+7 (999) 999-9999");
  // $("#tin").mask("99-9999999");
  // $("#ssn").mask("999-99-9999");
});

/* $.fn.setCursorPosition = function(pos) {
  if ($(this).get(0).setSelectionRange) {
    $(this).get(0).setSelectionRange(pos, pos);
  } else if ($(this).get(0).createTextRange) {
    var range = $(this).get(0).createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
}; */


/* $('input[id="phone"]').setCursorPosition(4); */  // set position number

/* $('input[id="phone2"]').setCursorPosition(4); */  // set position number;



$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

function setBackGround() {
  let el = $('.currency li');
  for (var i = 0; i < el.length; i++) {
    let clas = el[i].className;

    $(el[i]).css('background-image', 'url(' + './flag-icon/'+ clas + '.png' +')');
  }
}
setBackGround();

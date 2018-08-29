$( document ).ready(function() {

  // TOOLTIPS
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

//hero text background change

  let mouseX, mouseY;
  let ww = $( window ).width();
  let wh = $( window ).height();
  let traX, traY;
  $(document).mousemove(function(e){
    mouseX = e.pageX;
    mouseY = e.pageY;
    traX = ((4 * mouseX) / 570) + 40;
    traY = ((4 * mouseY) / 570) + 50;
    $(".title > h1").css({"background-position": traX + "%" + traY + "%"});
    $(".title > h2").css({"background-position": traX + "%" + traY + "%"});
  });

// Flag icons adding in background

function setBackGround() {
  let el = $('.currency li');
  for (var i = 0; i < el.length; i++) {
    let clas = el[i].className;

    $(el[i]).css('background-image', 'url(' + './flag-icon/'+ clas + '.png' +')');
  }
}
setBackGround();

//currency price

var EurUrl = 'http://api.nbp.pl/api/exchangerates/rates/a/eur/?format=json';
var GbpUrl = 'http://api.nbp.pl/api/exchangerates/rates/a/gbp/?format=json';
var UsdUrl = 'http://api.nbp.pl/api/exchangerates/rates/a/usd/?format=json';
var ChfUrl = 'http://api.nbp.pl/api/exchangerates/rates/a/chf/?format=json';

var EurCurr = $('#pairEURPLN');
var GbpCurr = $('#pairGBPLN');
var UsdCurr = $('#pairUSDPLN');
var ChfCurr = $('#pairCHFPLN');
var date = $('#time');

  function insertEur(response) {
    EurCurr.text(response.rates[0].mid);
    date.text(response.rates[0].effectiveDate);
  }
  function insertGbp(response) {
    GbpCurr.text(response.rates[0].mid)
  }
  function insertUsd(response) {
    UsdCurr.text(response.rates[0].mid)
  }
  function insertChf(response) {
    ChfCurr.text(response.rates[0].mid)
  }


  function loadEUR() {

    $.ajax({
      url: EurUrl,
      dataType : 'json',
      type: 'GET'
    }).done(function (response) {
      insertEur(response);
    }).fail(function (error) {
      console.log(error);
    })
  }

  function loadGBP() {

    $.ajax({
      url: GbpUrl,
      dataType : 'json',
      type: 'GET'
    }).done(function (response) {
      insertGbp(response);
    }).fail(function (error) {
      console.log(error);
    })
  }

  function loadUSD() {

    $.ajax({
      url: UsdUrl,
      dataType : 'json',
      type: 'GET'
    }).done(function (response) {
      insertUsd(response);
    }).fail(function (error) {
      console.log(error);
    })
  }
  function loadCHF() {

    $.ajax({
      url: ChfUrl,
      dataType : 'json',
      type: 'GET'
    }).done(function (response) {
      insertChf(response);
    }).fail(function (error) {
      console.log(error);
    })
  }

  loadEUR();
  loadUSD();
  loadGBP();
  loadCHF();

 // button reload actual prices
  $('#newPrices').on('click', function () {
    loadEUR();
    loadUSD();
    loadGBP();
    loadCHF();

    $('.alert').show();
  });

  // Animate hover efect in places cards

  $('.places .col-sm-4').hover(
    // trigger when mouse hover
    function(){
        $(this).animate({
            marginTop: "-=1%",
        },200);
    },

    // trigger when mouse out
    function(){
        $(this).animate({
            marginTop: "0%"
        },200);
    }
  );

  //FadeIn elements in vieport with scroll timer to improve fireup scrolling function

  let timer;

  $(window).scroll( function(){
    clearTimeout(timer);
    timer = setTimeout(function () {
      /* Check the location of each desired element */
      $('.hideme').each( function(i){

        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > bottom_of_object ){
          $(this).animate({'opacity':'1'},600);
        }
      });
    }, 50);
  });

});

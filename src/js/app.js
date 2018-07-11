$( document ).ready(function() {
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

  $('#newPrices').on('click', function () {
    loadEUR();
    loadUSD();
    loadGBP();
    loadCHF();
  });

});

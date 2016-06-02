/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var ajax = require('ajax');

var quotePage = new UI.Card({
  title: '',
  body: 'Getting quote...',
  scrollable: true,
  style: 'small'
});

function getQuote(e) {
  console.log('getQuote() called');
  var url = 'https://andruxnet-random-famous-quotes.p.mashape.com';
  var headers = {
    "X-Mashape-Key": "d3efyiXfa1mshirwLZ34ztyor1JVp11jpGxjsnuIyAs4n8SHp5",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "application/json"
  };
  ajax({url:url, headers:headers}, function(data) {
    var data_obj = JSON.parse(data);
    console.log(data_obj.quote + ' -' + data_obj.author);
    quotePage.title(data_obj.author);
    quotePage.body(data_obj.quote);
    quotePage.show();
  });
}

getQuote(null);
quotePage.show();

quotePage.on('click', 'select', getQuote);


// for testing
// getQuote(null);


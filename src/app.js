/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var ajax = require('ajax');

var main = new UI.Card({
  title: 'Random Quote',
  // icon: 'images/menu_icon.png',
  // subtitle: ...
  body: 'Press any button to get a new quote.'
  // subtitleColor: 'indigo', // Named colors
  // bodyColor: '#9a0036' // Hex colors
});

main.show();

function getQuote(e) {
  
  var url = 'andruxnet-random-famous-quotes.p.mashape.com/?cat=movies';
  var headers = {
    "X-Mashape-Key": "d3efyiXfa1mshirwLZ34ztyor1JVp11jpGxjsnuIyAs4n8SHp5",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "application/json"
  };
  ajax({url:url, headers:headers}, function(data) {
    console.log(data);
    var quotePage = new UI.Card({
      title: 'Random Quote',
      body: data.quote + '\n -' + data.author,
      scrollable: true
    });
    quotePage.show();
  });
  
}

main.on('click', 'select', getQuote);
main.on('click', 'up', getQuote);
main.on('click', 'down', getQuote);

quotePage.on('click', 'select', getQuote);
quotePage.on('click', 'back', function(e) {
  main.show();
});

// for testing
// getQuote(null);


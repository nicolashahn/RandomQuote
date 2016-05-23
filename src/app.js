/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var request = require('request');

var main = new UI.Card({
  title: 'Random Quote',
  icon: 'images/menu_icon.png',
  // subtitle: ...
  body: 'Press any button to get a new quote.',
  subtitleColor: 'indigo', // Named colors
  bodyColor: '#9a0036' // Hex colors
});

var quotePage = new UI.Card({
  title: 'Random Quote',
  body: body_obj.quote + '\n -' + body_obj.author,
  scrollable: true
});

function getQuote(e) {
  var properties = { cat:'movies' }
  var headers = {
    "X-Mashape-Key": "d3efyiXfa1mshirwLZ34ztyor1JVp11jpGxjsnuIyAs4n8SHp5",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "application/json"
  } 
  request({url:'https://andruxnet-random-famous-quotes.p.mashape.com', properties, headers}, function(err, res, body){
    if(err) {console.log(err); return; }
    console.log('get response: '+JSON.stringify(res)); 
    var body_obj = JSON.parse(body);
    quotePage.show();
  });
}

main.on('click', 'select', getQuote);
main.on('click', 'up', getQuote);
main.on('click', 'down', getQuote);

quotePage('click', 'select', getQuote);
quotePage.on('click', 'back', function(e) {
  main.show();
});

// for testing
// getQuote(null);

main.show();

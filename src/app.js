/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var https = require('https');

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
  var options = {
    host: 'andruxnet-random-famous-quotes.p.mashape.com',
    // port: 80,
    path: '/?cat=movies',
    method: 'POST',
    headers: {
      "X-Mashape-Key": "d3efyiXfa1mshirwLZ34ztyor1JVp11jpGxjsnuIyAs4n8SHp5",
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept": "application/json"
    }
  };

  var req = https.get(options, function(res) {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));

        var bodyChunks = [];
        res.on('data', function(chunk) {
          bodyChunks.push(chunk);
        }).on('end', function() {
          var body = Buffer.concat(bodyChunks);
          body_obj = JSON.parse(body.toString());
          var quotePage = new UI.Card({
            title: 'Random Quote',
            body: body_obj.quote + '\n -' + body_obj.author,
            scrollable: true
          });
          quotePage.show();
        })
  });

  req.on('error', function(e) {
        console.log('ERROR: ' + e.message);
        quotePage.body = 'Error getting quote';
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

